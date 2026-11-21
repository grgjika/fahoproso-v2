// Cloudflare Worker: email-code check in front of the booking calendar.
//
//   POST /send   { email }        -> emails a 6-digit code (valid 10 minutes)
//   POST /verify { email, code }  -> returns { ok: true, url } with the booking
//                                    calendar address, only for a correct code
//
// Settings (Cloudflare dashboard > Worker > Settings; never put these in the repo):
//   Secrets:   RESEND_API_KEY, CODE_SECRET (any long random text), BOOKING_URL
//   Variables: FROM_EMAIL (e.g. "FAHOPROSO <booking@fahoproso.com>"),
//              ALLOWED_ORIGINS (e.g. "https://www.fahoproso.com"),
//              REPLY_TO (optional: where replies go, e.g. offers@fahoproso.com)
//              OWNER_EMAIL (optional: gets a note when someone verifies)
//   KV binding: GATE (stores codes and counters)

const CODE_TTL = 600; // seconds
const MAX_ATTEMPTS = 5;
const MAX_SENDS_PER_EMAIL_PER_HOUR = 3;
const MAX_SENDS_PER_IP_PER_HOUR = 10;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

function cors(request, env) {
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const origin = request.headers.get("Origin") || "";
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
  if (allowed.includes(origin)) headers["Access-Control-Allow-Origin"] = origin;
  return { headers, originOk: allowed.includes(origin) };
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
  });
}

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function newCode() {
  const n = new Uint32Array(1);
  crypto.getRandomValues(n);
  return String(n[0] % 1000000).padStart(6, "0");
}

async function bump(env, key, limit, ttl) {
  const current = parseInt((await env.GATE.get(key)) || "0", 10);
  if (current >= limit) return false;
  await env.GATE.put(key, String(current + 1), { expirationTtl: ttl });
  return true;
}

async function sendMail(env, to, subject, text) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [to],
      subject,
      text,
      ...(env.REPLY_TO ? { reply_to: env.REPLY_TO } : {}),
    }),
  });
  return res.ok;
}

const worker = {
  async fetch(request, env) {
    const { headers, originOk } = cors(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: originOk ? 204 : 403, headers });
    if (request.method !== "POST" || !originOk) return json({ ok: false, error: "not_allowed" }, 403, headers);

    const path = new URL(request.url).pathname.replace(/\/+$/, "");
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: "bad_request" }, 400, headers);
    }

    const email = String(body.email || "").trim().toLowerCase();
    if (!EMAIL_RE.test(email) || email.length > 254) return json({ ok: false, error: "bad_email" }, 400, headers);
    const emailKey = await sha256(email);

    if (path === "/send") {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const okEmail = await bump(env, `rl:e:${emailKey}`, MAX_SENDS_PER_EMAIL_PER_HOUR, 3600);
      const okIp = await bump(env, `rl:i:${await sha256(ip)}`, MAX_SENDS_PER_IP_PER_HOUR, 3600);
      if (!okEmail || !okIp) return json({ ok: false, error: "too_many" }, 429, headers);

      const code = newCode();
      const hash = await sha256(`${emailKey}:${code}:${env.CODE_SECRET}`);
      await env.GATE.put(`code:${emailKey}`, JSON.stringify({ hash, attempts: 0 }), { expirationTtl: CODE_TTL });

      const sent = await sendMail(
        env,
        email,
        "Your FAHOPROSO verification code",
        `Your verification code is ${code}\n\nIt works for 10 minutes. Enter it on the FAHOPROSO contact page to see our available times for a video call.\n\nIf you did not ask for this, you can ignore this email.`
      );
      if (!sent) return json({ ok: false, error: "send_failed" }, 502, headers);
      return json({ ok: true }, 200, headers);
    }

    if (path === "/verify") {
      const code = String(body.code || "").trim();
      if (!/^\d{6}$/.test(code)) return json({ ok: false, error: "bad_code" }, 400, headers);

      const stored = JSON.parse((await env.GATE.get(`code:${emailKey}`)) || "null");
      if (!stored) return json({ ok: false, error: "expired" }, 400, headers);
      if (stored.attempts >= MAX_ATTEMPTS) {
        await env.GATE.delete(`code:${emailKey}`);
        return json({ ok: false, error: "too_many_attempts" }, 429, headers);
      }

      const hash = await sha256(`${emailKey}:${code}:${env.CODE_SECRET}`);
      if (hash !== stored.hash) {
        stored.attempts += 1;
        await env.GATE.put(`code:${emailKey}`, JSON.stringify(stored), { expirationTtl: CODE_TTL });
        return json({ ok: false, error: "wrong_code" }, 400, headers);
      }

      await env.GATE.delete(`code:${emailKey}`); // a code works once
      if (env.OWNER_EMAIL) {
        await sendMail(env, env.OWNER_EMAIL, "Booking calendar opened", `A visitor verified this email and opened the booking calendar: ${email}`);
      }
      return json({ ok: true, url: env.BOOKING_URL }, 200, headers);
    }

    return json({ ok: false, error: "not_found" }, 404, headers);
  },
};

export default worker;

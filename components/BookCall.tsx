"use client";

import { FormEvent, useState } from "react";
import { CalendarClock, MailCheck, Video } from "lucide-react";

type Locale = "en" | "es" | "el" | "sq";

/**
 * Address of the Cloudflare Worker in /workers/booking-gate (it emails a code
 * and, for a correct code, returns the booking calendar address; that address
 * is stored only in the Worker, not on this site). Leave empty to hide this
 * section.
 */
const BOOKING_GATE_URL = "";

const copy: Record<
  Locale,
  {
    label: string;
    title: string;
    intro: string;
    emailLabel: string;
    emailPlaceholder: string;
    sendCode: string;
    sending: string;
    codeTitle: string;
    codeText: string;
    codeLabel: string;
    verify: string;
    verifying: string;
    changeEmail: string;
    resend: string;
    openTitle: string;
    openText: string;
    frame: string;
    errors: Record<string, string>;
  }
> = {
  en: {
    label: "Book a video call",
    title: "Book a 30-minute video call",
    intro: "Enter your email and we will send you a short code. After you enter it, our available times open right here.",
    emailLabel: "Your email",
    emailPlaceholder: "you@example.com",
    sendCode: "Send me the code",
    sending: "Sending...",
    codeTitle: "Check your email",
    codeText: "We sent a 6-digit code to",
    codeLabel: "6-digit code",
    verify: "Show available times",
    verifying: "Checking...",
    changeEmail: "Use a different email",
    resend: "Send a new code",
    openTitle: "Choose a time that works for you",
    openText: "Pick an open time. You will get a confirmation by email with the video link.",
    frame: "Available times for a 30-minute video call",
    errors: {
      bad_email: "Please enter a valid email address.",
      too_many: "Too many requests. Please try again in an hour, or call (616) 275-4443.",
      send_failed: "We could not send the email. Please try again, or call (616) 275-4443.",
      wrong_code: "That code is not right. Please check it and try again.",
      expired: "That code expired. Please ask for a new one.",
      too_many_attempts: "Too many wrong tries. Please ask for a new code.",
      bad_code: "Please enter the 6 digits from the email.",
      network: "Connection problem. Please try again, or call (616) 275-4443.",
    },
  },
  es: {
    label: "Reserve una videollamada",
    title: "Reserve una videollamada de 30 minutos",
    intro: "Escriba su correo y le enviaremos un código corto. Al ingresarlo, nuestros horarios disponibles se abren aquí mismo.",
    emailLabel: "Su correo electrónico",
    emailPlaceholder: "usted@ejemplo.com",
    sendCode: "Enviarme el código",
    sending: "Enviando...",
    codeTitle: "Revise su correo",
    codeText: "Enviamos un código de 6 dígitos a",
    codeLabel: "Código de 6 dígitos",
    verify: "Ver horarios disponibles",
    verifying: "Verificando...",
    changeEmail: "Usar otro correo",
    resend: "Enviar un código nuevo",
    openTitle: "Elija la hora que le convenga",
    openText: "Elija un horario disponible. Recibirá una confirmación por correo con el enlace de la videollamada.",
    frame: "Horarios disponibles para una videollamada de 30 minutos",
    errors: {
      bad_email: "Escriba un correo electrónico válido.",
      too_many: "Demasiadas solicitudes. Inténtelo en una hora o llame al (616) 275-4443.",
      send_failed: "No pudimos enviar el correo. Inténtelo de nuevo o llame al (616) 275-4443.",
      wrong_code: "Ese código no es correcto. Revíselo e inténtelo de nuevo.",
      expired: "Ese código venció. Pida uno nuevo.",
      too_many_attempts: "Demasiados intentos incorrectos. Pida un código nuevo.",
      bad_code: "Escriba los 6 dígitos del correo.",
      network: "Problema de conexión. Inténtelo de nuevo o llame al (616) 275-4443.",
    },
  },
  el: {
    label: "Κλείστε βιντεοκλήση",
    title: "Κλείστε βιντεοκλήση 30 λεπτών",
    intro: "Γράψτε το email σας και θα σας στείλουμε έναν σύντομο κωδικό. Μόλις τον εισαγάγετε, οι διαθέσιμες ώρες μας ανοίγουν εδώ.",
    emailLabel: "Το email σας",
    emailPlaceholder: "esy@paradeigma.com",
    sendCode: "Στείλτε μου τον κωδικό",
    sending: "Αποστολή...",
    codeTitle: "Ελέγξτε το email σας",
    codeText: "Στείλαμε έναν κωδικό 6 ψηφίων στο",
    codeLabel: "Κωδικός 6 ψηφίων",
    verify: "Εμφάνιση διαθέσιμων ωρών",
    verifying: "Έλεγχος...",
    changeEmail: "Χρήση άλλου email",
    resend: "Αποστολή νέου κωδικού",
    openTitle: "Επιλέξτε την ώρα που σας βολεύει",
    openText: "Διαλέξτε μια διαθέσιμη ώρα. Θα λάβετε επιβεβαίωση με email και τον σύνδεσμο της κλήσης.",
    frame: "Διαθέσιμες ώρες για βιντεοκλήση 30 λεπτών",
    errors: {
      bad_email: "Γράψτε ένα έγκυρο email.",
      too_many: "Πάρα πολλά αιτήματα. Δοκιμάστε σε μία ώρα ή καλέστε το (616) 275-4443.",
      send_failed: "Δεν στάλθηκε το email. Δοκιμάστε ξανά ή καλέστε το (616) 275-4443.",
      wrong_code: "Ο κωδικός δεν είναι σωστός. Ελέγξτε τον και δοκιμάστε ξανά.",
      expired: "Ο κωδικός έληξε. Ζητήστε νέο.",
      too_many_attempts: "Πολλές λανθασμένες προσπάθειες. Ζητήστε νέο κωδικό.",
      bad_code: "Γράψτε τα 6 ψηφία από το email.",
      network: "Πρόβλημα σύνδεσης. Δοκιμάστε ξανά ή καλέστε το (616) 275-4443.",
    },
  },
  sq: {
    label: "Rezervoni një video thirrje",
    title: "Rezervoni një video thirrje 30-minutëshe",
    intro: "Shkruani email-in tuaj dhe do t'ju dërgojmë një kod të shkurtër. Pasi ta shkruani, orët tona të lira hapen këtu.",
    emailLabel: "Email-i juaj",
    emailPlaceholder: "ju@shembull.com",
    sendCode: "Më dërgoni kodin",
    sending: "Duke dërguar...",
    codeTitle: "Kontrolloni email-in",
    codeText: "Dërguam një kod 6-shifror te",
    codeLabel: "Kodi 6-shifror",
    verify: "Shfaq orët e lira",
    verifying: "Duke kontrolluar...",
    changeEmail: "Përdor një email tjetër",
    resend: "Dërgo një kod të ri",
    openTitle: "Zgjidhni orarin që ju përshtatet",
    openText: "Zgjidhni një orar të lirë. Do të merrni konfirmim me email me lidhjen e thirrjes.",
    frame: "Orët e lira për një video thirrje 30-minutëshe",
    errors: {
      bad_email: "Shkruani një email të vlefshëm.",
      too_many: "Shumë kërkesa. Provoni pas një ore ose telefononi (616) 275-4443.",
      send_failed: "Nuk mundëm ta dërgonim email-in. Provoni përsëri ose telefononi (616) 275-4443.",
      wrong_code: "Ky kod nuk është i saktë. Kontrolloni dhe provoni përsëri.",
      expired: "Ky kod ka skaduar. Kërkoni një të ri.",
      too_many_attempts: "Shumë përpjekje të gabuara. Kërkoni një kod të ri.",
      bad_code: "Shkruani 6 shifrat nga email-i.",
      network: "Problem lidhjeje. Provoni përsëri ose telefononi (616) 275-4443.",
    },
  },
};

type Step = "email" | "code" | "open";

export default function BookCall({ locale }: { locale: Locale }) {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [calendarUrl, setCalendarUrl] = useState("");

  if (!BOOKING_GATE_URL) return null;
  const text = copy[locale];

  async function call(path: "send" | "verify", payload: Record<string, string>) {
    const res = await fetch(`${BOOKING_GATE_URL.replace(/\/$/, "")}/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return (await res.json()) as { ok: boolean; error?: string; url?: string };
  }

  async function sendCode(event?: FormEvent) {
    event?.preventDefault();
    setError("");
    setBusy(true);
    try {
      const data = await call("send", { email: email.trim() });
      if (data.ok) {
        setCode("");
        setStep("code");
      } else {
        setError(text.errors[data.error ?? ""] ?? text.errors.network);
      }
    } catch {
      setError(text.errors.network);
    } finally {
      setBusy(false);
    }
  }

  async function verify(event: FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const data = await call("verify", { email: email.trim(), code: code.trim() });
      if (data.ok && data.url) {
        setCalendarUrl(data.url);
        setStep("open");
      } else {
        setError(text.errors[data.error ?? ""] ?? text.errors.network);
      }
    } catch {
      setError(text.errors.network);
    } finally {
      setBusy(false);
    }
  }

  const input =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20";
  const primary =
    "w-full rounded-xl bg-[#C9A227] px-6 py-3 font-bold text-[#14213D] transition hover:bg-[#E5C766] disabled:opacity-60";
  const link =
    "text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-[#C9A227]";

  return (
    <section
      id="book-a-call"
      aria-labelledby="book-a-call-title"
      className="mt-16 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200"
    >
      <div className="bg-[#14213D] px-8 py-8 text-center text-white">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5C766] to-[#B8901F]">
          {step === "code" ? (
            <MailCheck className="h-6 w-6 text-[#14213D]" />
          ) : (
            <Video className="h-6 w-6 text-[#14213D]" />
          )}
        </span>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E5C766]">
          <CalendarClock className="h-4 w-4" /> {text.label}
        </p>
        <h3 id="book-a-call-title" className="mt-2 text-2xl font-bold md:text-3xl">
          {step === "open" ? text.openTitle : step === "code" ? text.codeTitle : text.title}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
          {step === "open" ? text.openText : step === "code" ? (
            <>
              {text.codeText} <strong className="text-white">{email.trim()}</strong>
            </>
          ) : (
            text.intro
          )}
        </p>
      </div>

      {step === "email" && (
        <form onSubmit={sendCode} className="mx-auto max-w-md space-y-4 px-6 py-8">
          <label className="block font-semibold text-slate-800" htmlFor="book-email">
            {text.emailLabel}
          </label>
          <input
            id="book-email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={text.emailPlaceholder}
            className={input}
          />
          {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}
          <button type="submit" disabled={busy} className={primary}>
            {busy ? text.sending : text.sendCode}
          </button>
        </form>
      )}

      {step === "code" && (
        <form onSubmit={verify} className="mx-auto max-w-md space-y-4 px-6 py-8">
          <label className="block font-semibold text-slate-800" htmlFor="book-code">
            {text.codeLabel}
          </label>
          <input
            id="book-code"
            required
            autoComplete="one-time-code"
            inputMode="numeric"
            pattern="\d{6}"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            className={`${input} text-center text-2xl tracking-[0.5em]`}
          />
          {error && <p role="alert" className="text-sm font-medium text-red-700">{error}</p>}
          <button type="submit" disabled={busy} className={primary}>
            {busy ? text.verifying : text.verify}
          </button>
          <div className="flex items-center justify-between">
            <button type="button" className={link} onClick={() => { setError(""); setStep("email"); }}>
              {text.changeEmail}
            </button>
            <button type="button" className={link} disabled={busy} onClick={() => void sendCode()}>
              {text.resend}
            </button>
          </div>
        </form>
      )}

      {step === "open" && (
        <iframe
          src={calendarUrl}
          title={text.frame}
          className="block h-[720px] w-full border-0 sm:h-[640px]"
        />
      )}
    </section>
  );
}

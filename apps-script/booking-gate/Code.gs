/**
 * Booking gate on Google Apps Script (runs in your Google account, free).
 *
 * The contact page sends { action: "send", email } to get a 6-digit code by
 * email, then { action: "verify", email, code }. Only a correct code returns
 * { ok: true, url } with the booking calendar address, which is stored in
 * Script properties (never in the website files).
 *
 * Script properties (Project Settings > Script properties):
 *   BOOKING_URL  required  the calendar address (Google Calendar > Share > Website embed > the src="..." address)
 *   CODE_SECRET  required  any long random text
 *   OWNER_EMAIL  optional  gets a note each time someone opens the calendar
 *   FROM_ALIAS   optional  e.g. offers@fahoproso.com, only if it is set up in Gmail > Settings > Accounts > "Send mail as"
 *   REPLY_TO     optional  where replies go
 */

var CODE_TTL = 600; // seconds
var MAX_ATTEMPTS = 5;
var MAX_SENDS_PER_EMAIL_PER_HOUR = 3;
var MAX_SENDS_PER_HOUR_ALL = 60; // protects the daily Gmail sending quota
var EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function sha256_(text) {
  var bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, text, Utilities.Charset.UTF_8);
  return bytes.map(function (b) { return ('0' + (b & 0xff).toString(16)).slice(-2); }).join('');
}

function newCode_() {
  var hex = Utilities.getUuid().replace(/-/g, '').slice(0, 8);
  return ('000000' + (parseInt(hex, 16) % 1000000)).slice(-6);
}

// Counts an action in the cache; false once the limit is reached.
function bump_(cache, key, limit, ttl) {
  var n = parseInt(cache.get(key) || '0', 10);
  if (n >= limit) return false;
  cache.put(key, String(n + 1), ttl);
  return true;
}

function sendMail_(props, to, subject, body) {
  var options = { name: 'FAHOPROSO' };
  var replyTo = props.getProperty('REPLY_TO');
  if (replyTo) options.replyTo = replyTo;
  var alias = props.getProperty('FROM_ALIAS');
  try {
    if (alias) options.from = alias;
    GmailApp.sendEmail(to, subject, body, options);
    return true;
  } catch (err) {
    if (alias) { // alias not set up in Gmail: send from the account itself
      try {
        delete options.from;
        GmailApp.sendEmail(to, subject, body, options);
        return true;
      } catch (err2) { return false; }
    }
    return false;
  }
}

function doPost(e) {
  var props = PropertiesService.getScriptProperties();
  var cache = CacheService.getScriptCache();
  var lock = LockService.getScriptLock();
  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply_({ ok: false, error: 'bad_request' });
  }

  var email = String(body.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return reply_({ ok: false, error: 'bad_email' });
  var secret = props.getProperty('CODE_SECRET');
  if (!secret) return reply_({ ok: false, error: 'send_failed' });
  var emailKey = sha256_(email);

  lock.waitLock(10000);
  try {
    if (body.action === 'send') {
      if (!bump_(cache, 'rl_e_' + emailKey, MAX_SENDS_PER_EMAIL_PER_HOUR, 3600) ||
          !bump_(cache, 'rl_all', MAX_SENDS_PER_HOUR_ALL, 3600)) {
        return reply_({ ok: false, error: 'too_many' });
      }
      var code = newCode_();
      cache.put('code_' + emailKey, JSON.stringify({ hash: sha256_(emailKey + ':' + code + ':' + secret), attempts: 0 }), CODE_TTL);
      var sent = sendMail_(props, email, 'Your FAHOPROSO verification code',
        'Your verification code is ' + code + '\n\nIt works for 10 minutes. Enter it on the FAHOPROSO contact page to see our available times for a video call.\n\nIf you did not ask for this, you can ignore this email.');
      return reply_(sent ? { ok: true } : { ok: false, error: 'send_failed' });
    }

    if (body.action === 'verify') {
      var typed = String(body.code || '').trim();
      if (!/^\d{6}$/.test(typed)) return reply_({ ok: false, error: 'bad_code' });
      var stored = JSON.parse(cache.get('code_' + emailKey) || 'null');
      if (!stored) return reply_({ ok: false, error: 'expired' });
      if (stored.attempts >= MAX_ATTEMPTS) {
        cache.remove('code_' + emailKey);
        return reply_({ ok: false, error: 'too_many_attempts' });
      }
      if (sha256_(emailKey + ':' + typed + ':' + secret) !== stored.hash) {
        stored.attempts += 1;
        cache.put('code_' + emailKey, JSON.stringify(stored), CODE_TTL);
        return reply_({ ok: false, error: 'wrong_code' });
      }
      cache.remove('code_' + emailKey); // a code works once
      var owner = props.getProperty('OWNER_EMAIL');
      if (owner) sendMail_(props, owner, 'Booking calendar opened', 'A visitor verified this email and opened the booking calendar: ' + email);
      return reply_({ ok: true, url: props.getProperty('BOOKING_URL') });
    }

    return reply_({ ok: false, error: 'not_found' });
  } finally {
    lock.releaseLock();
  }
}

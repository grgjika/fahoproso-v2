# Booking gate (email code before the calendar opens)

Small Cloudflare Worker. The contact page asks for an email, this service
emails a 6-digit code, and only a correct code returns the booking calendar
address. The calendar address is kept in the Worker, not in the website files.

## One-time setup (free Cloudflare plan)

1. **Email sender.** Create an account at resend.com, add the domain
   `fahoproso.com`, and add the DNS records it shows (at your domain registrar).
   Create an API key (keep it private).
2. **Calendar link.** In Google Calendar: the appointment schedule > Share >
   Website embed > copy the address inside `src="..."`.
3. **Deploy** (in this folder, after `npm install -g wrangler` or with `npx`):
   ```
   npx wrangler login
   npx wrangler kv namespace create GATE      # paste the printed id into wrangler.toml
   npx wrangler secret put RESEND_API_KEY     # paste the Resend key when asked
   npx wrangler secret put CODE_SECRET        # any long random text
   npx wrangler secret put BOOKING_URL        # the calendar address from step 2
   npx wrangler deploy
   ```
   Optional: set `OWNER_EMAIL` in `wrangler.toml` to get an email each time
   someone opens the calendar.
4. **Website.** Put the Worker address that `deploy` prints (for example
   `https://fahoproso-booking-gate.<name>.workers.dev`) into
   `BOOKING_GATE_URL` in `components/BookCall.tsx`, then merge.

Secrets are typed into the terminal prompt only. Never put them in a file in
this repository or in a chat.

## Limits
- A code proves the visitor can read that inbox, not that they are a real
  professional. A person who has opened the calendar could share its address.
- Per email: 3 codes per hour. Per IP: 10 codes per hour. A code works once,
  for 10 minutes, with 5 tries.

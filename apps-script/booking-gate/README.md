# Booking gate on Google Apps Script (free, no Cloudflare)

The contact page asks for an email, this script emails a random 6-digit code,
and only a correct code returns the booking calendar address. The calendar
address is stored in the script, not in the website files.

## Setup (about 15 minutes, signed in to the Google account that owns the calendar)

1. **Calendar address.** Google Calendar > your appointment schedule > Share >
   Website embed > copy the address inside `src="..."`.
2. Go to script.google.com > **New project**. Name it "FAHOPROSO booking gate".
3. Delete the sample code, paste in all of `Code.gs` from this folder, click Save.
4. **Project Settings** (gear) > **Script properties** > add:
   - `BOOKING_URL` = the calendar address from step 1
   - `CODE_SECRET` = any long random text (letters and numbers, 30+ characters)
   - optional `OWNER_EMAIL` = where you want a note when someone opens the calendar
   - optional `FROM_ALIAS` = `offers@fahoproso.com` (only works if that address is added
     in Gmail > Settings > Accounts > "Send mail as"; otherwise emails come from your Gmail)
   - optional `REPLY_TO` = `offers@fahoproso.com`
5. **Deploy** > **New deployment** > type **Web app**. Execute as: **Me**.
   Who has access: **Anyone**. Click Deploy and approve the permission screen
   (it asks to send email as you and to run while you are away; that is this script).
6. Copy the **Web app URL** (ends in `/exec`) and send it to Claude. It is a
   public address, not a secret.
7. Test: after it is live, request a code with your own email.

After changing the script later: Deploy > Manage deployments > edit > New version.

## Limits
- A Google account can send a limited number of emails per day (about 100 for
  a free Gmail account, more with Google Workspace). The script allows 60 codes
  per hour in total and 3 per hour per email address.
- Apps Script cannot see the visitor's IP address, so there is no per-IP limit.
- A code proves the visitor can read that inbox, not that they are a real
  professional. A person who opened the calendar could share its address.

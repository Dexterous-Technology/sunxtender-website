## Contact form on the Contact page

### What you'll see
- Centered text above the form: "Contact the Sun Xtender Battery Corporation", then the intro lines, business hours and "Phone: (626) 813-1234 Fax: (626) 813-1235" exactly as written. The phone and fax are tappable on phones.
- "Content coming soon." is removed from the top of the page.
- Fields in your order: Last Name, First Name, Company, Address, City, State (starts on "select one", all 50 US states plus DC), Zipcode, Country (starts on "United States"), Phone, Fax, E-Mail, and a large "Your Message Here" box.
- Layout: on desktop, labels sit on the left, right-aligned next to their boxes. On phones, labels stack above the boxes.
- A built-in "I'm not a robot" checkbox, plus hidden spam traps (a hidden field bots fill in, and a minimum time before sending is allowed). No Google account is needed.
- Submit and Reset buttons side by side. Reset clears everything.
- Checks before sending: last name, first name, a valid e-mail and a message are required. Errors show next to the fields.
- Uses the same fonts, colors and spacing as the Web Accessibility Statement form.

### Sending the email (important)
- Messages will go to **test@sunxtender.com**.
- Emails can only be sent from a domain you own, and you don't have one set up yet. So:
  - The form will be fully built and working on the page now.
  - Until a domain is connected, pressing Submit shows a clear notice: "Thanks — online messages aren't being delivered yet. Please call (626) 813-1234." Nothing is lost silently.
  - Once you have a domain (you can buy one in Project Settings → Domains, or use one you own, e.g. sunxtender.com), I'll connect Lovable's built-in email in one step, and submissions will start arriving at test@sunxtender.com. No other email service or account is needed.

### Technical details
- Rewrite `src/routes/contact.tsx`: `PageShell` title "Contact SunXtender" (menu label unchanged), no subtitle. Centered header block and form, reusing the `Field`/`SelectField` patterns and `US_STATES` from `web-accessibility-statement.tsx`, moved into a shared `src/components/contact-form-fields.tsx` so both pages use them.
- Country list: a static list with United States first.
- Validation: zod on the client, with length limits on every field.
- Anti-bot: a required checkbox, a hidden honeypot input, and a 3-second minimum before submit.
- Submit goes to a `createServerFn` stub (`src/lib/contact.functions.ts`) that re-validates with the same schema and returns `{ delivered: false }` for now. Later, email setup will be scaffolded behind this same function (the recipient stays in a server-side constant).

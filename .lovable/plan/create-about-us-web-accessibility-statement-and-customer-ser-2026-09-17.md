# Create "About us", "Web Accessibility Statement", and "Customer Service Policy" pages

## What we're building

Three new placeholder pages, each with the standard site shell (AffiliationBar, header, subheader with the page title, footer) and "Content coming soon." as the body — no external link on the page:

1. **About us** — at `/about`, becomes the first item under the About dropdown (replacing the current external link to sunxtender.com/about.php).
2. **Web Accessibility Statement** — at `/web-accessibility-statement`, linked from the footer.
3. **Customer Service Policy** — at `/customer-service-policy`, linked from the footer.

## How

- **Route files** (each uses `PageShell` + head() meta with route-specific title/description/og tags, same pattern as the other placeholder pages):
  - `src/routes/about.index.tsx` → `createFileRoute("/about")` — eyebrow "About", title "About us".
  - `src/routes/web-accessibility-statement.tsx` → title "Web Accessibility Statement".
  - `src/routes/customer-service-policy.tsx` → title "Customer Service Policy".
  - Body of each: a short muted line "Content coming soon." in a `max-w-3xl` column.
- **Menu change** in `src/components/site-chrome.tsx`:
  - `ABOUT_MENU` first item changes from `{ label: "About us", href: "https://www.sunxtender.com/about.php" }` to `{ label: "About us", to: "/about" }`.
- **Footer change** in `src/components/site-chrome.tsx`:
  - "Web Accessibility Statement" and "Customer Service Policy" change from external `<a href="sunxtender.com/...">` to `<Link to="/web-accessibility-statement">` and `<Link to="/customer-service-policy">`.

No other pages, menus, or styles are touched.

## Verification

- Type-check (`bunx tsgo --noEmit`).
- Playwright: open each of the three URLs — page renders with the standard header, subheader with the correct title, and footer; About dropdown's first item opens `/about`; both footer links navigate to the new pages.

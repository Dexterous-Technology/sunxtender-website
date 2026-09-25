# Rename Warranty Claim Form title: "(Editable PDF)" → "(PDF)"

## Goal
Replace every "Editable PDF" occurrence for the warranty claim form page with "PDF", in both the header menu and the page itself.

## Changes

1. `src/components/site-chrome.tsx` (line 94)
   - Menu label: "Sun Xtender Warranty Claim Form (Editable PDF)" → "Sun Xtender Warranty Claim Form (PDF)"

2. `src/routes/technical.warranty-claim-form.tsx`
   - head title + og:title: "Sun Xtender Warranty Claim Form (PDF) | SunXtender"
   - PageShell title: "Sun Xtender Warranty Claim Form (PDF)"
   - Leave the description/og:description/subtitle wording as-is (only the word "Editable" in the title strings is being removed per request; keep "Editable warranty claim form…" subtitles untouched since they describe the file, not the title).

No other pages, menus, or layout are affected. Verify with a typecheck and a quick preview check of the menu label and page title.

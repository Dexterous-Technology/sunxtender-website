# Datasheet and Outline Drawing PDFs on product pages

## Blocker: the PDF files are missing

The instructions arrived, but the zip with the 52 PDFs did not come through with this message. The uploads folder only holds the earlier image zips (product photos, drawings, terminal diagrams) — no `{PART}_datasheet.pdf` / `{PART}_outline_drawing.pdf` files and no `manifest_pdfs.csv`.

Please re-upload the PDF zip. Everything below is ready to run the moment it lands.

## What will be built

Each of the 26 product pages gets two new buttons beside the existing "Terminal Options" button:

`[ Terminal Options ] [ Datasheet ] [ Outline Drawing ]`

- Same look as the existing button — same size, padding, border, hover and focus. No new colour or variant, and the Terminal Options button itself is untouched.
- The row wraps on narrow screens instead of scrolling sideways.
- A button only appears if that product actually has that document. Nothing is substituted or invented.

Clicking Datasheet or Outline Drawing opens a pop-up that shows the document right on the page:

- Title reads "PVX-690T — Datasheet" (or "— Outline Drawing").
- The document fills roughly 90% of the screen height and scrolls inside the pop-up.
- Header has an "Open in new tab" link, a "Download" button, and an X to close.
- Closes with X, the Escape key, or clicking outside. Page scrolling is locked while open and restored after.
- Keyboard and screen-reader accessible: focus moves into the pop-up, stays inside while open, and returns to the button afterwards.
- If a phone or browser cannot show the document inline, the pop-up shows the title plus clear "Open PDF" and "Download PDF" buttons instead of a blank box.

## Technical notes

- Upload all 52 PDFs via `lovable-assets` into `src/assets/datasheets/` and `src/assets/outlines/` as `.asset.json` pointers.
- Generate `src/data/product-pdfs.ts` with `DATASHEET_PDFS` / `OUTLINE_PDFS` maps keyed by uppercased part number; matching is exact and case-insensitive on the text before the first underscore. No fuzzy matching, no index-based lookup.
- Add `datasheetUrl(p)` / `outlineDrawingUrl(p)` helpers to `src/components/product-bits.tsx`.
- New `src/components/pdf-modal.tsx` built on the existing shadcn `Dialog` (`src/components/ui/dialog.tsx`) so styling and animation match the site; reuses the `<object>` embed pattern from `src/components/pdf-preview.tsx` with the fallback state.
- Wire the two buttons and modal state into the existing button row in `src/routes/products.$sku.tsx` (currently lines ~349–366), cloning the Terminal Options link's classes.
- `manifest_pdfs.csv` used only to verify matching, never imported as content.

## Reporting

After implementation: a table of all 26 part numbers with Datasheet Y/N and Outline Drawing Y/N, plus explicit lists of products missing a file, PDFs in the zip that matched no product, and the total attached (expected 52).

# Add outline drawings and terminal diagrams to product pages

Each of the 26 battery pages gets two more pictures from the uploaded archive: the outline drawing with dimensions, and the terminal options diagram. They join the pictures already on the page, in this order:

1. Main product photo (unchanged)
2. Performance graph (unchanged)
3. Battery Outline Drawing (new)
4. Terminal Options (new)

## What changes on a product page

Today the page shows the product photo with the performance graph beneath it. To fit four pictures cleanly, that area becomes one large picture with a small row of four clickable previews under it. Clicking any preview shows it large; clicking the large picture opens the full-screen enlarged view exactly as it does today. A short caption names the picture currently shown ("Battery Outline Drawing", "Terminal Options").

If a battery is missing one of the two new pictures, its page simply shows fewer previews — never a broken image or empty box.

## Matching rule

The part number is everything before the first underscore in the file name, matched exactly (case-insensitive) against the product part number. No partial or fuzzy matching.

## Technical notes

- Extract the zip to /tmp, upload all 52 JPGs via `lovable-assets`, and store pointers under `src/assets/drawings/` and `src/assets/terminals/`.
- Add a generated `src/data/product-diagrams.ts` exporting `DRAWING_IMAGES` and `TERMINAL_IMAGES` keyed by part number (uppercased), plus lookup helpers in `src/components/product-bits.tsx` alongside `productImageUrl`. No array indexes; `manifest.csv` is used only to verify matching, not imported as content.
- Rework the media column in `src/routes/products.$sku.tsx` into a single gallery: `images` array built per product (photo, graph, drawing, terminal — filtered for missing entries), local `activeIndex` state, thumbnail buttons with aria-labels and selected state, and the existing `ImageLightbox` reused for enlargement. No second gallery, no new section.
- Alt text: `"{PART} battery outline drawing with dimensions"` and `"{PART} terminal options diagram"`.

## Verification

Report a tally table (Part Number | Drawing Y/N | Terminal Y/N), list any product missing an image, any zip file that matched no product, and the total attached count (expected 52). No substitutions for unmatched files — they get flagged.
# Replace each product’s main photo with three high-resolution views

## Confirmed matching results

- The uploaded archive contains **29 product folders and 87 JPGs**.
- Every folder contains exactly `Left.jpg`, `Middle.jpg`, and `Right.jpg`.
- **All 26 website catalog models have one exact folder match** (case-insensitive SKU comparison).
- No catalog product is missing from the archive.
- Three folders have no matching catalog page and will be flagged only, not guessed or attached:
  - `PVX-1040HT`
  - `PVX-5040T`
  - `PVX-6240T`

## Gallery update

For each of the 26 matched product pages, replace the current first gallery image with the product’s three uploaded views. The final order will be:

1. Left View
2. Middle View
3. Right View
4. Performance Graphs — unchanged
5. Battery Outline Drawing — unchanged
6. Terminal Options — unchanged

The existing enlarged-image behavior, captions, accessible labels, and clickable previews will remain. The old main image will no longer appear in the product-page gallery; catalog and homepage product imagery will remain unchanged.

## Asset handling

- Extract only the 78 images belonging to the 26 matched catalog products.
- Upload them through the project’s asset storage and keep lightweight pointers under a dedicated product-view asset folder.
- Generate a SKU-keyed image map for Left, Middle, and Right views, using exact uppercase product model keys.
- Do not upload or attach the nine images belonging to the three unmatched products.

## Verification

- Confirm every matched product resolves all three new views and produces exactly six gallery images in the required order.
- Check desktop and mobile product pages, including thumbnail selection and enlarged viewing.
- Verify the three existing graph/drawing/terminal images remain unchanged.
- Report the final matched count and repeat any unmatched archive folders or missing catalog folders; no substitutions or fuzzy matches.

# Standardize all catalog cards on the three-photo scrubber

Apply the existing bounded Left/Middle/Right interaction to every product card on the All Products grid, without changing product detail pages or list view.

## Catalog grid

- Replace the PVX-420T 18-frame auto-loop with the same three-photo scrubber used by PVX-340T.
- Render that scrubber for all 26 catalog products using each model’s existing Left, Middle, and Right uploaded photos.
- Keep every scrubber strictly bounded to those three views, with no view beyond the supplied left or right image.
- Preserve drag, swipe, horizontal pointer movement, and keyboard left/right controls.
- Keep normal clicks opening the relevant product page while preventing navigation after an actual drag.

## Visual treatment

- Remove the “Drag to rotate” text, icon, badge, and related icon import completely.
- Preserve each card’s current image dimensions, product text, specifications, badges, footnotes, and styling.
- Do not add any replacement label or visible indicator.

## Scope and cleanup

- Simplify the viewer to one reusable three-photo mode that accepts every catalog SKU.
- Disconnect the generated PVX-420T turntable sequence from the catalog. Leave its stored generated assets intact but unused, avoiding permanent deletion that could affect earlier versions.
- Do not change product-page galleries, list view, filters, toggles, or any page outside All Products.

## Verification

- Confirm all 26 grid cards expose exactly three bounded views and no card auto-plays.
- Confirm PVX-420T now behaves identically to PVX-340T.
- Confirm the removed text and icon appear nowhere on the catalog.
- Test mouse, touch-style drag, keyboard controls, card navigation, grid/list switching, filters, desktop/mobile layouts, and browser errors.

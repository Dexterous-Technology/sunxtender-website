# Fix grey empty slot on Resources page card grid

## Problem
On `/resources`, the 11 resource cards render in a 3-column grid whose hairline
borders are drawn by painting the container `bg-border` with `gap-px`. With 11
items, the last row has one empty slot, exposing the container's grey border
color. The user wants the section pure white, blending into the page background.

## Fix
In `src/routes/resources.index.tsx`:

- Compute the number of empty cells in the last row:
  `const fillers = (3 - (TECHNICAL_MENU.length % 3)) % 3;`
- After the mapped cards, render `fillers` spacer cells:
  `<div key={f} aria-hidden className="bg-background" />`
- Each spacer fills the empty slot with the page background so the grey never
  shows, while the existing hairline gaps between real cards stay unchanged.
- Responsive note: the grid collapses to 1 column on mobile and 2 on `sm`;
  spacer cells there are harmless (they render as invisible full-width/background
  cells below the last card). To be exact on `sm` (2-col), the same `% 3`
  remainder can leave up to 2 spacers — acceptable since they are pure
  background cells with no visible border, but verify on mobile widths after
  the change.

## Verification
- Playwright screenshot of `/resources` desktop (1280px): last grid row shows
  two cards + white empty slot, no grey.
- Check `sm` (2-col) and mobile (1-col) widths for stray cells.
- Dark mode: slot must use dark background token (it does — `bg-background`).

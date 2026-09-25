# Fix: "Fig. 04.1" caption hidden behind battery illustration

## Problem
In the homepage Engineering & Manufacturing section, the desktop battery figure image is scaled up 1.25× (`scale-[1.25]`). The scaled image visually overflows its container box downward by roughly 36px, but the caption ("Fig. 04.1 · AGM battery construction") sits only 12px (`mt-3`) below that box — so the image bottom covers the caption text.

## Fix
Single targeted change in `src/routes/index.tsx`, desktop figure only (the `lg:hidden` mobile figure is not scaled and is fine):

- Change the desktop `figcaption` margin from `mt-3` to `mt-14` (56px). This clears the 36px scaled-image overflow with a visible gap below it, placing the caption fully outside the image.

## Not touched
- Image scale, connector lines, callout grid, column widths, vertical section spacing
- Mobile figure and its caption
- Everything else on the page

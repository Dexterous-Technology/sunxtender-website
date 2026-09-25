# Global Reach section — move heading into the card

## Goal

In the homepage "06 · Global Reach" section, restructure the card so the heading lives inside the bordered card, above the stats, without changing anything else on the page.

## Current state (verified)

`src/routes/index.tsx`, `GlobalReach()` (~lines 791–827):

- `SectionHead` renders the "06 · Global Reach" eyebrow (small mono, amber) and the two-line heading "Specified on six continents. / Delivered by local hands." (amber second line) — both **outside and above** the card.
- The card below (`border-primary/40 bg-primary/[0.04] p-8`) holds the three stats (140+ / 52 / 6) and the "Find a Distributor" button.

## Changes (GlobalReach only)

1. Remove the `SectionHead` from above the card.
2. Inside the card, at the top, add left-aligned:
  - The "06 · Global Reach" eyebrow at **11px** (same small mono amber style as other sections).
  - Directly below it, the heading "Specified on six continents. / Delivered by local hands." at **24px** (`text-2xl`, Sora display font), keeping the amber highlight on the second line.
3. Keep the existing stats row and "Find a Distributor" button exactly as they are (same spacing classes, desktop row / mobile stack).

## Not touched

- Copy, numbers, eyebrow wording, button, card border/background, padding, responsiveness.
- No other section, route, or component changes.
# Global Reach: match the "Find Your Battery" card style

Target: `src/routes/index.tsx` → `GlobalReach()` (section id="distributors", lines ~808-823).

## Current state
- Tool card ("Find Your Battery", line ~553): `border border-primary/40 bg-primary/[0.04] p-8`, flex row, solid orange button (`bg-primary text-primary-foreground`).
- Global Reach card (line ~808): `border border-border bg-background p-4 md:p-8`, outlined button (`border border-border-strong ... hover:border-primary`).

## Changes (visual only — copy, numbers, eyebrow, SectionHead untouched)

1. **Card container** — change the wrapper div classes from
   `border border-border bg-background p-4 md:p-8`
   to match the tool card:
   `border border-primary/40 bg-primary/[0.04] p-8`
   (single padding value `p-8` on all breakpoints, like the tool card; keep the existing `relative mt-16` and reveal classes). This is the card's own background token — a faint amber-tinted off-white, closest to #FBF7F0.

2. **Button** — keep the existing outlined style (not solid orange), with the MapPin icon already in place. Make it right-aligned on desktop and full-width on mobile:
   - add `w-full justify-center md:w-auto` to its className.
   - The parent flex already stacks on mobile (`flex-col` → `md:flex-row md:items-end`), so the button drops below the stats naturally.

3. **Stats spacing** — the three `MapStat` blocks keep `grid grid-cols-3 gap-8`; no copy or number changes.

## Verification
- Playwright screenshot of the section in light and dark mode: card border/tint match the tool card, eyebrow + heading sit outside the card, button has icon and is right-aligned on desktop, stacks full-width below stats at mobile width.
- Confirm no console errors.

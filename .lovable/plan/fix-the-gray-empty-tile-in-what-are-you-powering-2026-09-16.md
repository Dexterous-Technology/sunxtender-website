# Fix the gray empty tile in "What are you powering?"

## What's happening

The five cards sit in a three-column grid that fakes its dividing lines: the grid itself is painted gray and each card is painted white on top, with a 1px gap so the gray shows through as hairlines. With five cards in a six-slot grid, the last slot has no card on it, so the whole empty slot shows as a gray block.

## The fix

Stop painting the grid gray. Instead give each card its own hairline borders (right and bottom, trimmed at the edges of each row) so the dividing lines look identical, and the empty sixth slot simply stays the page background.

## Technical detail

In `src/routes/index.tsx`, the Applications grid:
- Remove `gap-px bg-border` from the grid container.
- On each card, replace the implicit divider with responsive border classes (`border-b border-border`, plus `sm:border-r` / `lg:border-r` with `last-in-row` trimming via `sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0`), and drop the bottom border on the final row.
- Keep `bg-background` and the `hover:bg-surface` behavior unchanged.

No change to copy, links, icons, or the section's other content.

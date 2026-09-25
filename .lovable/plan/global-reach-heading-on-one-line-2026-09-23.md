# Global Reach heading on one line

## Change

In `src/routes/index.tsx`, in the `GlobalReach` section (section 06 · Global Reach):

- Remove the line break (`<br />`) between the two sentences of the heading so "Specified on six continents. Delivered by local hands." renders on a single line.
- Keep the 24px font size (`text-2xl`), left alignment, and the orange highlight on "Delivered by local hands."

## Notes

- One-line heading at 24px fits comfortably within the card at desktop widths; on very narrow screens the text will wrap naturally, which is acceptable.
- No other part of the section (stats, button, padding, card styling) is touched.

# Battery Sizing page content

Replace the "Content coming soon." placeholder on `/technical/battery-sizing` with the full Sun Xtender Battery Sizing guide. Header, subheader and footer stay exactly as they are.

## Page content

1. **Intro paragraph** — guidelines for sizing a stand-alone renewable energy battery system.
2. **Load Calculations**
  - DC Loads: formulas on their own lines, plus two worked examples (fixed load and variable duty cycle).
  - AC Loads: inverter conversion explanation, one worked example, and the closing note about non-continuous loads.
3. **Days of Autonomy** — three explanatory paragraphs plus the "Recommended Days of Storage" table (kWh/m2/day vs Days of Autonomy, 5 rows).
4. **Temperature Considerations** — three paragraphs on battery vs ambient temperature and burying the battery.
5. **Battery Sizing** — capacity formula, Design Factor explanation, the "Lowest Battery Temperature Averaged over 24 Hours" table (Degrees C / Degrees F / Design Factor, 8 rows), and the closing PVX-2580L example.

## Presentation

- Section headings in the site's display type; "Example:" and "Note:" as bold sub-labels.
- Formulas on their own lines in monospace, slightly offset so they read as formulas rather than prose.
- "Example:" and "Note:" blocks set apart with a light tinted background and an accent left border.
- Both tables as real HTML tables with hairline borders and alternating row shading, wrapped so they scroll sideways on narrow screens instead of squeezing.
- Content constrained to a comfortable reading width, consistent with other technical pages.
- All colors from the existing theme tokens, so light and dark mode both look right.

## Technical notes

- Only `src/routes/technical.battery-sizing.tsx` changes; content renders inside the existing `PageShell`.
- Page title updated to "Sun Xtender Battery Sizing" with matching head meta description.
- Small local presentational helpers (formula line, callout block, table wrapper) defined in the route file; no new shared components or dependencies.
- The uploaded screenshot is used as layout reference only; nothing is embedded as an image.
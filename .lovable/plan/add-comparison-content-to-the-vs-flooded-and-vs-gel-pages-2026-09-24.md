## Add comparison content to the "vs. Flooded" and "vs. Gel" pages

### Sun Xtender vs. Flooded
- Page banner heading becomes "Sun Xtender® Deep Cycle AGM versus Flooded Battery Technology". The menu label stays the same.
- Remove "Content coming soon."
- Body, in this order: the three paragraphs exactly as written, then a real comparison table with three columns (Characteristics / Sun Xtender® AGM Battery / Flooded Deep Cycle Battery) and six rows (Self Discharge, Water Addition, Hydrogen Gas Emissions, Electrolyte Spillage, Electrolyte Stratification, Tolerance to freezing).

### Sun Xtender vs. Gel
- Page banner heading becomes "Sun Xtender® AGM Technology versus Gel Batteries". The menu label stays the same.
- Remove "Content coming soon."
- Body, in this order: the seven paragraphs exactly as written (the last one is "The following table provides..."), then a real table with three columns (Characteristic / Sun Xtender® AGM Battery / Gel Batteries) and four rows (Electrolyte Stability, High Rate Performance, Sensitivity to Charging Voltage Levels, Charge Acceptance Rate).

### Styling (both pages)
- Paragraphs look the same as the Battery Sizing and application pages.
- Tables use the site's existing table look from Battery Sizing: a header row that stands out, shaded alternate rows, and site colors in light and dark mode.
- On phones the table scrolls sideways instead of breaking the layout.
- Every ® is kept exactly as written. No links added.
- Search and link-preview descriptions are updated to match the new content.

### Technical details
- Edit `src/routes/about.sun-xtender-vs-flooded.tsx` and `about.sun-xtender-vs-gel.tsx`: set the PageShell `title`, drop `subtitle`, and pass children using `CopyP` from `app-copy.tsx`.
- Reuse the table classes from the Battery Sizing route inside an `overflow-x-auto` wrapper, with `<th scope="col">` headers and `<th scope="row">` for the first cell of each row.
- The `<title>` tag and the menu labels stay unchanged.

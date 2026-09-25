# Catalog: Grid/List toggle + Dimensions/Electrical Properties toggle

Add two independent toggles above the product list on the catalog page. Both update instantly, client-side.

## Toggle 1 — View type (Grid / List)
- Segmented control in the existing controls row, next to search and the voltage chips.
- Grid = current card layout (image, name, voltage, description, "View Specifications" link) with only the spec line swapped per Toggle 2.
- List = dense table, no images or descriptions.
- Defaults to Grid.

## Toggle 2 — Data view (Dimensions / Electrical Properties)
Affects both views. Defaults to Dimensions.

- Grid + Dimensions: each card shows Length, Width, Height, Unit Weight, Standard Terminal (replacing the current capacity/case size/weight line).
- Grid + Electrical Properties: each card shows 24 Hour Rate and 100 Hour Rate, clearly labeled.
- List + Dimensions: Part Number | Voltage | Industry Reference | Length (in/mm) | Width (in/mm) | Height (in/mm) | Unit Weight (LB/KG) | Standard Terminal.
- List + Electrical Properties: Part Number | Voltage | Industry Reference | 1, 2, 4, 8, 24, 48, 72, 100, 120 Hour Rate, under a spanning header reading "Nominal Capacity Ampere Hours @ 25° (77° F) to 1.75 volts per cell."

## Badges and footnotes
- "NEW »" marker in the site accent color next to flagged part numbers, in both Grid and List.
- Footnote markers on affected part numbers, with the lines "1: minimum order of 84 solar batteries applies." and "2: minimum order of 96 solar batteries applies." shown only when a visible row or card uses that marker.

## Styling
- List: two-tone row banding, bold headers, numeric columns right-aligned, text left-aligned, hairline borders in the site style, horizontally scrollable on small screens.
- Grid: card structure, image, name and description untouched — only the spec line changes.
- Site accent color replaces the reference orange for active toggle state and NEW badges.

## Filters
- Search by part number and the voltage filter behave identically across all four combinations, filtering the same product set. Filter chips and the model count stay as they are.

## Technical notes
- Fields already exist in `src/data/products.ts`: `dimensions` (in/mm), `capacity` (n1–n120), `weightLbs`/`weightKg`, `caseSize` (industry reference), `terminal`, `isNew`, `minOrder`. No data-model changes needed; footnote markers derive from `minOrder`.
- Work confined to `src/routes/products.index.tsx` plus a small table component; card JSX reused with a swapped spec block.
- Toggle state lives in local React state so the existing `volts`/`q` search-param handling is untouched.

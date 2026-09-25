# Backup Power, Solar Street Lights and Smart Grid page content

Replace the placeholder text on three application pages with the supplied paragraphs, in the order given. All ® symbols stay exactly as written. Styling matches the Grid Tied and Off Grid pages, which use the same reading width, paragraph size and link color. Header, subheader and footer stay unchanged, except that "Content coming soon." is removed from each subheader.

## Energy Storage for Backup Power (6 paragraphs)
- "ISO 9001:2008 + AS9100C" (paragraph 4) links to the ISO 9001 + AS9100 page.
- The last paragraph uses the shared voltage and specifications links described below.

## Solar Street Lights (3 paragraphs)
- In paragraph 3, "ISO 9001:2008 + AS9100C" links to the ISO page.
- The voltage and specifications links sit inside that same paragraph.

## Smart Grid Energy System (4 paragraphs)
- The last paragraph uses the shared voltage and specifications links.

## Links
- The catalog already filters by voltage using its existing `?volts=` setting, which the Grid Tied and Off Grid pages use too. "2 Volt", "6 Volt" and "12 Volt" link to `/products?volts=2`, `?volts=6` and `?volts=12`, so each opens the catalog already filtered.
- "battery specifications page" links to the All Products catalog. This is the same choice approved for Grid Tied and Off Grid, because no page named "Battery Specifications" exists.

## Technical notes
- Only three files change: `applications.energy-storage-backup-power.tsx`, `applications.solar-street-lights.tsx` and `applications.smart-grid-systems.tsx`.
- These pages reuse the existing helpers in `src/components/app-copy.tsx`: `CopyP`, `IsoLink`, `SpecsParagraph` and `VoltLink`.
- Solar Street Lights builds its combined final paragraph inline with `VoltLink`, `CatalogLink` and `IsoLink`.

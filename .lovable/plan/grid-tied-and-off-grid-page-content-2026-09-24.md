# Grid Tied and Off Grid page content

Replace "Content coming soon." on both pages with the supplied paragraphs, in the given order, ® symbols kept exactly. Styling matches the Battery Sizing page: same paragraph size, spacing and reading width, links in the site's accent color. Header, subheader and footer stay unchanged.

## Grid Tied Systems (4 paragraphs)

- "battery sizing" links to the existing Battery Sizing page.

## Off Grid Systems (5 paragraphs)

- The supplied text has five paragraphs, not four. All five will be added in order.
- "ISO 9001:2008 + AS9100C" links to [https://sunxtender-precision-power.lovable.app/technical/iso-9001-as9100](https://sunxtender-precision-power.lovable.app/technical/iso-9001-as9100) page of the same URL

For these pages:

- 2 Volt products page
- 6 Volt products page
- 12 Volt products page

make them link to the catalog with that voltage already filtered, and "battery specifications page" could link to the All Products catalog.

## Technical notes

- Only `applications.grid-tied.tsx` and `applications.off-grid-systems.tsx` change. Content is passed as children of `PageShell` inside a `max-w-3xl` wrapper.
- Internal link uses `Link to="/technical/battery-sizing"`. The external link uses `target="_blank" rel="noopener noreferrer"`.
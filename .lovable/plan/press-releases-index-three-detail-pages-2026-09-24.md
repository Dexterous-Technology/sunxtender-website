# Press Releases index + three detail pages

## Index page (/about/press-releases)
- Heading "Sun Xtender® Press Releases"; remove "Content coming soon."
- Clean card list, newest first. Each card: title, publish date, 1–2 sentence excerpt (taken from the release's opening text), "Read more" link to the detail page.
  1. "Sun Xtender® Launches New Website at www.SunXtender.com" — 2015-04-29 (the "www.SunXtender.com" part of the title links to the homepage "/"; "Read more" goes to the detail page)
  2. "New Higher Capacity Group 31 Batteries Released" — 2011-07-12
  3. "Caltrans Specifies Sun Xtender" — 2004-01-14

## Detail pages (new)
- /about/press-releases/sun-xtender-launches-new-website — four paragraphs exactly as given; customer-service@concordebattery.com as a mailto link; date 2015-04-29 at the bottom.
- /about/press-releases/new-higher-capacity-group-31-batteries — paragraphs as given; four model lines as an indented list block; the site's existing PVX-1180T product photo beside the second paragraph (stacks above on phones); mailto link; date **2011-07-12** in bold at the bottom.
- /about/press-releases/caltrans-specifies-sun-xtender — Caltrans headings and quote (quote styled as a blockquote), paragraphs as given; "Access the web pages below:" links to the Caltrans URL in a new tab; plain note "Scroll to: 4.3 Deep Cycle Batteries" below; date 2004-01-14 at the bottom.
- Each detail page: "Back to Press Releases" link at the top and bottom, own page title/description for search and link previews.

## Styling
- Same shared page layout, fonts, spacing and link style as the other content pages; all ® kept exactly; no other links added.

## Technical details
- Shared data in `src/data/press-releases.ts` (slug, title, date, excerpt).
- Convert `about.press-releases.tsx` to a layout rendering `<Outlet />`; index moves to `about.press-releases.index.tsx`; detail pages as three static route files `about.press-releases.<slug>.tsx`.
- Product image via existing `productImageUrl` for PVX-1180T (uploaded photos treated as reference only).
- Verify with Playwright: index shows 3 cards in order, each Read more opens its page, back links work.

# Add "Why SunXtender Batteries?" page + rename About menu item

## What we're building

1. **New page: "Why SunXtender Batteries?"** under the Products menu, at `/products/why-sunxtender-batteries`, carrying the full dictated copy:

   - Three manufacturer paragraphs (Concorde Battery Corporation, largest supplier of sealed lead acid batteries to aircraft and helicopter manufacturers; wide range of sizes and capacities; most comprehensive selection of 12V / 6V / 2V batteries, multiple terminal options, produced in the USA under ISO 9001:2008 + AS9100C).
   - A "Sun Xtender® Advantages include:" list with the 8 advantages: Deep Cycle high density plate technology; Proprietary PolyGuard® microporous polyethylene separator; pure lead-calcium thicker plates; VRLA-AGM sealed maintenance-free design; shockproof high impact reinforced case; copper alloy corrosion free connections; shipped fully charged and ready to install; ships Hazmat Exempt.

2. **Menu changes** in `src/components/site-chrome.tsx`:

   - `PRODUCT_MENU` gains `{ label: "Why SunXtender Batteries?", to: "/products/why-sunxtender-batteries" }`.
   - `ABOUT_MENU` first item renamed from "Why Choose SunXtender" to "About us" — keeps its existing external link to sunxtender.com/about.php.

## How

- **Route file:** `src/routes/products.why-sunxtender-batteries.tsx` → `createFileRoute("/products/why-sunxtender-batteries")`. As a static segment it takes precedence over the existing `/products/$sku` dynamic route, so no conflict.
- **Layout:** standard `PageShell` (eyebrow "Products", title "Why SunXtender Batteries?", subtitle line summarizing the page), article in a `max-w-3xl` column — same conventions as the other content pages. Advantages rendered as a clean list (numbered mono labels like other site lists, hairline dividers). `®` symbols kept.
- **head() meta:** title "Why SunXtender Batteries? | SunXtender", description, og:title, og:description, twitter:card.
- No other pages, sections, or styles touched.

## Verification

- Type-check (`bunx tsgo --noEmit`).
- Playwright: open /products/why-sunxtender-batteries — page renders with all paragraphs and 8 advantages; Products dropdown shows the new item; About dropdown shows "About us" still pointing at sunxtender.com/about.php.

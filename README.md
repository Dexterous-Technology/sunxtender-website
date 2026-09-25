# SunXtender Precision

Design a homepage for SunXtender, a premium AGM deep-cycle battery 

manufacturer for solar, off-grid, telecom, and industrial backup power. 

Positioning: "Precision Engineering, Presented Like It Matters" — 

aerospace-grade manufacturing presented with the technical minimalism of 

Victron Energy, not the lifestyle tone of a consumer DTC brand.

VISUAL SYSTEM

- Dark, deep navy/graphite background as the dominant color, echoing a 

  night-desert sky

- Single bright accent color: SunXtender orange/amber, used only for CTAs 

  and data highlights, never decoratively

- Neutral grays for technical/data content so the accent stays meaningful

- Headline font: geometric or grotesk sans-serif, slightly condensed, 

  technical/instrumentation feel

- Body font: highly legible humanist sans-serif

- Spec data, part numbers, technical values: monospace or semi-monospace, 

  used only for that purpose

- 12-column grid, 8px baseline spacing, generous outer margins, max content 

  width ~1280-1440px, with full-bleed imagery breaking the grid intentionally

- Left-aligned text blocks, right-aligned or full-bleed imagery — editorial, 

  engineering-report rhythm, not centered marketing blocks

- Generous whitespace between sections. Avoid dense "everything above the 

  fold" layouts

- Thin-line technical icon style only, no filled consumer-app icons

- No stock renewable-energy imagery (no solar-panel-at-sunset clichés), no 

  cartoon or flat illustration

HOMEPAGE SECTIONS (in order, one job per section):

1. HERO — Full-bleed real installation/manufacturing photography (dark, 

   dramatic) with a confident positioning statement overlay: "The only 

   deep-cycle AGM battery engineered to the same quality standards as 

   aircraft batteries." Single primary CTA: "Find Your Battery."

2. TRUST BAR — Horizontal strip directly below hero. Four scannable 

   credibility markers: UL Registered Component, ISO 9001 + AS9100, 

   Manufactured in USA, Since 1987. Thin-line badge icons, no logos-as-

   clutter.

3. APPLICATIONS — "What are you powering?" Grid of 5-6 cards (Solar/PV, 

   Wind, Off-Grid Residential, Grid-Tied Backup, Telecom/Communication 

   Towers, Industrial/Government). Each card: icon, one-line benefit, 

   click-through — no part numbers here.

4. THE AGM ADVANTAGE — Interactive comparison teaser: SunXtender vs. 

   Chinese AGM vs. LFP, using a clean data-table/chart component. Treat 

   this as the visual centerpiece of the page, not a small table.

5. PRODUCT FAMILIES — Browse by voltage/technology: 2V / 6V / 12V cards, 

   each tagged by terminal type. Include a "Find Your Battery" tool entry 

   point (filter by voltage, Ah, terminal type, application).

6. ENGINEERING & MANUFACTURING — Split-screen or full-bleed section 

   showing real facility/plate-construction photography alongside a 

   technical cutaway diagram (line-art style) explaining PolyGuard 

   separator construction.

7. PROVEN IN THE FIELD — 2-3 named, photographed case studies 

   (documentary-style, not stock) — e.g. a communication tower, an 

   off-grid home, a government/utility deployment. Photo + short outcome 

   copy per card.

8. GLOBAL REACH — World map visualizing distributor network, with a 

   "Find a Distributor" CTA.

9. TECHNICAL RESOURCES PREVIEW — Card-based preview linking into a 

   Documentation Center (datasheets, sizing guides, technical manual). 

   Signal that documentation is one click away, not buried.

10. CLOSING CTA — Two equal-weight, consistent paths only: "Find Your 

    Battery" and "Talk to an Engineer." No competing CTAs.

TONE OF COPY

Confident, technical, never dry — written like a senior applications 

engineer explaining a decision to a peer. No lifestyle/adventure language. 

Every claim should read as traceable to a spec or certification, not a 

vague superlative.

CONSTRAINTS

- One idea per section, no section should do two jobs

- No decorative motion — only scroll-triggered reveals of diagrams and 

  data, and animated spec counters (cycle life, capacity) on scroll

- Full mobile responsiveness where spec tables and documentation remain 

  fully accessible on mobile, not stripped down

- WCAG 2.1 AA: proper heading structure, real data tables (not table 

  images), sufficient contrast against the dark navy palette

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sunxtender-precision-power.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fcce9a83-2204-42e9-b2b6-af1c44b71fa6).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

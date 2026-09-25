import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/products/why-sunxtender-batteries")({
  head: () => ({
    meta: [
      { title: "Why SunXtender Batteries? | SunXtender" },
      {
        name: "description",
        content:
          "Sun Xtender deep-cycle AGM batteries are manufactured by Concorde Battery Corporation to aerospace quality standards — PolyGuard® protection, thick lead-calcium plates, ships Hazmat Exempt.",
      },
      { property: "og:title", content: "Why SunXtender Batteries? | SunXtender" },
      {
        property: "og:description",
        content:
          "Premium deep-cycle AGM batteries produced in the USA under ISO 9001:2008 + AS9100C quality standards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhySunXtenderBatteries,
});

const ADVANTAGES: { title: string; body: string }[] = [
  {
    title: "Deep Cycle",
    body: "Unique high density plate technology provides superior reliability, power & extended cycle life.",
  },
  {
    title: "Proprietary PolyGuard® Protection",
    body: "A microporous polyethylene separator used around the positive plate & AGM to prevent shorting from shock and vibration. Sun Xtender® is the only manufacturer providing this added layer of protection.",
  },
  {
    title: "Thicker Plates",
    body: "Utilizing pure lead-calcium grids, the plates are thicker than the industry standard for longer cycle life, increased reliability and power.",
  },
  {
    title: "VRLA - AGM",
    body: "This sealed, maintenance free design means no spilling or spewing, no watering, and the option to operate upright, on its side or on its end.",
  },
  {
    title: "Shockproof Case",
    body: "High impact reinforced case restrains from bulging.",
  },
  {
    title: "Copper Alloy Connections",
    body: "Copper alloy corrosion free connections allow for maximum conductivity.",
  },
  {
    title: "Shipped Fully Charged",
    body: "Shipped fully charged and ready to install.",
  },
  {
    title: "Hazmat Exempt",
    body: "Sun Xtender® Batteries ship Hazmat Exempt.",
  },
];

function WhySunXtenderBatteries() {
  return (
    <PageShell
      eyebrow="Products"
      title="Why SunXtender Batteries?"
      subtitle="Aircraft-grade manufacturing behind every Sun Xtender® deep-cycle AGM battery."
    >
      <article className="mx-auto max-w-3xl">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Sun Xtender® batteries are manufactured by Concorde Battery
            Corporation, the largest supplier of sealed lead acid batteries to
            aircraft and helicopter manufacturers worldwide. Sun Xtender® Deep
            Cycle renewable energy and solar batteries are produced to the same
            premium quality standards as the aircraft battery line with the
            absorbent glass mat (AGM) design adopted by the military.
          </p>
          <p>
            Sun Xtender® offers a wide range of sizes and capacities to meet
            the specifications of any renewable energy project. Many battery
            sizes are unique to Sun Xtender®, offering designers, installers
            and end users the flexibility required to meet the needs of
            today's most demanding applications.
          </p>
          <p>
            Sun Xtender® offers the most comprehensive selection of 12 Volt,
            6 Volt and 2 Volt renewable energy batteries in the market today.
            Multiple terminal options are available to mate with existing
            cabling and to optimize battery bank layout. All Sun Xtender®
            batteries are produced in the USA under ISO 9001:2008 + AS9100C
            (Aerospace) Quality Management System.
          </p>
        </div>

        <h2 className="mt-16 text-xl font-medium tracking-tight text-foreground">
          Sun Xtender® Advantages include:
        </h2>

        <ol className="mt-6 border-t border-border">
          {ADVANTAGES.map((a, i) => (
            <li
              key={a.title}
              className="flex gap-5 border-b border-border py-6"
            >
              <span className="mono mt-1 shrink-0 text-xs tracking-widest text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </PageShell>
  );
}

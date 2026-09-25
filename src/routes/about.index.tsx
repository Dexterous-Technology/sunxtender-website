import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About us | SunXtender" },
      {
        name: "description",
        content:
          "Sun Xtender AGM battery technology for renewable energy — maintenance-free deep-cycle VRLA batteries built specifically for solar and off-grid applications.",
      },
      { property: "og:title", content: "About us | SunXtender" },
      {
        property: "og:description",
        content:
          "Sun Xtender AGM battery technology for renewable energy — maintenance-free deep-cycle VRLA batteries built specifically for solar and off-grid applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutUs,
});

const COMPARE_LINKS: { label: string; to: string }[] = [
  { label: "Sun Xtender® vs Flooded Batteries", to: "/about/sun-xtender-vs-flooded" },
  { label: "Sun Xtender® vs Gel Batteries", to: "/about/sun-xtender-vs-gel" },
  {
    label: "Sun Xtender® vs Other AGM Battery Technology",
    to: "/about/sun-xtender-vs-other-agm",
  },
  { label: "Sun Xtender® Media Center", to: "/about/agm-media-center" },
  { label: "Press Releases", to: "/about/press-releases" },
];

function AboutUs() {
  return (
    <PageShell
      eyebrow="About"
      title="About us"
      subtitle="AGM battery technology built specifically for renewable energy applications."
    >
      <article className="mx-auto max-w-3xl">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Sun Xtender® AGM battery technology is beneficial to renewable
            energy applications because they are built specifically for the
            application. Absorbed glass mat deep cycle battery construction
            allows for cycles of varying charge and discharge lengths to occur
            without the need for maintenance cycles. Sun Xtender's® AGM
            technology can sustain multiple deep cycles because the battery
            doesn't have a "memory" of cycle length and depletion state.
            Additionally, Sun Xtender® batteries are designed with a low
            impedance configuration which allows the batteries to tolerate high
            in-rush current levels without damage to the glass mat cells
            allowing for faster recharge time and the ability to absorb charge
            when it is available.
          </p>
          <p>
            Sun Xtender® valve regulated batteries are a green energy solution
            that provides clean energy for grid-tied and off-grid systems. They
            are fully sealed and there is no need to monitor the water level
            within a sealed lead acid battery. Sun Xtender® batteries are 100%
            recyclable. The recombinant technology prevents water loss, when
            properly charged, and therefore renewable energy systems do not
            require frequent monitoring of water levels to ensure optimal
            performance nor is there a concern about spillage of hazardous
            battery acid. The preservation of water content within Sun
            Xtender® solar batteries also allows for the best possible
            performance in the harshest environments without the risk of
            freezing or evaporating. The valve regulated design is a
            recombination technology that prevents the escape of high
            saturations of flammable gases that are released upon charge of
            flooded lead acid batteries. Sun Xtender's® sealed lead acid
            battery construction prevents high self discharge rate. Therefore,
            Sun Xtender® batteries have a longer shelf life than many competing
            renewable energy batteries.
          </p>
        </div>

        <h2 className="mt-16 text-xl font-medium tracking-tight text-foreground">
          How does Sun Xtender® stand up against the competition?
        </h2>

        <ul className="mt-6 border-t border-border">
          {COMPARE_LINKS.map((l) => (
            <li key={l.to} className="border-b border-border">
              <Link
                to={l.to}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-primary"
              >
                <span className="text-sm font-medium tracking-wide text-foreground uppercase group-hover:text-primary">
                  {l.label}
                </span>
                <span
                  aria-hidden="true"
                  className="mono shrink-0 text-xs text-primary transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </PageShell>
  );
}

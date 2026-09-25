import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import fourTerminalParallelHighLow from "@/assets/battery-banks/4_terminal_hi_low_s_p_b.jpg.asset.json";
import fourTerminalParallelLow from "@/assets/battery-banks/4_terminal_hi_low_s_p.jpg.asset.json";
import fourTerminalSeriesOptionB from "@/assets/battery-banks/4_terminal_hi_low_series_B.jpg.asset.json";
import fourTerminalSeriesOptionA from "@/assets/battery-banks/4_terminal_hi_low_series.jpg.asset.json";
import fourTerminalSeriesLow from "@/assets/battery-banks/4_terminal_series_low.jpg.asset.json";
import parallelConnection from "@/assets/battery-banks/batteries_in_parallel.jpg.asset.json";
import seriesConnection from "@/assets/battery-banks/batteries_in_series.jpg.asset.json";
import seriesParallelConnection from "@/assets/battery-banks/batteries_series_parallel.jpg.asset.json";

const TWO_TERMINAL_DIAGRAMS = [
  { title: "Series Connection", image: seriesConnection.url },
  { title: "Parallel Connection", image: parallelConnection.url },
  { title: "Series/Parallel Connection", image: seriesParallelConnection.url },
];

const FOUR_TERMINAL_DIAGRAMS = [
  {
    title: "Series Connection for 4-Terminal Batteries (Low Rate Applications Only)",
    image: fourTerminalSeriesLow.url,
  },
  {
    title: "Series Connection for 4-Terminal Batteries (Low or High Rate Applications, Option A)",
    image: fourTerminalSeriesOptionA.url,
  },
  {
    title: "Series Connection for 4-Terminal Batteries (Low or High Rate Applications, Option B)",
    image: fourTerminalSeriesOptionB.url,
  },
  {
    title: "Series/Parallel Connection for 4-Terminal Batteries (Low Rate Applications Only)",
    image: fourTerminalParallelLow.url,
  },
  {
    title: "Series/Parallel Connection for 4-Terminal Batteries (Low or High Rate Applications)",
    image: fourTerminalParallelHighLow.url,
  },
];

function Diagram({ title, image }: { title: string; image: string }) {
  return (
    <figure className="mx-auto w-full max-w-3xl text-center">
      <div className="border border-border bg-white p-4 sm:p-7">
        <img
          src={image}
          alt={`${title} wiring diagram`}
          className="mx-auto h-auto max-h-[38rem] w-full object-contain"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-sm font-medium text-foreground">{title}</figcaption>
    </figure>
  );
}

export const Route = createFileRoute("/technical/battery-banks-installations")({
  head: () => ({
    meta: [
      { title: "Battery Banks & Installations | SunXtender" },
      { name: "description", content: "Wiring, layout and installation guidance for Sun Xtender battery banks." },
      { property: "og:title", content: "Battery Banks & Installations | SunXtender" },
      { property: "og:description", content: "Wiring, layout and installation guidance for Sun Xtender battery banks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BatteryBanksInstallationsPage,
});

function BatteryBanksInstallationsPage() {
  return (
    <PageShell
      eyebrow="Resources · Battery Banks & Installations"
      title="Battery Installation & Battery Bank Configuration"
      subtitle="Connection and installation guidance for Sun Xtender AGM battery banks."
    >
      <article className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            Be sure there is adequate ventilation in the area where the batteries are to be installed. Batteries may be
            installed in any orientation except upside down (i.e., terminals facing the earth). The space surrounding
            adjacent batteries should be at least 0.25 inch to permit airflow around each battery. Always use batteries
            of the same size and condition in multi-battery installations. When replacing batteries, it is best to
            replace the entire set of batteries so they remain balanced.
          </p>
          <p>
            Connect batteries using cabling that is sized for the maximum load of the system. The voltage drop on the
            cables during charging should not exceed 0.2 volts at full output. Protect the battery terminals from
            shorting during installation.
          </p>
          <p>
            Batteries may be connected in series (voltage adds, capacity stays the same), in parallel (capacity adds,
            voltage stays the same), or a combination of series and parallel (voltage and capacity adds). Each of these
            connection options are illustrated below.
          </p>
        </div>

        <section aria-labelledby="two-terminal-heading" className="space-y-12">
          <h2 id="two-terminal-heading" className="border-b border-border pb-4 font-display text-2xl text-foreground">
            2 Terminal Battery Configurations
          </h2>
          {TWO_TERMINAL_DIAGRAMS.map((diagram) => (
            <Diagram key={diagram.title} {...diagram} />
          ))}
        </section>

        <section aria-labelledby="four-terminal-heading" className="space-y-12">
          <div className="space-y-5 border-t border-border pt-12">
            <h2 id="four-terminal-heading" className="font-display text-2xl text-foreground">
              4-Terminal Battery Configurations
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Connection options for 4-terminal batteries are illustrated below. For low rate applications (current
              levels less than 400 amperes), only two of the four terminals need to be connected, but it is still best
              to use all four terminals for redundancy. For high rate applications (current levels greater than 400
              amperes), all four terminals should be connected.
            </p>
          </div>

          {FOUR_TERMINAL_DIAGRAMS.slice(0, 4).map((diagram) => (
            <Diagram key={diagram.title} {...diagram} />
          ))}

          <aside className="border-l-2 border-primary bg-primary/5 px-5 py-4 text-sm leading-6 text-foreground sm:px-6">
            <strong className="mono mr-2 text-xs tracking-wider text-primary uppercase">Note</strong>
            Cables A, B and C carry different current levels and should be sized accordingly. In this example, the
            current in Cable B is 2 times that of Cable A and the current in Cable C is three times that of Cable A.
          </aside>

          {FOUR_TERMINAL_DIAGRAMS.slice(4).map((diagram) => (
            <Diagram key={diagram.title} {...diagram} />
          ))}
        </section>
      </article>
    </PageShell>
  );
}

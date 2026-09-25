import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { CopyP, IsoLink, SpecsParagraph } from "@/components/app-copy";

export const Route = createFileRoute("/applications/off-grid-systems")({
  head: () => ({
    meta: [
      { title: "Off Grid Systems | SunXtender Applications" },
      {
        name: "description",
        content:
          "SunXtender AGM deep-cycle batteries for off-grid cabins, homes and remote power systems.",
      },
      { property: "og:title", content: "Off Grid Systems | SunXtender" },
      {
        property: "og:description",
        content: "Deep-cycle AGM storage for fully off-grid power systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Applications · Off Grid"
      title="Off grid systems"
      subtitle="Autonomous power for cabins, homes and remote sites."
    >
      <div className="max-w-3xl">
        <CopyP>
          Off grid systems rely solely on the source, such as solar panels or wind turbines, to create
          enough energy to power all loads throughout the day and night. Deep cycle batteries are an
          integral part of all off grid systems because they store energy for use around the clock.
          Unlike grid tied systems, batteries in off grid systems must be capable of storing enough
          energy to power all loads, regardless of environmental conditions such as sun exposure (for
          photovoltaic systems) or wind conditions (for wind turbine systems).
        </CopyP>
        <CopyP>
          Sun Xtender® AGM batteries are specifically designed to meet the deep cycle and float
          requirements of off grid systems. The positive grids in Sun Xtender® batteries are thicker
          than the competition's and are made from a proprietary pure lead-tin-calcium alloy with
          special grain refiners. These features improve corrosion resistance of the grid and give the
          battery excellent cycling capability and float life.
        </CopyP>
        <CopyP>
          Reliability is crucial in off grid systems because you can't depend on the grid as backup in
          the event of battery failure. All Sun Xtender® batteries are produced in the United States
          under an <IsoLink>ISO 9001:2008 + AS9100C</IsoLink> quality system and are manufactured by
          the same highly trained personnel as Concorde's aircraft and military batteries.
        </CopyP>
        <CopyP>
          Sun Xtender® batteries are sealed and maintenance free which means no spilling or acid spray,
          no watering or electrolyte checks, and the option to operate upright, on the side or on the
          end. Sun Xtender® batteries are housed in shockproof, high impact reinforced cases that
          restrain from bulging. Sun Xtender's® battery terminals and terminal hardware are constructed
          with copper alloy, corrosion free materials for low impedance connections and maximum
          conductivity.
        </CopyP>
        <SpecsParagraph />
      </div>
    </PageShell>
  ),
});

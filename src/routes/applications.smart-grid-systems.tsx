import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { CopyP, SpecsParagraph } from "@/components/app-copy";

export const Route = createFileRoute("/applications/smart-grid-systems")({
  head: () => ({
    meta: [
      { title: "Smart Grid Systems | SunXtender Applications" },
      {
        name: "description",
        content:
          "SunXtender AGM deep-cycle batteries for smart grid, microgrid and distributed control systems.",
      },
      { property: "og:title", content: "Smart Grid Systems | SunXtender" },
      {
        property: "og:description",
        content: "AGM storage for smart grid and microgrid deployments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Applications · Smart Grid"
      title="Smart grid systems"
      subtitle="Distributed storage for smart grid and microgrid control."
    >
      <div className="max-w-3xl">
        <CopyP>
          Modernizing the grid to meet peak demands is a major priority for utilities, villages and
          municipalities. Lead acid batteries are the lowest cost option to store power during times of
          low demand and release it during peak demand hours.
        </CopyP>
        <CopyP>
          Batteries help meet energy requirements during high demand events, minimizing the need to add
          capacity at traditional power plants. Sun Xtender® AGM batteries are produced with massive
          over the partition intercell connectors providing a robust, leak proof connection with low
          voltage loss making Sun Xtender® ideal for smart grid applications. In addition, Sun
          Xtender's® positive grids are thicker than the competition's and are made from a proprietary
          pure lead-tin-calcium alloy with special grain refiners. These features improve corrosion
          resistance of the grid and give the battery excellent cycling capability and float life.
        </CopyP>
        <CopyP>
          Smart grid applications must be low maintenance to maximize value for the operator. All Sun
          Xtender® AGM batteries are sealed and maintenance free which means no spilling or acid spray,
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

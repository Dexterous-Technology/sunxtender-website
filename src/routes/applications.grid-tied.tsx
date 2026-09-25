import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { CopyP, SizingLink, SpecsParagraph } from "@/components/app-copy";

export const Route = createFileRoute("/applications/grid-tied")({
  head: () => ({
    meta: [
      { title: "Grid Tied Systems | SunXtender Applications" },
      {
        name: "description",
        content:
          "SunXtender AGM deep-cycle batteries for grid-tied solar systems with battery backup.",
      },
      { property: "og:title", content: "Grid Tied Systems | SunXtender" },
      {
        property: "og:description",
        content: "AGM battery banks for grid-tied solar with backup.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Applications · Grid Tied"
      title="Grid tied systems"
      subtitle="Battery support for grid-tied solar installations."
    >
      <div className="max-w-3xl">
        <CopyP>
          Battery backup is an important component of many grid tied renewable energy systems. Sun
          Xtender® batteries provide essential reserve power in the event of a utility outage or
          natural disaster. Grid tied backup systems should be sized in order to provide the required
          days of autonomy for essential electrical loads. For more information on battery sizing,
          please refer to <SizingLink>battery sizing</SizingLink>.
        </CopyP>
        <CopyP>
          Sun Xtender® Deep Cycle AGM renewable energy batteries are specifically designed for long
          life in grid tied systems. The positive grids in Sun Xtender® batteries are thicker than the
          competition's and are made from a proprietary pure lead-tin-calcium alloy with special grain
          refiners. These features improve corrosion resistance of the grid and give the battery
          excellent cycling capability and float life.
        </CopyP>
        <CopyP>
          The most important features of a grid tied battery bank are reliability and low
          maintenance. Sun Xtender® batteries have been the premium AGM renewable energy battery on
          the market since 1987. Sun Xtender's® AGM design is the original Absorbent Glass Mat battery
          (AGM) technology adopted by U.S. and Foreign Militaries worldwide. All Sun Xtender®
          batteries are sealed and maintenance free which means no spilling or acid spray, no watering
          or electrolyte checks, and the option to operate upright, on the side or on the end. Sun
          Xtender® batteries are housed in shockproof, high impact reinforced cases that restrain from
          bulging. Sun Xtender's® battery terminals and terminal hardware are constructed with copper
          alloy, corrosion free materials for low impedance connections and maximum conductivity.
        </CopyP>
        <SpecsParagraph />
      </div>
    </PageShell>
  ),
});

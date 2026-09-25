import { createFileRoute } from "@tanstack/react-router";

import { ComparisonTable, CopyP } from "@/components/app-copy";
import { PageShell } from "@/components/page-shell";

const HEADERS = ["Characteristic", "Sun Xtender® AGM Battery", "Other AGM Batteries"];
const ROWS = [
  [
    "Positive Grids",
    "Extra thick grids (typically 0.095\" or greater) and extra thick plates (typically 0.105\" or greater), for long cycle and float life.",
    "Thinner grids, typically 0.045 to 0.060\"."
  ],
  [
    "Pasted Plates",
    "High density positive paste for long cycle life.",
    "Lower density, resulting in lower cycle life."
  ],
  [
    "AGM Separator",
    "Extra thick for maximum electrolyte reserve. Premium grade of AGM with extra fine fibers for long life.",
    "Thinner material used. Inferior grade of AGM without the extra fine fiber content."
  ],
  [
    "Microporous polyethylene separators",
    "Envelopes the positive plate to prevent shorting due to shock, vibration and dendrites.",
    "Not present, AGM is the only separator protecting the plates."
  ],
  [
    "Intercell connections",
    "Massive over the partition connectors provide a robust, leak proof connection with low voltage loss.",
    "Inferior through the partition welds have less cross sectional area, provide weaker structural connection, and are leak prone."
  ],
  [
    "Battery Terminals",
    "Copper alloy - low electrical resistance and no exposed lead.",
    "Lead alloy - higher in electrical resistance and user is exposed to lead contamination."
  ],
  [
    "Container",
    "Thick wall for rigid support of cell elements and high compression of AGM separator.",
    "Thinner walls, less support of cell elements and lower compression of AGM separator."
  ],
  [
    "Cover Seal",
    "Cover is epoxied to container - high strength bond for reliable operation at temperature extremes.",
    "Cover is heat sealed (melted) to container - prone to separation and leakage at temperature extremes."
  ]
];

export const Route = createFileRoute("/about/sun-xtender-vs-other-agm")({
  head: () => ({
    meta: [
      { title: "Sun Xtender vs. Other AGM | SunXtender" },
      { name: "description", content: "Grids, paste, separators, intercell connections, terminals, containers and cover seals: Sun Xtender® AGM compared with other AGM batteries." },
      { property: "og:title", content: "Sun Xtender vs. Other AGM | SunXtender" },
      { property: "og:description", content: "Grids, paste, separators, intercell connections, terminals, containers and cover seals: Sun Xtender® AGM compared with other AGM batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell eyebrow="About" title="Sun Xtender® Deep Cycle AGM Battery Technology versus Other AGM Batteries">
      <CopyP>{"Sun Xtender® AGM batteries have been specifically designed for true deep cycle, long service life capability in adverse temperature and handling conditions. Concorde uses extra thick positive plates, high density paste, thick AGM separator layers encased within a microporous polyethylene envelope, thick walled containers with epoxy-sealed covers."}</CopyP>
      <CopyP>{"A side by side comparison of Sun Xtender® AGM batteries with typical AGM batteries from other manufacturers is provided in the following table:"}</CopyP>
      <ComparisonTable caption="Sun Xtender® AGM vs. other AGM battery comparison" headers={HEADERS} rows={ROWS} centerHeaders />
    </PageShell>
  ),
});

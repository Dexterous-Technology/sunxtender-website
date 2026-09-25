import { createFileRoute } from "@tanstack/react-router";

import { ComparisonTable, CopyP } from "@/components/app-copy";
import { PageShell } from "@/components/page-shell";

const HEADERS = ["Characteristics", "Sun Xtender® AGM Battery", "Flooded Deep Cycle Battery"];
const ROWS = [
  [
    "Self Discharge",
    "1-3% per month - remains stable over time",
    "5-10% per month when new - increases drastically with age due to antimony contamination of the negative plate"
  ],
  [
    "Water Addition",
    "Never",
    "Frequent - increases dramatically with age due to antimony contamination of the negative plate"
  ],
  [
    "Hydrogen Gas Emissions",
    "Negligible unless severely overcharged",
    "Significant volume is generated and must be ventilated to prevent explosion"
  ],
  [
    "Electrolyte Spillage",
    "Non-spillable in all orientations - electrolyte is retained in AGM separator",
    "Spills when tilted, inverted or cracked"
  ],
  [
    "Electrolyte Stratification",
    "No stratification occurs",
    "Stratification occurs when operated at low charging voltages or in taller batteries"
  ],
  [
    "Tolerance to freezing",
    "No damage when frozen",
    "Battery is destroyed when frozen"
  ]
];

export const Route = createFileRoute("/about/sun-xtender-vs-flooded")({
  head: () => ({
    meta: [
      { title: "Sun Xtender vs. Flooded | SunXtender" },
      { name: "description", content: "Self-discharge, water loss, gassing, stratification and freezing: Sun Xtender® AGM compared with flooded deep cycle batteries." },
      { property: "og:title", content: "Sun Xtender vs. Flooded | SunXtender" },
      { property: "og:description", content: "Self-discharge, water loss, gassing, stratification and freezing: Sun Xtender® AGM compared with flooded deep cycle batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell eyebrow="About" title="Sun Xtender® Deep Cycle AGM versus Flooded Battery Technology">
      <CopyP>{"Flooded-electrolyte lead acid batteries have been around since 1859 and tend to be less expensive than AGM or Gel batteries. However, they have major deficiencies compared to AGM batteries. For instance, deep cycle flooded lead acid batteries contain antimony in the grid alloy which causes a high rate of self-discharge and rapid water loss due to gassing reactions. The escape of hydrogen and oxygen from the battery represents a serious safety hazard if the gasses are not ventilated properly. In flooded batteries, replacing the antimony lead alloy with calcium lead alloy reduces the amount of gassing and water loss, but the cycle life is much lower and they are no longer considered deep cycle batteries."}</CopyP>
      <CopyP>{"Electrolyte stratification can occur in all types of flooded batteries. As the battery is discharged and charged, the concentration of acid becomes higher at the bottom of the cell and becomes lower at the top of the cell. The low acid concentration reduces capacity at the top of the plates, and the high acid concentration accelerates corrosion at the bottom of the plates and shortens the battery life. Although stratification can be minimized by raising the charging voltage so that the increased gassing agitates the electrolyte, this will accelerate the water loss and watering frequency."}</CopyP>
      <CopyP>{"One other difference is that flooded batteries cannot tolerate freezing temperatures when in the discharged state, whereas AGM batteries are not damaged by freezing temperatures. The following table provides a side by side comparison of Sun Xtender® AGM and flooded deep cycle batteries."}</CopyP>
      <ComparisonTable caption="Sun Xtender® AGM vs. flooded deep cycle battery comparison" headers={HEADERS} rows={ROWS} />
    </PageShell>
  ),
});

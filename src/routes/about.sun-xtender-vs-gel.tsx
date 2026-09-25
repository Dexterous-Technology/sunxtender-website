import { createFileRoute } from "@tanstack/react-router";

import { ComparisonTable, CopyP } from "@/components/app-copy";
import { PageShell } from "@/components/page-shell";

const HEADERS = ["Characteristic", "Sun Xtender® AGM Battery", "Gel Batteries"];
const ROWS = [
  [
    "Electrolyte Stability",
    "Excellent - AGM acts like a flexible sponge.",
    "Prone to solid / liquid separation leading to spillage / spewage of acid and premature failure. Electrolyte loses contact with plates due to cracks and voids as the battery ages, especially at higher ambient temperatures."
  ],
  [
    "High Rate Performance",
    "Excellent due to low internal impedance.",
    "Inferior. Plate spacing must be greater to allow for gel passage during filling. Gel adds to impedance, especially at low temperatures."
  ],
  [
    "Sensitivity to Charging Voltage Levels",
    "Moderately sensitive. Life is somewhat reduced if charged outside of recommended charge voltage levels.",
    "Very Sensitive. Life is greatly reduced if charged outside of recommended charge voltage levels."
  ],
  [
    "Charge Acceptance Rate",
    "Excellent. Battery can be fully charged in 2 hours if high inrush current is available.",
    "Inferior. Must limit in rush current and charge time is at least twice as long to reach full charge."
  ]
];

export const Route = createFileRoute("/about/sun-xtender-vs-gel")({
  head: () => ({
    meta: [
      { title: "Sun Xtender vs. Gel | SunXtender" },
      { name: "description", content: "Electrolyte stability, high-rate performance, charge voltage sensitivity and charge acceptance: Sun Xtender® AGM compared with gel batteries." },
      { property: "og:title", content: "Sun Xtender vs. Gel | SunXtender" },
      { property: "og:description", content: "Electrolyte stability, high-rate performance, charge voltage sensitivity and charge acceptance: Sun Xtender® AGM compared with gel batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell eyebrow="About" title="Sun Xtender® AGM Technology versus Gel Batteries">
      <CopyP>{"Gel batteries have been commercially available since the early 1970's and are still offered by some manufacturers although they have been superseded in many industries. Concorde manufactured gel batteries for many years before developing the AGM lead acid technology and, therefore, is aware of inherent deficiencies associated with gel batteries."}</CopyP>
      <CopyP>{"The gel product employs a highly viscous, semisolid mixture of silica gel and dilute sulfuric acid in a colloidal suspension as an electrolyte. The electrolyte is difficult to keep homogeneous and the solid silica can separate from the acid, creating a \"flooded\" battery. Handling and vibration exposure are operation factors that can cause the silica and acid mixture to separate as there is no chemical bond holding them together. In high temperature environments the semisolid electrolyte develops cracks and voids that also reduce contact between the plates and the electrolyte which causes the battery to lose capacity. This same effect gradually occurs even at normal room temperatures due to the current draw across the silica material."}</CopyP>
      <CopyP>{"By contrast, AGM batteries employ a glass micro fiber mat separator that holds the liquid electrolyte like a sponge. Shrinkage of the separator does not occur as the battery ages and the electrolyte remains in direct contact with the plates at all times. The electrolyte remains immobilized even when the battery is exposed to severe vibration, so electrolyte spillage or leakage is prevented."}</CopyP>
      <CopyP>{"Since it is easier to fill a container with liquid than a semi-solid, AGM batteries require less space between battery plates. The closer plate spacing gives the AGM battery a lower internal resistance, making it more charge efficient and giving better power performance on discharge, especially at low temperatures."}</CopyP>
      <CopyP>{"Gel batteries are also more sensitive to charge voltage. If the charging voltage is not controlled within a very tight range relative to the battery's temperature, the life of the battery will be adversely affected. For example, one manufacturer of gel batteries claims that if the charging voltage is .7V higher than the recommended level, the cycle life will be reduced by 60 percent. The reason for this effect is the limited oxygen recombination capability of gelled batteries. Sun Xtender® AGM batteries are more forgiving in overcharge conditions and their ability to recombine the hydrogen and oxygen gasses back into water is more efficient. With Sun Xtender® AGM batteries, tests have shown that increasing the charging voltage 1.0V above the recommended charging voltage results in a 23% reduction in the cell life."}</CopyP>
      <CopyP>{"The charge acceptance of gel batteries is also less than that of Sun Xtender® AGM batteries. This means it takes longer to recharge gel batteries. As an example, tests have shown that when discharged to 50% of rated capacity (a fairly common practice in a PV system), gel batteries took twice as long to reach a full charge as compared to Sun Xtender® AGM batteries."}</CopyP>
      <CopyP>{"The following table provides a side by side comparison of Sun Xtender® versus gel batteries:"}</CopyP>
      <ComparisonTable caption="Sun Xtender® AGM vs. gel battery comparison" headers={HEADERS} rows={ROWS} />
    </PageShell>
  ),
});

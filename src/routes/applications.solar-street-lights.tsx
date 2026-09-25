import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { CatalogLink, CopyP, IsoLink, VoltLink } from "@/components/app-copy";

export const Route = createFileRoute("/applications/solar-street-lights")({
  head: () => ({
    meta: [
      { title: "Solar Street Lights | SunXtender Applications" },
      {
        name: "description",
        content:
          "SunXtender AGM deep-cycle batteries for solar street lighting and roadway illumination.",
      },
      { property: "og:title", content: "Solar Street Lights | SunXtender" },
      {
        property: "og:description",
        content: "AGM batteries built for solar street lighting duty cycles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Applications · Solar Street Lights"
      title="Solar street lights"
      subtitle="Nightly cycling duty for solar roadway and area lighting."
    >
      <div className="max-w-3xl">
        <CopyP>
          Governments and private companies throughout the world are installing solar powered street
          lighting to reduce emissions, increase efficiency and save money. Installations include
          residential streets, parking lots, freeways and security lighting. Sun Xtender® solar
          batteries are well tailored for this application, offering excellent cycle life compared to
          the competition, even when exposed to extreme temperatures.
        </CopyP>
        <CopyP>
          Solar street lighting must be low maintenance to be cost effective. All Sun Xtender® AGM deep
          cycle batteries are sealed and maintenance free which means no spilling or acid spray, no
          watering or electrolyte checks, and the option to operate upright, on the side or on the end.
          Sun Xtender® batteries are housed in shockproof, high impact reinforced cases that restrain
          from bulging. Sun Xtender's® battery terminals and terminal hardware are constructed with
          copper alloy, corrosion free materials for low impedance connections and maximum
          conductivity.
        </CopyP>
        <CopyP>
          Pedestrians and drivers depend on street lighting to safely navigate at night. Solar street
          lighting systems are only as reliable as their batteries which harness energy during the day
          and power the lights at night. All Sun Xtender® batteries are produced in the United States
          under an <IsoLink>ISO 9001:2008 + AS9100C</IsoLink> quality system and are manufactured by
          the same highly trained personnel as Concorde's aircraft and military batteries. A wide
          variety of sizes and capacities in <VoltLink volts={2}>2 Volt</VoltLink>,{" "}
          <VoltLink volts={6}>6 Volt</VoltLink> and <VoltLink volts={12}>12 Volt</VoltLink>{" "}
          configurations are available, including many configurations and layouts which are exclusive
          to Sun Xtender®. For more information please refer to the{" "}
          <CatalogLink>battery specifications page</CatalogLink>.
        </CopyP>
      </div>
    </PageShell>
  ),
});

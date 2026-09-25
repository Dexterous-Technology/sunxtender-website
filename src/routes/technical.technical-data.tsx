import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/technical/technical-data")({
  head: () => ({
    meta: [
      { title: "Technical Data | SunXtender" },
      {
        name: "description",
        content:
          "Why Sun Xtender AGM batteries are engineered specifically for renewable energy and solar applications — sizing options, maintenance-free construction and shipping.",
      },
      { property: "og:title", content: "Technical Data | SunXtender" },
      {
        property: "og:description",
        content:
          "Why Sun Xtender AGM batteries are engineered specifically for renewable energy and solar applications — sizing options, maintenance-free construction and shipping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TechnicalDataPage,
});

function TechnicalDataPage() {
  return (
    <PageShell
      eyebrow="Resources · Technical Data"
      title="Technical Data"
      subtitle="How Sun Xtender batteries are engineered, sized and shipped for renewable energy applications."
    >
      <article className="mx-auto max-w-3xl space-y-8 text-[15px] leading-7 text-muted-foreground">
        <p>
          Sun Xtender® batteries are engineered specifically for renewable energy
          and solar applications whereas many deep cycle AGM batteries are
          engineered once and applied to multiple applications. Sun Xtender®
          batteries are hand built in the U.S.A. with higher density plate
          technology that provides superior reliability and power in renewable
          energy's deep cycle environments. Although Sun Xtender® batteries are
          engineered to perform under the conditions dictated by solar and
          renewable energy applications each battery is built to the same quality
          aircraft standards as the renowned Concorde Aircraft battery line under{" "}
          <Link
            to="/technical/iso-9001-as9100"
            className="text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
          >
            ISO 9001:2008 + AS9100
          </Link>{" "}
          (Aerospace) Quality Management System.
        </p>

        <p>
          Sun Xtender® has developed numerous battery sizing options to aid in
          building the best reserve energy capacity for your energy needs. Battery
          sizing is one of the more difficult aspects of building a renewable
          energy system. A bank can consist of numerous small batteries which
          results in the same capacity as only a few large batteries. The variety
          of arrangements depends on the application and location; a battery bank
          comprised of multiple small batteries may be more practical in remote
          locations where access with very heavy batteries is unrealistic. For
          tips on selecting the best battery arrangement for your renewable energy
          requirements and assistance in calculating your load requirements visit
          our{" "}
          <Link
            to="/technical/battery-sizing"
            className="text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
          >
            Battery Sizing
          </Link>{" "}
          page. Here you will find a calculator where you can input your usage to
          determine the Sun Xtender® battery arrangements to best fit your needs.
        </p>

        <p>
          Sun Xtender® batteries are fully contained, maintenance free, lead acid
          batteries and therefore are hazmat exempt and can be shipped worldwide
          with any carrier. This maintenance free design is beneficial in the
          field where watering, spillage, and acid spray are not necessary
          considerations and when purchasing your batteries because you will not
          be required to pay hazardous materials fees. This maintenance free
          non-spillable nature also allows for installation in a variety of
          configurations that would be dangerous with your typical flooded
          batteries.
        </p>

        <p>
          Once you have determined the number of batteries you will require to
          effectively store enough power to supply the energy load it is time to
          configure your battery bank. Visit{" "}
          <Link
            to="/technical/battery-banks-installations"
            className="text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
          >
            Battery Banks &amp; Installation
          </Link>{" "}
          for tips and instruction on how to safely configure Sun Xtender® solar
          batteries.
        </p>
      </article>
    </PageShell>
  );
}

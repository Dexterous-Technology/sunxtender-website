import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { CopyP, IsoLink, SpecsParagraph } from "@/components/app-copy";

export const Route = createFileRoute("/applications/energy-storage-backup-power")({
  head: () => ({
    meta: [
      { title: "Energy Storage for Backup Power | SunXtender Applications" },
      {
        name: "description",
        content:
          "Sun Xtender® AGM batteries store clean renewable energy for backup power, solar trailers, remote equipment and construction signage.",
      },
      { property: "og:title", content: "Energy Storage for Backup Power | SunXtender" },
      {
        property: "og:description",
        content: "Rugged AGM energy storage in place of generators and grid power.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Applications · Backup Power"
      title="Energy storage for backup power"
      subtitle="Standby storage for critical loads and outage resilience."
    >
      <div className="max-w-3xl">
        <CopyP>
          Sun Xtender® deep cycle AGM batteries are used in a wide variety of applications to store
          clean renewable energy for use in lieu of conventional power sources such as generators and
          the traditional power grid.
        </CopyP>
        <CopyP>
          Solar utility trailers use Sun Xtender® batteries to provide dependable power at
          construction sites and temporary concert venues where noisy, dirty generators are not an
          option. Oil companies in rural areas utilize Sun Xtender® batteries to harness energy from
          solar panels and wind turbines to power integral equipment. Road construction companies
          depend on Sun Xtender® solar batteries to power lighted construction signs and keep their
          workers safe.
        </CopyP>
        <CopyP>
          The examples above highlight the versatility and rugged construction of Sun Xtender®
          batteries. Sun Xtender's® proprietary Polyguard® protection is a microporous polyethylene
          separator used around the positive plate &amp; AGM to prevent shorting from shock and
          vibration. Sun Xtender® is the only manufacturer providing this added layer of protection.
        </CopyP>
        <CopyP>
          All Sun Xtender® batteries are produced in the United States under an{" "}
          <IsoLink>ISO 9001:2008 + AS9100C</IsoLink> quality system and are manufactured by the same
          highly trained personnel as Concorde's aircraft and military batteries.
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

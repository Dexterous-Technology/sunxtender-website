import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/technical/transportation")({
  head: () => ({
    meta: [
      { title: "Transportation | SunXtender" },
      { name: "description", content: "Shipping and transport classification guidance for Sun Xtender batteries." },
      { property: "og:title", content: "Transportation | SunXtender" },
      { property: "og:description", content: "Shipping and transport classification guidance for Sun Xtender batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="Transportation"
      subtitle="Shipping classification and regulatory guidance for Sun Xtender AGM batteries."
    >
      <article className="mx-auto max-w-3xl space-y-12 text-foreground">
        <section className="border-l-2 border-primary bg-primary/5 px-6 py-7 md:px-8">
          <p className="text-lg leading-8">
            Sun Xtender® AGM batteries have been tested and determined to be in compliance with the vibration and pressure differential tests in accordance with DOT 49 CFR 173.159(d) and Special Provision A67 of the International Air Transport Association (IATA) Dangerous Goods regulations. As such, they are classified as a <strong>“NONSPILLABLE BATTERY”</strong> and can be shipped as non-hazardous material by any means.
          </p>
          <p className="mt-5 leading-7 text-muted-foreground">
            To comply with DOT shipping regulations, the battery must be packaged to protect against short circuits and the battery and outer packaging must be plainly and durably marked <strong className="text-foreground">“NONSPILLABLE”</strong> or <strong className="text-foreground">“NONSPILLABLE BATTERY”</strong>.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-2xl font-semibold">Export compliance</h2>
          <p className="leading-7 text-muted-foreground">
            The products provided by Concorde Battery Corporation may be subject to export restrictions imposed by the United States. Export Licenses may be required. Customer agrees to comply with all U.S. Government laws and regulations as they relate to the export, transfer and re-export of goods. Customer shall indemnify and hold Concorde Battery Corporation harmless for any loss, damage, or expense, including lost profits, attorney&apos;s fees and court costs, incurred for or as a result of any failure or alleged failure of customer to comply with such laws and regulations.
          </p>
        </section>

        <section className="space-y-5 border-t border-border pt-10">
          <div>
            <p className="font-mono text-xs uppercase text-primary">Battery classification</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">Non-spillable wet electric storage batteries</h2>
          </div>
          <p className="leading-7 text-muted-foreground">
            Concorde Battery Corporation&apos;s Sun Xtender® Series batteries are manufactured utilizing Absorbed Glass Mat (AGM) technology. The batteries are sealed with the electrolyte absorbed in the fiberglass mat separator material.
          </p>
          <p className="leading-7 text-muted-foreground">
            The Department of Transportation (DOT) regulatory requirements affecting the packaging and transportation of all batteries containing acid or alkali are contained in the Code of Federal Regulations, 49 CFR Section 173.159.
          </p>
          <p className="leading-7 text-muted-foreground">
            The Concorde manufactured batteries listed above are non-spillable wet, electric storage batteries. The batteries are excluded from the requirements of the DOT&apos;s hazardous materials regulations since they meet the requirements of 49 CFR 173.159(d).
          </p>
        </section>

        <section className="space-y-5 border-t border-border pt-10">
          <div>
            <p className="font-mono text-xs uppercase text-primary">49 CFR 173.159(d) states:</p>
            <h2 className="mt-2 font-display text-2xl font-semibold">IATA and ICAO provisions</h2>
          </div>
          <p className="leading-7 text-muted-foreground">
            The Concorde manufactured batteries listed above also are excluded from the IATA Dangerous Goods Regulations pursuant to Special provision A67 and Packing Instruction 806. The Air Waybill should state <strong className="text-foreground">“Not Restricted per Special Provision A67.”</strong>
          </p>
          <p className="leading-7 text-muted-foreground">
            This notice is to clarify to shippers and transporters that the batteries listed are packaged and marked in accordance to 49 CFR 173.159(d) and are determined to be in compliance with DOT HMR49 Non-Hazardous Materials, the International Civil Aeronautics Organization (ICAO) and the International Air Transportation Association (IATA), Special Provisions S.P.A67 &amp; A48. Therefore, these batteries are not restricted for shipment by air or any other means of transportation and are exempted from the hazardous material category.
          </p>
        </section>
      </article>
    </PageShell>
  ),
});

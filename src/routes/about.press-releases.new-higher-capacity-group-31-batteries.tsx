import { createFileRoute } from "@tanstack/react-router";

import { CsEmail, PressReleaseShell, PrP, prHead } from "@/components/press-release";
import { productImageUrl } from "@/components/product-bits";
import { getProductByName } from "@/data/products";

export const Route = createFileRoute("/about/press-releases/new-higher-capacity-group-31-batteries")({
  head: () =>
    prHead(
      "New Higher Capacity Group 31 Batteries Released",
      "July 12, 2011 — four new Sun Xtender® AGM deep cycle Group 31 batteries in 12 Volt, 6 Volt and 2 Volt configurations.",
    ),
  component: Page,
});

const MODELS = [
  "PVX-1180T 12 Volt, Group 31: 118 Ah at the 24 hour rate",
  "PVX-1290T 12 Volt, Group 31: 129 Ah at the 24 hour rate",
  "PVX-2560T 6 Volt, Group 31: 256 Ah at the 24 hour rate",
  "PVX-7680T 2 Volt, Group 31: 768 Ah at the 24 hour rate",
];

function Page() {
  const product = getProductByName("PVX-1180T");
  const img = product ? productImageUrl(product) : null;
  return (
    <PressReleaseShell title="New Higher Capacity Group 31 Batteries Released" date="2011-07-12" boldDate>
      <PrP>
        West Covina, CA - July 12, 2011 - Concorde Battery Corporation is pleased to introduce four new Sun Xtender® AGM, deep cycle batteries for renewable energy and photovoltaic systems. These new high capacity Group 31 batteries are available in 12 Volt, 6 Volt and 2 Volt configurations. The newest additions to the Sun Xtender® lineup were developed to offer flexibility when designing battery bank layout and configuration options.
      </PrP>
      <div className="mt-4 flow-root">
        {img ? (
          <img
            src={img}
            alt="Sun Xtender PVX-1180T 12 Volt Group 31 AGM battery"
            loading="lazy"
            className="mb-4 w-full max-w-xs border border-border bg-white object-contain p-2 sm:float-right sm:mb-2 sm:ml-6 sm:w-56"
          />
        ) : null}
        <p className="text-sm leading-relaxed text-muted-foreground">
          The four new batteries have been engineered with the same reliable features used in Concorde's aircraft batteries which are installed by aircraft manufacturers worldwide and adopted by the military. Constructed with valve regulated lead acid (VRLA) absorbed glass mat (AGM) technology, the batteries are non-spillable and maintenance free. Water replenishment and electrolyte checks are never required. Thicker plates than the industry standard are pasted with a high density formula for excellent cycling capability, better float life and extended battery life. Concorde is the only manufacturer that uses a microporous polyethylene separator around the positive plate and AGM to protect against shorts. The separator is a proprietary Polyguard® product. Robust "over the partition" intercell connections are fusion welded for increased strength and lower resistance in contrast to commonly used "through the partition" spot welds that are often a weak point and source of resistance. Durable battery cases and covers are made of a thick walled polypropylene for excellent impact resistance at extreme low temperatures and bulge resistance at high temperatures. Copper alloy terminals provide an improved low resistance electrical connection and are more environmentally friendly than industry standard lead terminals.
        </p>
      </div>
      <ul className="mono mt-6 space-y-2 border-l-2 border-primary pl-6 text-sm text-foreground">
        {MODELS.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <div className="mt-6">
        <PrP>Sun Xtender® batteries are crafted for quality in the U.S.A. and ship Hazmat exempt.</PrP>
        <PrP>Concorde manufactures to ISO 9001 + AS9100 quality standards.</PrP>
        <PrP>
          For more information please contact Sun Xtender® at 626-813-1234 or email us at <CsEmail />.
        </PrP>
      </div>
    </PressReleaseShell>
  );
}

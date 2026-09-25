import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { ImageLightbox } from "@/components/product-bits";
import crossSection from "@/assets/agm-cross-section.jpg.asset.json";

const SECTIONS: { n: string; title: string; id: string; body: string }[] = [
  {
    n: "01",
    title: "Grids",
    id: "grids",
    body: "The negative grid is made of pure lead calcium alloy. The positive grid is extra thick and made from a proprietary, pure lead-tin-calcium alloy with special grain refiners. These features improve corrosion resistance of the grid and give the battery excellent cycling capability and float life.",
  },
  {
    n: "02",
    title: "Plates",
    id: "plates",
    body: "The grids are pasted on state-of-the-art pasting machines to give the highest quality plates with tightly controlled weight and thickness specifications. The lead oxide paste used to make the positive plates is our high density formula. With time and use, the active material tends to soften and give less discharge capacity. The high density paste formula retards the active material softening and extends battery life.",
  },
  {
    n: "03",
    title: "Absorbent Glass Mat (AGM) Separator",
    id: "agm-separator",
    body: "The AGM is a premium blend of glass micro fibers having an optimum ratio of fine and extra fine fiber sizes. This blend features superior wicking characteristics and promotes maximum retention of the electrolyte. The AGM layer is squeezed to an optimum level of compression during assembly to provide sufficient contact with the surface of the plate over the life of the battery. This compression also promotes retention of the active material if the battery is exposed to shock or vibration conditions.",
  },
  {
    n: "04",
    title: "Polyethylene Envelope",
    id: "polyethylene-envelope",
    body: "Concorde is the only manufacturer that envelopes the AGM separator with a thin layer of microporous polyethylene. The microporous layer is wrapped around the glass-matted plate and then sealed along the sides to eliminate the possibility of shorts at the edges of the plate (a common failure mode). The microporous polyethylene is more durable and puncture resistant than the AGM material alone and significantly reduces the occurrence of plate to plate shorts.",
  },
  {
    n: "05",
    title: "Intercell Connections",
    id: "intercell-connections",
    body: 'Massive "over the partition" fusion welds are used which increase the strength of the intercell connection. This minimizes the possibility of open welds and provides a low resistance connection between cells. Other manufacturers use "through the partition" spot welded construction that inserts a weak point into the assembly because of the small cross section area and the difficulty of making a reliable weld and leak proof construction.',
  },
  {
    n: "06",
    title: "High Impact, Reinforced Container & Cover",
    id: "container-and-cover",
    body: "The battery container and cover are made of a thick walled polypropylene copolymer. This material provides excellent impact resistance at extreme low temperatures and minimizes bulging at high temperatures.",
  },
  {
    n: "07",
    title: "Cover-to-Container Seal",
    id: "cover-to-container-seal",
    body: "The batteries use an epoxied tongue and groove seal between the cover and container. Most other manufacturers heat seal their cover to the container. The epoxied tongue and groove is a far stronger seal and will not separate in high or low temperature extreme applications.",
  },
  {
    n: "08",
    title: "Pressure Relief Safety Valve",
    id: "pressure-relief-safety-valve",
    body: "Each cell in the battery employs a pressure relief safety valve. The valve is designed to release excess pressure that builds up over time to vent the small quantity of gasses that do not recombine inside of the battery. Once the pressure is released, the valve automatically re-seals. The gasses that escape are mainly oxygen and some hydrogen, and these gasses rapidly dissipate into the atmosphere.",
  },
  {
    n: "09",
    title: "Terminals",
    id: "terminals",
    body: "Sun Xtender AGM batteries employ copper alloy (silicon bronze) terminals providing an improved low resistance electrical connection. The copper alloy terminals are non-corrosive and offer increased environmental protection and personal safety compared to commonly used lead terminals. The terminals on most Sun Xtender AGM batteries are recessed below the top of the battery cover, preventing short circuiting across the battery terminals.",
  },
  {
    n: "10",
    title: "Handles",
    id: "handles",
    body: "Lifting handles are incorporated into most Sun Xtender AGM batteries, providing easier handling for lifting, carrying, and installation.",
  },
];

export const Route = createFileRoute("/technical/construction-and-design")({
  component: ConstructionAndDesign,
  head: () => ({
    meta: [
      { title: "Construction & Design | SunXtender AGM Batteries" },
      {
        name: "description",
        content:
          "Component-by-component construction of SunXtender AGM batteries: grids, plates, AGM separator, polyethylene envelope, welds, container, seal, valve, terminals and handles.",
      },
      { property: "og:title", content: "Construction & Design | SunXtender" },
      {
        property: "og:description",
        content:
          "How every SunXtender AGM battery is built — from pure lead-tin-calcium grids to copper alloy terminals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ConstructionAndDesign() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <PageShell
      eyebrow="Resources / Construction"
      title="Construction & Design"
      subtitle="Every component of a SunXtender AGM battery, and why it is built that way."
    >
      <figure className="mb-14 border border-border bg-surface">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="Enlarge battery cross-section diagram"
          className="block w-full cursor-zoom-in bg-white p-4 sm:p-8"
        >
          <img
            src={crossSection.url}
            alt="Cutaway diagram of a SunXtender AGM battery labeling the intercell connections, cover-to-container seal, pressure relief safety valves, lifting handles, copper alloy terminal, polypropylene copolymer container and cover, thick plates with high density paste, absorbent glass mat separator, and polyethylene envelope"
            className="mx-auto w-full max-w-2xl"
            loading="lazy"
          />
        </button>
        <figcaption className="mono border-t border-border px-4 py-3 text-[11px] tracking-widest text-muted-foreground uppercase sm:px-8">
          Fig. 01 — SunXtender AGM battery cross-section. Click to enlarge.
        </figcaption>
      </figure>
      <div className="max-w-3xl">
        {SECTIONS.map((s, i) => (
          <section
            key={s.n}
            id={s.id}
            className={`scroll-mt-32 ${i === 0 ? "" : "mt-12 border-t border-border pt-12"}`}
          >
            <div className="mono text-[11px] tracking-widest text-primary uppercase">{s.n}</div>
            <h2 className="mt-3 font-display text-xl tracking-tight sm:text-2xl">{s.title}</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{s.body}</p>
          </section>
        ))}
      </div>
      {lightboxOpen && (
        <ImageLightbox
          src={crossSection.url}
          alt="SunXtender AGM battery cross-section diagram"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </PageShell>
  );
}

import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { ImageLightbox } from "@/components/product-bits";
import m8Terminal from "@/assets/M8_Terminal.jpg.asset.json";
import saePost from "@/assets/SAE_Post.jpg.asset.json";
import lBlade from "@/assets/L_blade_terminal.jpg.asset.json";

const TERMINALS = [
  {
    n: "01",
    title: "M8 Threaded Insert Standard Terminals",
    sub: "Copper Alloy",
    image: m8Terminal,
    alt: "M8 threaded insert terminal on a SunXtender AGM battery",
    body: 'All batteries with a "T" at the end of the part number incorporate M8 threaded insert terminals except PVX-340T & PVX-420T. M6 Threaded Insert are used for PVX-340T & PVX-420T only. All batteries are supplied with silicon bronze bolts, nuts, and washers required for installation.',
  },
  {
    n: "02",
    title: "A SAE Automotive Post",
    sub: "Optional factory-installed terminal",
    image: saePost,
    alt: "SAE automotive post terminal on a SunXtender AGM battery",
    body: 'Optional terminal installed at the factory. Most batteries are available with an optional factory installed "A" SAE automotive type terminal by adding the appropriate suffix to the end of the part number. For example, order PVX-1040TA instead of PVX-1040T.',
  },
  {
    n: "03",
    title: "L Blade Terminal",
    sub: "Solid Copper",
    image: lBlade,
    alt: "Solid copper L blade terminal on a SunXtender AGM battery",
    body: 'Heavy duty solid copper with silicon bronze bolts, washers and nuts. PVX-2120L & PVX-2580L are "L" Blade terminals.',
  },
];

function TerminalOptionsPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <PageShell
      eyebrow="Products · Terminal Options"
      title="Terminal options"
      subtitle="Terminal configurations available across the SunXtender deep-cycle range."
    >
      <div className="mx-auto max-w-5xl">
        <div className="divide-y divide-border border-y border-border">
          {TERMINALS.map((t) => (
            <section key={t.n} className="grid gap-8 py-12 md:grid-cols-[16rem_1fr] md:py-16">
              <figure className="w-full max-w-[16rem]">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: t.image.url, alt: t.alt })}
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={t.image.url}
                    alt={t.alt}
                    loading="lazy"
                    className="aspect-square w-full border border-border bg-background object-contain transition-opacity hover:opacity-80"
                  />
                </button>
              </figure>
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                  {t.n} · TERMINAL
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                  {t.title}
                  <span className="block text-sm font-normal text-muted-foreground md:text-base">
                    ({t.sub})
                  </span>
                </h2>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t.body}
                </p>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border border-primary/40 bg-primary/[0.04] p-6 md:p-8">
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">TORQUE VALUES</p>
          <p className="mt-3 text-sm leading-relaxed md:text-base">
            <strong>Terminal Torque Values:</strong> M6 use 35 in-lbs / 4.0 nm. M8 use 70 in-lbs /
            7.9 nm.
          </p>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </PageShell>
  );
}

export const Route = createFileRoute("/terminal-options")({
  component: TerminalOptionsPage,
  head: () => ({
    meta: [
      { title: "Terminal Options | SunXtender AGM Batteries" },
      {
        name: "description",
        content:
          "M8 threaded insert, SAE automotive post and L blade terminal options for SunXtender AGM deep-cycle batteries, with factory torque values.",
      },
      { property: "og:title", content: "Terminal Options | SunXtender" },
      {
        property: "og:description",
        content:
          "Terminal configurations across the SunXtender AGM deep-cycle range: M8 threaded insert, SAE automotive post and L blade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

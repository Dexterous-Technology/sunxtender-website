import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";

import { ImageLightbox } from "@/components/product-bits";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PRODUCTS } from "@/data/products";
import { PRODUCT_VIEW_IMAGES } from "@/data/product-views";

export const Route = createFileRoute("/about/agm-media-center")({
  head: () => ({
    meta: [
      { title: "AGM Media Center | SunXtender" },
      { name: "description", content: "Videos, photography and media assets for Sun Xtender AGM batteries." },
      { property: "og:title", content: "AGM Media Center | SunXtender" },
      { property: "og:description", content: "Videos, photography and media assets for Sun Xtender AGM batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaCenterPage,
});

const CATALOG_MODELS = new Set(PRODUCTS.map((product) => product.name));
const MEDIA_MODELS = Object.keys(PRODUCT_VIEW_IMAGES).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true }),
);
const ANGLES = ["Left", "Middle", "Right"] as const;

function MediaCenterPage() {
  const [query, setQuery] = useState("");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const normalizedQuery = query.trim().toLowerCase();
  const visibleModels = MEDIA_MODELS.filter((model) => model.toLowerCase().includes(normalizedQuery));

  return (
    <PageShell
      eyebrow="About"
      title="AGM Media Center"
      subtitle="Browse high-resolution Sun Xtender battery photography by product model and viewing angle."
    >
      <section aria-labelledby="product-gallery-heading">
        <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mono text-[11px] tracking-widest text-primary uppercase">Product photography</div>
            <h2 id="product-gallery-heading" className="mt-3 font-display text-2xl md:text-3xl">
              Product Image Gallery
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {visibleModels.length} of {MEDIA_MODELS.length} models
            </p>
          </div>

          <label className="relative block w-full md:max-w-sm">
            <span className="sr-only">Search by product model</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search product model"
              className="h-11 rounded-none bg-background pr-3 pl-10"
            />
          </label>
        </div>

        {visibleModels.length > 0 ? (
          <div className="divide-y divide-border">
            {visibleModels.map((model) => {
              const images = PRODUCT_VIEW_IMAGES[model];
              if (!images) return null;

              return (
                <article key={model} className="py-10 md:py-14">
                  <h3 className="font-display text-xl md:text-2xl">{model}</h3>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {ANGLES.map((angle) => {
                      const src = images[angle.toLowerCase() as Lowercase<typeof angle>];
                      const alt = `${model} AGM battery, ${angle.toLowerCase()} view`;
                      return (
                        <figure key={angle}>
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setLightbox({ src, alt })}
                            aria-label={`Enlarge ${model} ${angle.toLowerCase()} view`}
                            className="group block h-auto w-full rounded-none border border-border bg-card p-0 focus-visible:ring-2 focus-visible:ring-primary"
                          >
                            <span className="block aspect-[4/3] overflow-hidden">
                              <img
                                src={src}
                                alt={alt}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                              />
                            </span>
                          </Button>
                          <figcaption className="mono mt-2 text-[10px] tracking-widest text-muted-foreground uppercase">
                            {angle} view
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>

                  {CATALOG_MODELS.has(model) ? (
                    <Link
                      to="/products/$sku"
                      params={{ sku: model }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      View {model} product details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : (
                    <p className="mono mt-6 text-[10px] tracking-widest text-muted-foreground uppercase">
                      Media archive model
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border-b border-border py-20 text-center">
            <h3 className="font-display text-xl">No matching product models</h3>
            <p className="mt-3 text-sm text-muted-foreground">Try a different model number.</p>
          </div>
        )}
      </section>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </PageShell>
  );
}

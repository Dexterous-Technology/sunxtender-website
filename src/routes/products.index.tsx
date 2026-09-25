import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Download, Search, X } from "lucide-react";

import { AffiliationBar, Nav, Footer } from "@/components/site-chrome";
import { BatteryPlaceholder, productImageUrl } from "@/components/product-bits";
import { CatalogProductViewer } from "@/components/catalog-product-viewer";
import { PRODUCTS, RATE_LABELS, type Product } from "@/data/products";
import specificationsPdf from "@/assets/specifications.pdf.asset.json";


export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): { volts?: number; q?: string } => {
    const v = Number(search["volts"]);
    const q = typeof search["q"] === "string" ? search["q"].trim().slice(0, 40) : "";
    return {
      ...(Number.isFinite(v) && v > 0 ? { volts: v } : {}),
      ...(q ? { q } : {}),
    };
  },
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "AGM Battery Catalog | SunXtender Deep-Cycle Batteries" },
      {
        name: "description",
        content:
          "Browse the full SunXtender VRLA-AGM deep-cycle battery catalog: voltage, case size, 24-hour Ah capacity, weight and terminal type for every part number.",
      },
      { property: "og:title", content: "AGM Battery Catalog | SunXtender" },
      {
        property: "og:description",
        content:
          "Every SunXtender deep-cycle AGM part number with capacity, dimensions and terminal data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type ViewMode = "grid" | "list";
type DataMode = "dimensions" | "electrical";

function footnoteFor(p: Product): number | null {
  if (p.minOrder === "84") return 1;
  if (p.minOrder === "96") return 2;
  return null;
}

function dimText(inches: number | null, mm: number | null) {
  if (inches == null && mm == null) return "—";
  return `${inches ?? "—"} in / ${mm ?? "—"} mm`;
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="mono text-right">{value}</dd>
    </div>
  );
}

function Toggle<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
        {label}
      </span>
      <div className="flex" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`mono border px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
              value === o.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductsPage() {
  const { volts, q = "" } = Route.useSearch();
  const navigate = useNavigate({ from: "/products/" });
  const [pdfOpen, setPdfOpen] = useState(false);
  const [view, setView] = useState<ViewMode>("grid");
  const [dataView, setDataView] = useState<DataMode>("dimensions");

  useEffect(() => {
    if (!pdfOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPdfOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [pdfOpen]);

  const all = [...PRODUCTS].sort((a, b) => a.sortOrder - b.sortOrder);
  const voltages = Array.from(
    new Set(all.map((p) => p.volts).filter((v): v is number => v != null)),
  ).sort((a, b) => a - b);
  const query = q.trim().toLowerCase();
  const products = all.filter(
    (p) =>
      (volts == null || p.volts === volts) &&
      (query === "" || p.name.toLowerCase().includes(query)),
  );
  const hasFilters = volts != null || query !== "";

  const setSearch = (value: string) => {
    navigate({
      search: (prev) => ({ ...prev, q: value.trim() || undefined }),
      replace: true,
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AffiliationBar />
      <Nav />

      <section className="border-b border-border">
        <div className="container-x py-16 md:py-24">
          <div className="mono text-[11px] tracking-widest text-primary uppercase">
            03 · Product Catalog
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Every part number,
            <br />
            <span className="text-primary">with the data that decides it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm text-muted-foreground">
            Capacities shown are the 24-hour rate, the industry-standard rating for deep-cycle
            renewable-energy service. {products.length}
            {volts != null ? ` ${volts}V` : ""} models
            {volts != null ? " match this filter." : " in current production."}
          </p>

          <button
            type="button"
            onClick={() => setPdfOpen(true)}
            className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" strokeWidth={2} /> View Specifications (PDF)
          </button>

        </div>
      </section>

      <section>
        <div className="container-x py-12 md:py-16">
          <div className="mb-6 text-xs text-muted-foreground/80">
            <p>1: minimum order of 84 solar batteries applies.</p>
            <p>2: minimum order of 96 solar batteries applies.</p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full max-w-md items-center gap-0 border border-border bg-surface focus-within:border-primary">
              <Search className="ml-4 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={2} />
              <input
                type="search"
                value={q}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by part number, e.g. PVX-2120L"
                aria-label="Search batteries by part number"
                className="w-full bg-transparent px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="mr-2 shrink-0 p-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <X className="h-4 w-4" strokeWidth={2} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Voltage
              </span>
              <Link
                to="/products"
                search={(prev: { q?: string }) => ({ q: prev.q })}
                className={`mono border px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                  volts == null
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                All
              </Link>
              {voltages.map((v) => (
                <Link
                  key={v}
                  to="/products"
                  search={(prev: { q?: string }) => ({ q: prev.q, volts: v })}
                  className={`mono border px-4 py-2 text-xs tracking-widest uppercase transition-colors ${
                    volts === v
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {v}V
                </Link>
              ))}
            </div>
          </div>



          {hasFilters && (
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Filters
              </span>
              {volts != null && (
                <Link
                  to="/products"
                  search={(prev: { q?: string }) => ({ q: prev.q })}
                  className="mono inline-flex items-center gap-2 border border-primary bg-primary px-3 py-1.5 text-xs tracking-widest text-primary-foreground uppercase"
                  aria-label={`Remove ${volts}V filter`}
                >
                  {volts}V <X className="h-3 w-3" strokeWidth={2} />
                </Link>
              )}
              {query !== "" && (
                <Link
                  to="/products"
                  search={(prev: { volts?: number }) => ({ volts: prev.volts })}
                  className="mono inline-flex items-center gap-2 border border-primary bg-primary px-3 py-1.5 text-xs tracking-widest text-primary-foreground uppercase"
                  aria-label="Clear search filter"
                >
                  “{q.trim()}” <X className="h-3 w-3" strokeWidth={2} />
                </Link>
              )}
              <Link
                to="/products"
                search={{}}
                className="mono text-[11px] tracking-widest text-primary uppercase hover:underline"
              >
                Clear all
              </Link>
            </div>
          )}
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-baseline gap-4">
              <h2 className="mono text-[11px] tracking-widest text-muted-foreground uppercase">
                Showing {products.length}
                {volts != null || query !== ""
                  ? ` of ${PRODUCTS.length} models`
                  : " models"}
              </h2>
              {hasFilters && (
                <Link
                  to="/products"
                  search={{}}
                  className="mono text-[11px] tracking-widest text-primary uppercase hover:underline"
                >
                  Clear filter
                </Link>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <Toggle
                label="View"
                value={view}
                onChange={setView}
                options={[
                  { value: "grid", label: "Grid" },
                  { value: "list", label: "List" },
                ]}
              />
              <Toggle
                label="Data"
                value={dataView}
                onChange={setDataView}
                options={[
                  { value: "dimensions", label: "Dimensions" },
                  { value: "electrical", label: "Electrical Properties" },
                ]}
              />
            </div>
          </div>
          {view === "grid" ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => {
                const note = footnoteFor(p);
                return (
                  <Link
                    key={p.id}
                    to="/products/$sku"
                    params={{ sku: p.name }}
                    className="group flex flex-col border border-border bg-surface transition-colors hover:border-primary"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                      <CatalogProductViewer sku={p.name} />
                      {p.isNew && (
                        <span className="mono absolute top-3 left-3 bg-primary px-2 py-1 text-[10px] font-semibold tracking-widest text-primary-foreground uppercase">
                          New
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h2 className="font-display text-xl group-hover:text-primary">
                          {p.name}
                          {note && <sup className="mono text-primary">{note}</sup>}
                        </h2>
                        <span className="mono text-sm text-muted-foreground">
                          {p.volts != null ? `${p.volts}V` : "—"}
                        </span>
                      </div>

                      {p.summary && (
                        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                          {p.summary}
                        </p>
                      )}

                      <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                        {dataView === "dimensions" ? (
                          <>
                            <SpecRow label="Length" value={dimText(p.dimensions.lengthIn, p.dimensions.lengthMm)} />
                            <SpecRow label="Width" value={dimText(p.dimensions.widthIn, p.dimensions.widthMm)} />
                            <SpecRow label="Height" value={dimText(p.dimensions.heightIn, p.dimensions.heightMm)} />
                            <SpecRow
                              label="Unit weight"
                              value={
                                p.weightLbs != null
                                  ? `${p.weightLbs} lb${p.weightKg != null ? ` / ${p.weightKg} kg` : ""}`
                                  : "—"
                              }
                            />
                            <SpecRow label="Standard terminal" value={p.terminal || "—"} />
                          </>
                        ) : (
                          <>
                            <SpecRow
                              label="24 hour rate"
                              value={p.capacity.n24 != null ? `${p.capacity.n24} Ah` : "—"}
                            />
                            <SpecRow
                              label="100 hour rate"
                              value={p.capacity.n100 != null ? `${p.capacity.n100} Ah` : "—"}
                            />
                          </>
                        )}
                      </dl>

                      <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-wide text-primary uppercase">
                        View specifications <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto border border-border">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead className="bg-surface">
                  {dataView === "dimensions" ? (
                    <>
                      <tr className="mono text-[10px] tracking-widest uppercase">
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Part Number
                        </th>
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Voltage
                        </th>
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Industry Reference
                        </th>
                        <th colSpan={6} className="border border-border px-3 py-2 text-center font-semibold">
                          Overall Dimensions
                        </th>
                        <th colSpan={2} className="border border-border px-3 py-2 text-center font-semibold">
                          Unit Weight
                        </th>
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Standard Terminal
                        </th>
                      </tr>
                      <tr className="mono text-[10px] tracking-widest uppercase">
                        {["Length in", "Length mm", "Width in", "Width mm", "Height in", "Height mm", "LB", "KG"].map(
                          (h) => (
                            <th key={h} className="border border-border px-3 py-2 text-right font-semibold">
                              {h}
                            </th>
                          ),
                        )}
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr className="mono text-[10px] tracking-widest uppercase">
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Part Number
                        </th>
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Voltage
                        </th>
                        <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold">
                          Industry Reference
                        </th>
                        <th colSpan={9} className="border border-border px-3 py-2 text-center font-semibold normal-case tracking-normal">
                          Nominal Capacity Ampere Hours @ 25° (77° F) to 1.75 volts per cell.
                        </th>
                      </tr>
                      <tr className="mono text-[10px] tracking-widest uppercase">
                        {RATE_LABELS.map((r) => (
                          <th key={r.key} className="border border-border px-3 py-2 text-right font-semibold">
                            {r.label.replace(" hr", " Hour Rate")}
                          </th>
                        ))}
                      </tr>
                    </>
                  )}
                </thead>
                <tbody>
                  {products.map((p, i) => {
                    const note = footnoteFor(p);
                    return (
                      <tr key={p.id} className={i % 2 === 1 ? "bg-primary/5" : "bg-background"}>
                        <td className="border border-border px-3 py-2 whitespace-nowrap">
                          {p.isNew && (
                            <span className="mono mr-2 text-[10px] tracking-widest text-primary uppercase">
                              New »
                            </span>
                          )}
                          <Link
                            to="/products/$sku"
                            params={{ sku: p.name }}
                            className="mono underline underline-offset-2 hover:text-primary"
                          >
                            {p.name}
                          </Link>
                          {note && <sup className="mono text-primary">{note}</sup>}
                        </td>
                        <td className="mono border border-border px-3 py-2">
                          {p.volts != null ? p.volts : "—"}
                        </td>
                        <td className="border border-border px-3 py-2">{p.caseSize || "—"}</td>
                        {dataView === "dimensions" ? (
                          <>
                            {[
                              p.dimensions.lengthIn,
                              p.dimensions.lengthMm,
                              p.dimensions.widthIn,
                              p.dimensions.widthMm,
                              p.dimensions.heightIn,
                              p.dimensions.heightMm,
                              p.weightLbs,
                              p.weightKg,
                            ].map((v, idx) => (
                              <td
                                key={idx}
                                className="mono border border-border px-3 py-2 text-right whitespace-nowrap"
                              >
                                {v != null ? v : "—"}
                              </td>
                            ))}
                            <td className="mono border border-border px-3 py-2">{p.terminal || "—"}</td>
                          </>
                        ) : (
                          RATE_LABELS.map((r) => (
                            <td
                              key={r.key}
                              className="mono border border-border px-3 py-2 text-right whitespace-nowrap"
                            >
                              {p.capacity[r.key] != null ? p.capacity[r.key] : "—"}
                            </td>
                          ))
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </section>


      <Footer />

      {pdfOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Sun Xtender specifications PDF preview"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPdfOpen(false);
          }}
        >
          <div className="flex items-center justify-between gap-4 border-b border-border bg-surface px-4 py-3 md:px-8">
            <div className="min-w-0">
              <p className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Sun Xtender Specifications Chart
              </p>
              <p className="font-display text-base truncate">Full specification chart (PDF)</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <a
                href={specificationsPdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mono hidden border border-border px-4 py-2.5 text-xs tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary md:inline-flex"
              >
                Open in new tab
              </a>
              <a
                href={specificationsPdf.url}
                download="SunXtender-Specifications.pdf"
                className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" strokeWidth={2} /> Download
              </a>
              <button
                type="button"
                onClick={() => setPdfOpen(false)}
                aria-label="Close PDF preview"
                className="border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
          <iframe
            src={specificationsPdf.url}
            title="Sun Xtender specifications PDF"
            className="h-full w-full flex-1 bg-white"
          />
        </div>
      )}
    </main>
  );
}

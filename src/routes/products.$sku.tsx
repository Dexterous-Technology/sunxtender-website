import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, FileText } from "lucide-react";

import { AffiliationBar, Nav, Footer } from "@/components/site-chrome";
import {
  BatteryPlaceholder,
  ImageLightbox,
  graphImageUrl,
  drawingImageUrl,
  terminalImageUrl,
  specSheetUrl,
} from "@/components/product-bits";
import { PRODUCTS, RATE_LABELS, getProductByName, type Product } from "@/data/products";
import { datasheetPdfUrl, outlinePdfUrl } from "@/data/product-pdfs";
import { productViewImages } from "@/data/product-views";
import { PdfModal } from "@/components/pdf-modal";

type DataMode = "dimensions" | "electrical";

export const Route = createFileRoute("/products/$sku")({
  loader: ({ params }) => {
    const product = getProductByName(params.sku);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = (loaderData as { product?: Product } | undefined)?.product;
    const title = p ? `${p.name} — ${p.volts}V AGM Deep-Cycle Battery | SunXtender` : "Product | SunXtender";
    const description = p
      ? `${p.name}: ${p.volts}V VRLA-AGM deep-cycle battery, ${p.headlineCapacityAh ?? "—"} Ah at the 24-hour rate, ${p.caseSize} case, ${p.terminal} terminals.`
      : "SunXtender AGM deep-cycle battery specifications.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductDetail,
  notFoundComponent: () => (
    <main className="min-h-screen bg-background text-foreground">
      <AffiliationBar />
      <Nav />
      <div className="container-x py-32">
        <h1 className="font-display text-3xl">Part number not found</h1>
        <Link to="/products" className="mt-6 inline-block text-sm text-primary">
          ← Back to catalog
        </Link>
      </div>
      <Footer />
    </main>
  ),
});

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border py-3 text-sm">
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

function DimensionTable({ product: p }: { product: Product }) {
  const rows = [
    {
      label: "Length",
      value: `${p.dimensions.lengthIn ?? "—"} in / ${p.dimensions.lengthMm ?? "—"} mm`,
    },
    {
      label: "Width",
      value: `${p.dimensions.widthIn ?? "—"} in / ${p.dimensions.widthMm ?? "—"} mm`,
    },
    {
      label: "Height",
      value: `${p.dimensions.heightIn ?? "—"} in / ${p.dimensions.heightMm ?? "—"} mm`,
    },
    {
      label: "Unit Weight",
      value:
        p.weightLbs != null
          ? `${p.weightLbs} LB${p.weightKg != null ? ` / ${p.weightKg} KG` : ""}`
          : "—",
    },
    { label: "Industry Reference", value: p.caseSize || "—" },
    { label: "Standard Terminal", value: p.terminal || "—" },
  ];

  return (
    <div className="mt-8 overflow-x-auto border border-border">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <caption className="sr-only">{p.name} dimensional specifications</caption>
        <thead className="bg-surface">
          <tr className="mono text-[10px] tracking-widest uppercase">
            <th className="border border-border px-3 py-2 text-left font-semibold" scope="col">
              Specification
            </th>
            <th className="border border-border px-3 py-2 text-right font-semibold" scope="col">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-primary/5" : "bg-background"}>
              <th className="border border-border px-3 py-2 text-left font-medium" scope="row">
                {row.label}
              </th>
              <td className="mono border border-border px-3 py-2 text-right whitespace-nowrap">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ElectricalTable({ product: p }: { product: Product }) {
  return (
    <div className="mt-8 overflow-x-auto border border-border">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <caption className="sr-only">{p.name} amp-hour capacity by discharge rate</caption>
        <thead className="bg-surface">
          <tr className="mono text-[10px] tracking-widest uppercase">
            <th rowSpan={2} className="border border-border px-3 py-2 text-left font-semibold" scope="col">
              Part Number
            </th>
            <th colSpan={RATE_LABELS.length} className="border border-border px-3 py-2 text-center font-semibold normal-case tracking-normal" scope="colgroup">
              Nominal Capacity Ampere Hours @ 25° (77° F) to 1.75 volts per cell.
            </th>
          </tr>
          <tr className="mono text-[10px] tracking-widest uppercase">
            {RATE_LABELS.map((r) => (
              <th key={r.key} className="border border-border px-3 py-2 text-right font-semibold" scope="col">
                {r.label.replace(" hr", " Hour Rate")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-background">
            <th className="mono border border-border px-3 py-2 text-left font-medium whitespace-nowrap" scope="row">
              {p.name}
            </th>
            {RATE_LABELS.map((r) => (
              <td
                key={r.key}
                className={`mono border border-border px-3 py-2 text-right whitespace-nowrap ${
                  r.key === "n24" ? "font-semibold text-primary" : ""
                }`}
              >
                {p.capacity[r.key] ?? "—"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [dataView, setDataView] = useState<DataMode>("dimensions");
  const [activeIndex, setActiveIndex] = useState(0);
  const productViews = productViewImages(p.name);
  const drawing = drawingImageUrl(p);
  const terminal = terminalImageUrl(p);
  const pdf = specSheetUrl(p);
  const datasheetPdf = datasheetPdfUrl(p);
  const outlinePdf = outlinePdfUrl(p);
  const [docModal, setDocModal] = useState<"datasheet" | "outline" | null>(null);

  const gallery: { kind: string; src: string; alt: string; caption: string }[] = [
    productViews && {
      kind: "left",
      src: productViews.left,
      alt: `${p.name} AGM battery left view`,
      caption: "Left View",
    },
    productViews && {
      kind: "middle",
      src: productViews.middle,
      alt: `${p.name} AGM battery middle view`,
      caption: "Middle View",
    },
    productViews && {
      kind: "right",
      src: productViews.right,
      alt: `${p.name} AGM battery right view`,
      caption: "Right View",
    },
    {
      kind: "graph",
      src: graphImageUrl,
      alt: "AGM life cycle performance and capacity vs battery temperature graphs",
      caption: "Performance Graphs",
    },
    drawing && {
      kind: "drawing",
      src: drawing,
      alt: `${p.name} battery outline drawing with dimensions`,
      caption: "Battery Outline Drawing",
    },
    terminal && {
      kind: "terminal",
      src: terminal,
      alt: `${p.name} terminal options diagram`,
      caption: "Terminal Options",
    },
  ].filter(Boolean) as { kind: string; src: string; alt: string; caption: string }[];

  const active = gallery[Math.min(activeIndex, gallery.length - 1)];
  const d = p.dimensions;

  const dims =
    d.lengthIn != null
      ? `${d.lengthIn} × ${d.widthIn} × ${d.heightIn} in / ${d.lengthMm} × ${d.widthMm} × ${d.heightMm} mm`
      : "—";

  const related = PRODUCTS.filter((x) => x.id !== p.id && x.volts === p.volts).slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <AffiliationBar />
      <Nav />

      <div className="container-x pt-10">
        <Link
          to="/products"
          className="mono inline-flex items-center gap-2 text-[11px] tracking-widest text-muted-foreground uppercase hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} /> Catalog
        </Link>
      </div>

      <section className="container-x grid grid-cols-1 gap-12 py-10 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            {active ? (
              <button
                type="button"
                onClick={() => setLightbox({ src: active.src, alt: active.alt })}
                aria-label={`Enlarge ${active.caption}`}
                className="block h-full w-full cursor-zoom-in bg-card"
              >
                <img
                  src={active.src}
                  alt={active.alt}
                  className={`h-full w-full transition-opacity duration-200 ${
                    ["left", "middle", "right"].includes(active.kind)
                      ? "object-cover"
                      : "object-contain p-3"
                  }`}
                />
              </button>
            ) : (
              <BatteryPlaceholder label={p.name} />
            )}
            {p.isNew && (
              <span className="mono absolute top-4 left-4 bg-primary px-2 py-1 text-[10px] font-semibold tracking-widest text-primary-foreground uppercase">
                New
              </span>
            )}
          </div>

          {gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {gallery.map((g, i) => (
                <button
                  key={g.kind}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show ${g.caption}`}
                  aria-current={i === activeIndex}
                  className={`aspect-[4/3] overflow-hidden border bg-card transition-colors ${
                    i === activeIndex ? "border-primary" : "border-border hover:border-border-strong"
                  }`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className={`h-full w-full ${
                      ["left", "middle", "right"].includes(g.kind)
                        ? "object-cover"
                        : "object-contain p-1"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}

          <p className="mono mt-2 text-[11px] tracking-wider text-muted-foreground uppercase">
            {active ? `${active.caption} — click any image to enlarge` : ""}
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="mono text-[11px] tracking-widest text-primary uppercase">
            {p.volts != null ? `${p.volts}V` : ""} · VRLA-AGM Deep Cycle
          </div>
          <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">{p.name}</h1>
          {p.summary && <p className="mt-5 max-w-lg text-sm text-muted-foreground">{p.summary}</p>}

          <dl className="mt-10">
            <SpecRow
              label="Capacity (24 hr rate)"
              value={p.headlineCapacityAh != null ? `${p.headlineCapacityAh} Ah` : "—"}
            />
            <SpecRow label="Voltage" value={p.volts != null ? `${p.volts}V` : "—"} />
            <SpecRow label="Dimensions (L × W × H)" value={dims} />
            <SpecRow
              label="Weight"
              value={
                p.weightLbs != null
                  ? `${p.weightLbs} lbs / ${p.weightKg ?? "—"} kg`
                  : "—"
              }
            />
            <SpecRow label="Case size" value={p.caseSize || "—"} />
            <SpecRow label="Terminal type" value={p.terminal || "—"} />
            {p.minOrder && <SpecRow label="Minimum order" value={p.minOrder} />}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {pdf && (
              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground"
              >
                <FileText className="h-4 w-4" strokeWidth={2} /> Download Spec Sheet
              </a>
            )}
            <Link
              to="/terminal-options"
              className="inline-flex items-center gap-3 border border-border-strong px-6 py-4 text-sm font-semibold text-foreground hover:bg-surface"
            >
              Terminal Options
            </Link>
            {datasheetPdf && (
              <button
                type="button"
                onClick={() => setDocModal("datasheet")}
                className="inline-flex items-center gap-3 border border-border-strong px-6 py-4 text-sm font-semibold text-foreground hover:bg-surface"
              >
                Datasheet
              </button>
            )}
            {outlinePdf && (
              <button
                type="button"
                onClick={() => setDocModal("outline")}
                className="inline-flex items-center gap-3 border border-border-strong px-6 py-4 text-sm font-semibold text-foreground hover:bg-surface"
              >
                Outline Drawing
              </button>
            )}
          </div>

          {datasheetPdf && (
            <PdfModal
              open={docModal === "datasheet"}
              onOpenChange={(v) => setDocModal(v ? "datasheet" : null)}
              url={datasheetPdf}
              title={`${p.name} — Datasheet`}
              fileName={`${p.name}_datasheet.pdf`}
            />
          )}
          {outlinePdf && (
            <PdfModal
              open={docModal === "outline"}
              onOpenChange={(v) => setDocModal(v ? "outline" : null)}
              url={outlinePdf}
              title={`${p.name} — Outline Drawing`}
              fileName={`${p.name}_outline_drawing.pdf`}
            />
          )}
        </div>
      </section>

      {/* Specification data */}
      <section className="border-t border-border bg-surface">
        <div className="container-x py-16 md:py-20">
          <div className="mono text-[11px] tracking-widest text-primary uppercase">
            Specification data
          </div>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-display text-2xl">
                {dataView === "dimensions" ? "Dimensions and configuration" : "Amp-hours to 1.75 VPC"}
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                {dataView === "dimensions"
                  ? "Physical specifications, industry reference and supplied terminal configuration."
                  : "Published nominal capacity values at 25° (77° F) to 1.75 volts per cell."}
              </p>
            </div>
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

          {dataView === "dimensions" ? <DimensionTable product={p} /> : <ElectricalTable product={p} />}
          {dataView === "electrical" && (
            <p className="mono mt-4 text-[11px] tracking-wider text-muted-foreground uppercase">
              24-hour rate is the published headline capacity
            </p>
          )}
        </div>
      </section>

      {/* Description */}
      {p.descriptionHtml && (
        <section className="border-t border-border">
          <div className="container-x py-16 md:py-20">
            <div className="mono text-[11px] tracking-widest text-primary uppercase">
              Product detail
            </div>
            <div
              className="prose-sx mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:underline [&_li]:mb-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: p.descriptionHtml }}
            />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="container-x py-16">
            <div className="mono text-[11px] tracking-widest text-muted-foreground uppercase">
              Other {p.volts}V models
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to="/products/$sku"
                  params={{ sku: r.name }}
                  className="border border-border bg-background p-6 transition-colors hover:border-primary"
                >
                  <div className="font-display text-lg">{r.name}</div>
                  <div className="mono mt-2 text-xs text-muted-foreground">
                    {r.headlineCapacityAh ?? "—"} Ah · Case {r.caseSize || "—"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}

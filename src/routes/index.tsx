import { createFileRoute, Link } from "@tanstack/react-router";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Flag,
  Clock,
  Home,
  Zap,
  RadioTower,
  FileText,
  Ruler,
  BookOpen,
  MapPin,
  Sun,
} from "lucide-react";

import { AffiliationBar, Nav, Footer, TECHNICAL_MENU } from "@/components/site-chrome";
import { BatteryPlaceholder, productImageUrl } from "@/components/product-bits";
import { PRODUCTS } from "@/data/products";

import heroImg from "@/assets/hero-manufacturing.jpg";
import constructionOutline from "@/assets/sunxtender-agm-outline-cutaway.png.asset.json";
import caseTelecom from "@/assets/case-telecom.jpg";
import caseOffgrid from "@/assets/case-offgrid.jpg";
import caseUtility from "@/assets/case-utility.jpg";

export const Route = createFileRoute("/")({
  component: Home_,
  head: () => ({
    meta: [
      { title: "SunXtender AGM Batteries | Aerospace-Grade Power" },
      {
        name: "description",
        content:
          "Premium deep-cycle AGM batteries built to aircraft battery standards for solar, off-grid, telecom and industrial backup power.",
      },
      { property: "og:title", content: "SunXtender AGM Batteries | Aerospace-Grade Power" },
      {
        property: "og:description",
        content:
          "Premium deep-cycle AGM batteries engineered for solar, off-grid, telecom and industrial backup power.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

/* ---------------------------------- Hooks --------------------------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, className: `reveal ${visible ? "reveal-in" : ""}` };
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return n;
}


/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <img
        src={heroImg}
        alt="SunXtender AGM battery plate assembly line"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay — theme-aware. Warm navy scrim in light mode, deep black in dark mode. */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.03_255)]/65 via-[oklch(0.22_0.03_255)]/35 to-transparent dark:from-black/90 dark:via-black/75 dark:to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.03_255)]/55 via-transparent to-[oklch(0.22_0.03_255)]/10 dark:from-black/85 dark:via-transparent dark:to-black/35" />


      <div className="dark container-x relative flex min-h-[92vh] flex-col justify-end pt-32 pb-20 text-foreground">

        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow">SX / MFG-01 · Since 1987</span>
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The only deep-cycle AGM battery
            <br />
            built to{" "}
            <span className="text-primary">aircraft battery standards</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Concorde builds every SunXtender cell to AS9100 aerospace protocol —
            the same discipline that qualifies our sister batteries for FAA-certified
            aircraft. Nothing about the process changes when the destination is a
            solar array or a telecom cabinet.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#find"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Find Your Battery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a
              href="#engineering"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="mono text-[11px]">04 —</span> See how they're built
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 bottom-8 hidden font-mono text-[10px] tracking-widest text-muted-foreground uppercase md:block">
          <div>N 34.0928° · W 117.7198°</div>
          <div className="mt-1 opacity-60">Concorde Battery Corp. · West Covina, CA</div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Trust bar ------------------------------- */

const TRUST = [
  { icon: ShieldCheck, label: "UL Registered Component", meta: "MH-14711" },
  { icon: Award, label: "ISO 9001 + AS9100", meta: "Aerospace QMS" },
  { icon: Flag, label: "Manufactured in USA", meta: "West Covina, CA" },
  { icon: Clock, label: "In production since", meta: "1987" },
];

function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-x grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {TRUST.map(({ icon: Icon, label, meta }, i) => (
          <div
            key={label}
            className={`flex items-center gap-4 px-2 py-6 md:px-8 ${i < 2 ? "border-b border-border md:border-b-0" : ""}`}
          >
            <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.25} />
            <div className="min-w-0">
              <div className="text-sm font-medium text-foreground">{label}</div>
              <div className="mono mt-1 text-[11px] tracking-wider text-muted-foreground uppercase">
                {meta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Section head ----------------------------- */

function SectionHead({
  num,
  eyebrow,
  title,
  lede,
}: {
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
      <div className="md:col-span-3">
        <div className="mono text-[11px] tracking-widest text-primary uppercase">
          {num} · {eyebrow}
        </div>
      </div>
      <div className="md:col-span-9">
        <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {lede && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------ Applications ------------------------------ */

const APPS = [
  { icon: Zap, label: "Grid Tied", to: "/applications/grid-tied", copy: "Battery support for grid-tied solar installations. Content coming soon." },
  { icon: Home, label: "Off Grid System", to: "/applications/off-grid-systems", copy: "Autonomous power for cabins, homes and remote sites. Content coming soon." },
  { icon: ShieldCheck, label: "Energy Storage for Backup Power", to: "/applications/energy-storage-backup-power", copy: "Standby storage for critical loads and outage resilience. Content coming soon." },
  { icon: Sun, label: "Solar Street Lights", to: "/applications/solar-street-lights", copy: "Nightly cycling duty for solar roadway and area lighting. Content coming soon." },
  { icon: RadioTower, label: "Smart Grid Systems", to: "/applications/smart-grid-systems", copy: "Distributed storage for smart grid and microgrid control. Content coming soon." },
];

function Applications() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="applications" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHead
          num="01"
          eyebrow="Applications"
          title={
            <>
              What are you <span className="text-primary">powering?</span>
            </>
          }
          lede="Every SunXtender battery is built to a single quality standard. What changes is the geometry, terminal type, and cycle profile you specify for the load."
        />

        <div ref={r.ref} className={`${r.className} mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3`}>
          {APPS.map(({ icon: Icon, label, copy, to }, i) => (
            <Link
              key={label}
              to={to}
              className="group relative flex flex-col justify-between gap-10 border-b border-border bg-background p-8 transition-colors hover:bg-surface sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="flex items-start justify-between">
                <Icon className="h-8 w-8 text-foreground transition-colors group-hover:text-primary" strokeWidth={1} />
                <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  A/{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium">{label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-wide text-primary uppercase">
                  See Details <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- AGM Advantage ---------------------------- */

const COMPARE = [
  { k: "Design cycle life @ 50% DoD", sx: "1,000+", cn: "~400", lfp: "3,000+", u: "cycles" },
  { k: "Manufacturing standard", sx: "AS9100 aerospace", cn: "Commodity", lfp: "Varies", u: "" },
  { k: "Plate alloy", sx: "Proprietary Pb-Ca-Sn", cn: "Recycled Pb-Sb", lfp: "N/A", u: "" },
  { k: "Non-spillable / DOT-38.3", sx: "Yes", cn: "Claimed", lfp: "Yes", u: "" },
  { k: "Warranty (deep-cycle)", sx: "2 yrs full / 7 pro-rata", cn: "1 yr", lfp: "2–5 yrs", u: "" },
  { k: "Operating temp range", sx: "−40° to +80°", cn: "0° to +40°", lfp: "0° to +45°", u: "C" },
  { k: "Field-serviceable BMS req.", sx: "None", cn: "None", lfp: "Required", u: "" },
];

function AdvantageTable() {
  const r = useReveal<HTMLDivElement>();
  const cycles = useCountUp(1000, r.className.includes("reveal-in"));
  const temp = useCountUp(80, r.className.includes("reveal-in"));
  const years = useCountUp(38, r.className.includes("reveal-in"));

  return (
    <section className="border-t border-border bg-surface">
      <div ref={r.ref} className={`container-x py-24 md:py-32 ${r.className}`}>
        <SectionHead
          num="03"
          eyebrow="The AGM Advantage"
          title={
            <>
              Read the row that matters
              <br />
              <span className="text-primary">to your application.</span>
            </>
          }
          lede="Deep-cycle AGM is a mature chemistry. What separates products is manufacturing discipline. Below: representative field data compared to a commodity import AGM and a mid-tier LFP alternative."
        />

        {/* stat counters */}
        <div className="mt-16 grid grid-cols-3 gap-px border border-border bg-border">
          <Stat n={cycles} suffix="+" label="Design cycles @ 50% DoD" />
          <Stat n={temp} suffix="°C" label="Upper operating limit" />
          <Stat n={years} suffix=" yrs" label="Continuous US production" />
        </div>

        {/* comparison table */}
        <div className="mt-12 overflow-x-auto border border-border">
          <table className="w-full min-w-[680px] border-collapse">
            <caption className="sr-only">
              SunXtender vs. Chinese AGM vs. LFP specification comparison
            </caption>
            <thead>
              <tr className="border-b border-border bg-background text-left">
                <th scope="col" className="mono px-6 py-4 text-[11px] font-normal tracking-widest text-muted-foreground uppercase">
                  Parameter
                </th>
                <th scope="col" className="mono px-6 py-4 text-[11px] font-normal tracking-widest text-primary uppercase">
                  SunXtender
                </th>
                <th scope="col" className="mono px-6 py-4 text-[11px] font-normal tracking-widest text-muted-foreground uppercase">
                  Chinese AGM
                </th>
                <th scope="col" className="mono px-6 py-4 text-[11px] font-normal tracking-widest text-muted-foreground uppercase">
                  LFP
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr
                  key={row.k}
                  className={`border-b border-border last:border-b-0 ${i % 2 === 1 ? "bg-background/40" : ""}`}
                >
                  <th scope="row" className="px-6 py-4 text-left text-sm font-normal text-muted-foreground">
                    {row.k}
                  </th>
                  <td className="mono px-6 py-4 text-sm text-foreground">
                    <span className="text-primary">■</span> {row.sx} {row.u}
                  </td>
                  <td className="mono px-6 py-4 text-sm text-muted-foreground">{row.cn} {row.u}</td>
                  <td className="mono px-6 py-4 text-sm text-muted-foreground">{row.lfp} {row.u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mono mt-6 text-[11px] tracking-wider text-muted-foreground uppercase">
          Ref · SX-DS-001 rev. 12 · full datasheet in Resources
        </p>
      </div>
    </section>
  );
}

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  return (
    <div className="bg-background px-6 py-8 md:px-10 md:py-12">
      <div className="mono text-4xl font-medium text-foreground tabular-nums sm:text-5xl md:text-6xl">
        {n.toLocaleString()}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">{label}</div>
    </div>
  );
}

/* ---------------------------- Product families ---------------------------- */

const FAMILY_META: Record<string, { name: string; cells: string }> = {
  "2V": { name: "PVX Single-Cell", cells: "Single-cell industrial" },
  "6V": { name: "Sun Xtender 6V", cells: "Deep-cycle golf / RE" },
  "12V": { name: "Sun Xtender 12V", cells: "Solar / backup / telecom" },
};

const FAMILIES = Array.from(
  PRODUCTS.reduce((map, p) => {
    if (p.volts == null) return map;
    const key = `${p.volts}V`;
    const entry = map.get(key) ?? { voltage: key, count: 0, min: Infinity, max: 0, terminals: new Set<string>() };
    entry.count += 1;
    if (p.headlineCapacityAh != null) {
      entry.min = Math.min(entry.min, p.headlineCapacityAh);
      entry.max = Math.max(entry.max, p.headlineCapacityAh);
    }
    if (p.terminal) entry.terminals.add(p.terminal);
    map.set(key, entry);
    return map;
  }, new Map<string, { voltage: string; count: number; min: number; max: number; terminals: Set<string> }>()).values(),
).sort((a, b) => parseFloat(a.voltage) - parseFloat(b.voltage));

function Families() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="products" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHead
          num="02"
          eyebrow="Product Families"
          title={
            <>
              Browse by voltage.
              <br />
              <span className="text-primary">Filter to the exact part.</span>
            </>
          }
        />

        <div ref={r.ref} className={`${r.className} mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3`}>
          {FAMILIES.map((f) => (
            <Link
              key={f.voltage}
              to="/products"
              search={{ volts: parseFloat(f.voltage) }}
              className="group flex flex-col justify-between border border-border bg-surface p-8 transition-colors hover:border-primary"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="mono text-6xl font-medium text-foreground group-hover:text-primary">
                    {f.voltage}
                  </span>
                  <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {f.count} models
                  </span>
                </div>
                <h3 className="mt-8 font-display text-xl">
                  {FAMILY_META[f.voltage]?.name ?? `Sun Xtender ${f.voltage}`}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {FAMILY_META[f.voltage]?.cells ?? "Deep-cycle AGM"}
                </p>
              </div>

              <dl className="mt-10 space-y-2 border-t border-border pt-6 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Capacity</dt>
                  <dd className="mono">
                    {f.min === Infinity
                      ? "—"
                      : `${f.min.toLocaleString()} – ${f.max.toLocaleString()} Ah`}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Terminals</dt>
                  <dd className="mono text-right">
                    {Array.from(f.terminals).join(" · ") || "—"}
                  </dd>
                </div>
              </dl>
            </Link>
          ))}
        </div>

        {/* Featured part numbers straight from the catalog — highlighted panel */}
        <div className="mt-16 border border-primary/40 bg-primary/[0.04] p-6 md:p-10">
          <div className="flex items-baseline justify-between gap-4">
            <div className="mono text-[11px] tracking-widest text-primary uppercase">
              02a · Featured Part Numbers
            </div>
            <Link
              to="/products"
              className="mono inline-flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              View all {PRODUCTS.length} models <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[...PRODUCTS]
              .sort((a, b) => a.sortOrder - b.sortOrder)
              .slice(0, 8)
              .map((p) => {
                const img = productImageUrl(p);
                return (
                  <Link
                    key={p.id}
                    to="/products/$sku"
                    params={{ sku: p.name }}
                    className="group flex flex-col border border-border bg-surface transition-colors hover:border-primary"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                      {img ? (
                        <img
                          src={img}
                          alt={`${p.name} AGM battery`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <BatteryPlaceholder label={p.name} />
                      )}
                      {p.isNew && (
                        <span className="mono absolute top-3 left-3 bg-primary px-2 py-1 text-[10px] font-semibold tracking-widest text-primary-foreground uppercase">
                          New
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-lg group-hover:text-primary">{p.name}</h3>
                        <span className="mono text-sm text-muted-foreground">
                          {p.volts != null ? `${p.volts}V` : "—"}
                        </span>
                      </div>


                      <dl className="mt-auto space-y-2 border-t border-border pt-4 text-sm">
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Capacity</dt>
                          <dd className="mono">
                            {p.headlineCapacityAh != null ? `${p.headlineCapacityAh} Ah` : "—"}
                          </dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Case</dt>
                          <dd className="mono">{p.caseSize || "—"}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                          <dt className="text-muted-foreground">Weight</dt>
                          <dd className="mono">
                            {p.weightLbs != null ? `${p.weightLbs} lbs` : "—"}
                          </dd>
                        </div>
                      </dl>

                      <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-wide text-primary uppercase">
                        View specs <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Find your battery entry point */}
        <div id="find" className="mt-10 flex flex-col items-start justify-between gap-6 border border-primary/40 bg-primary/[0.04] p-8 md:flex-row md:items-center">
          <div>
            <div className="mono text-[11px] tracking-widest text-primary uppercase">
              Tool · SX-SEL-1
            </div>
            <div className="mt-2 font-display text-2xl">Find Your Battery</div>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Filter the full catalog by voltage, Ah, terminal type, and application to
              produce a shortlist and matching datasheets.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground"
          >
            Open Selector <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Engineering / Mfg ---------------------------- */

const CONSTRUCTION_CALLOUTS = [
  { number: "01", title: "Grids", anchor: "grids", desc: "Low water-loss alloy..." },
  { number: "02", title: "Plates", anchor: "plates", desc: "High-density paste..." },
  { number: "03", title: "Absorbent Glass Mat (AGM) Separator", anchor: "agm-separator", desc: "Holds electrolyte..." },
  { number: "04", title: "Polyethylene Envelope", anchor: "polyethylene-envelope", desc: "Anti-short sleeve..." },
  { number: "05", title: "Intercell Connections", anchor: "intercell-connections", desc: "Welded low-loss straps..." },
  { number: "06", title: "High Impact, Reinforced Container & Cover", anchor: "container-and-cover", desc: "Impact-rated ABS case..." },
  { number: "07", title: "Cover-to-Container Seal", anchor: "cover-to-container-seal", desc: "Heat-welded seal..." },
  { number: "08", title: "Pressure Relief Safety Valve", anchor: "pressure-relief-safety-valve", desc: "Self-resealing valve..." },
  { number: "09", title: "Terminals", anchor: "terminals", desc: "Corrosion-resistant..." },
  { number: "10", title: "Handles", anchor: "handles", desc: "Reinforced for lifting..." },
];

function ConstructionCallout({
  item,
  side,
}: {
  item: (typeof CONSTRUCTION_CALLOUTS)[number];
  side: "left" | "right";
}) {
  return (
    <Link
      to="/technical/construction-and-design"
      hash={item.anchor}
      className={`group relative z-20 flex items-center gap-3 border-b border-border py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary first:border-t lg:border-0 lg:py-2 ${
          side === "left" ? "lg:text-right" : "lg:text-left"
        }`}
    >
      {side === "right" && (
        <span aria-hidden="true" className="relative -ml-2 hidden h-px min-w-6 flex-1 bg-primary/70 lg:block" />
      )}
      <div className="min-w-0 flex-1">
        <div className={`flex items-center gap-3 ${side === "left" ? "lg:justify-end" : ""}`}>
          <span className="mono text-[10px] text-primary">{item.number}</span>
          <span className="flex-1 text-xs font-semibold leading-5 uppercase transition-colors group-hover:text-primary">
            {item.title}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={1.5} />
        </div>
        <p className={`mt-0.5 line-clamp-1 text-[11px] leading-4 text-muted-foreground ${side === "left" ? "lg:text-right" : "lg:text-left"}`}>
          {item.desc}
        </p>
      </div>
      {side === "left" && (
        <span aria-hidden="true" className="relative -mr-2 hidden h-px min-w-6 flex-1 bg-primary/70 lg:block" />
      )}
    </Link>
  );
}

function Engineering() {
  const r = useReveal<HTMLDivElement>();
  const leftCallouts = CONSTRUCTION_CALLOUTS.slice(0, 5);
  const rightCallouts = CONSTRUCTION_CALLOUTS.slice(5);

  return (
    <section id="engineering" className="border-t border-border bg-background text-foreground dark:bg-black">
      <div className="container-x py-24 md:py-32">
        <SectionHead
          num="04"
          eyebrow="Engineering & Manufacturing"
          title={
            <>
              Engineered at every layer.
              <br />
              <span className="text-primary">Inspect the construction.</span>
            </>
          }
          lede="Select any component to view its full construction details."
        />

        <div ref={r.ref} className={`${r.className} mt-16`}>
          <figure className="mx-auto max-w-2xl lg:hidden">
            <div className="aspect-[4/3] overflow-hidden border-y border-border">
              <img
                src={constructionOutline.url}
                alt="Technical outline cutaway of a SunXtender AGM battery"
                width={1130}
                height={768}
                loading="lazy"
                className="h-full w-full object-contain dark:invert"
              />
            </div>
            <figcaption className="mono mt-3 text-center text-[10px] tracking-widest text-muted-foreground uppercase">
              Fig. 04.1 · AGM battery construction
            </figcaption>
          </figure>

          <div className="mt-10 grid grid-cols-1 gap-0 lg:mt-0 lg:grid-cols-[minmax(20rem,1.35fr)_minmax(15rem,1fr)_minmax(20rem,1.35fr)] lg:items-center lg:gap-0">
            <div className="flex flex-col justify-center gap-1 lg:py-7">
              {leftCallouts.map((item) => (
                <ConstructionCallout key={item.number} item={item} side="left" />
              ))}
            </div>

            <figure className="relative z-10 hidden self-center lg:block">
              <div className="aspect-[4/3] overflow-visible">
                <img
                  src={constructionOutline.url}
                  alt="Technical outline cutaway of a SunXtender AGM battery"
                  width={1130}
                  height={768}
                  loading="lazy"
                  className="h-full w-full origin-center scale-[1.25] object-contain dark:invert"
                />
              </div>
              <figcaption className="mono mt-14 text-center text-[10px] tracking-widest text-muted-foreground uppercase">
                Fig. 04.1 · AGM battery construction
              </figcaption>
            </figure>

            <div className="flex flex-col justify-center gap-1 lg:py-7">
              {rightCallouts.map((item) => (
                <ConstructionCallout key={item.number} item={item} side="right" />
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center border-t border-border pt-8">
            <Link
              to="/technical/construction-and-design"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              See full construction details
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Case studies ----------------------------- */

const CASES = [
  {
    img: caseTelecom,
    site: "Verizon backhaul site VZ-4127",
    place: "Sonoran Desert, AZ",
    metric: "11.2 years",
    metricLabel: "In service before replacement",
    copy: "Sealed cabinet, 52°C summer peaks. Original PVX-1080T bank replaced on schedule — no unplanned outage.",
  },
  {
    img: caseOffgrid,
    site: "Private residence, Sangre de Cristo Mts.",
    place: "Colorado · elev. 2,850 m",
    metric: "0 gen-hours",
    metricLabel: "Diesel generator use in Y3",
    copy: "48V bank paired to 14 kW PV. Deep winter cycling to 40% DoD, no capacity fade beyond spec through cycle 900.",
  },
  {
    img: caseUtility,
    site: "Municipal water utility",
    place: "Central Valley, CA",
    metric: "AS9100",
    metricLabel: "Same batteries certify aircraft",
    copy: "Substation SCADA backup — specified because the auditor accepted the aerospace pedigree without further qualification.",
  },
];

function Cases() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHead
          num="05"
          eyebrow="Proven in the Field"
          title={
            <>
              Deployed. Documented.
              <br />
              <span className="text-primary">Still running.</span>
            </>
          }
        />

        <div ref={r.ref} className={`${r.className} mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3`}>
          {CASES.map((c) => (
            <article key={c.site} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={c.img}
                  alt={c.site}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <div className="mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {c.place}
                </div>
                <h3 className="mt-2 font-display text-lg leading-snug">{c.site}</h3>
                <div className="mt-6 flex items-baseline gap-3 border-t border-border pt-4">
                  <span className="mono text-2xl text-primary">{c.metric}</span>
                  <span className="text-xs text-muted-foreground">{c.metricLabel}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Global map ------------------------------ */

function GlobalReach() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="distributors" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <div ref={r.ref} className={`${r.className} relative border border-primary/40 bg-primary/[0.04] p-8`}>
          <div className="mono text-[11px] tracking-widest text-primary uppercase">
            06 · Global Reach
          </div>
          <h2 className="mt-3 text-left font-display text-2xl leading-tight tracking-tight">
            Specified on six continents.{" "}
            <span className="text-primary">Delivered by local hands.</span>
          </h2>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="grid grid-cols-3 gap-8">
              <MapStat n="140+" l="Distributors" />
              <MapStat n="52" l="Countries" />
              <MapStat n="6" l="Continents" />
            </div>
            <Link
              to="/distributors"
              className="inline-flex w-full items-center justify-center gap-3 border border-border-strong px-6 py-4 text-sm font-medium tracking-wide uppercase transition-colors hover:border-primary hover:text-primary md:w-auto"
            >
              <MapPin className="h-4 w-4" strokeWidth={1.5} />
              Find a Distributor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapStat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="mono text-3xl text-foreground">{n}</div>
      <div className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{l}</div>
    </div>
  );
}

/* ----------------------------- Resources preview -------------------------- */

const RES_ICONS = [FileText, Ruler, BookOpen];
const RES_META = ["Documentation", "Web tool", "Documentation"];

function Resources() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="resources" className="border-t border-border">
      <div className="container-x py-24 md:py-32">
        <SectionHead
          num="07"
          eyebrow="Technical Resources"
          title={
            <>
              Documentation is one click away.
              <br />
              <span className="text-primary">Not buried three menus deep.</span>
            </>
          }
        />

        <div ref={r.ref} className={`${r.className} mt-16 grid grid-cols-1 gap-6 md:grid-cols-3`}>
          {TECHNICAL_MENU.slice(0, 3).map(({ label, to }, i) => {
            const Icon = RES_ICONS[i] ?? FileText;
            return (
              <Link
                key={to}
                to={to}
                className="group flex flex-col justify-between border border-border bg-surface p-8 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-7 w-7 text-foreground group-hover:text-primary" strokeWidth={1} />
                  <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {RES_META[i]}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-lg leading-snug">{label}</h3>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-wide text-primary uppercase">
                  Open <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/resources" className="mono text-xs tracking-widest text-muted-foreground uppercase hover:text-foreground">
            Enter Documentation Center →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Closing CTA ----------------------------- */

function Closing() {
  return (
    <section className="relative border-t border-border bg-surface">
      <div className="container-x py-24 md:py-36">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="mono text-[11px] tracking-widest text-primary uppercase">
              08 · Next step
            </div>
            <h2 className="mt-6 font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Specify the right battery,
              <br />
              or talk it through with the
              <br />
              <span className="text-primary">engineer who built it.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:col-span-5 sm:grid-cols-2">
            <Link
              to="/products"
              className="group flex flex-col justify-between gap-10 border border-border-strong bg-background p-6 transition-colors hover:border-primary"
            >
              <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Tool
              </span>
              <div>
                <div className="font-display text-lg">Find Your Battery</div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-wide text-primary uppercase">
                  Launch selector <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              </div>
            </Link>
            <Link
              to="/contact"
              className="group flex flex-col justify-between gap-10 border border-border-strong bg-background p-6 transition-colors hover:border-primary"
            >
              <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Direct
              </span>
              <div>
                <div className="font-display text-lg">Contact SunXtender</div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-wide text-primary uppercase">
                  Get in touch <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------------- Page ---------------------------------- */

function Home_() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AffiliationBar />
      <Nav overlay />

      <Hero />
      <TrustBar />
      <Applications />
      <Families />
      <AdvantageTable />
      <Engineering />
      <Cases />
      <GlobalReach />
      <Resources />
      <Closing />
      <Footer />
    </main>
  );
}

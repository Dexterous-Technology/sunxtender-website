import { createFileRoute, Link, useRouter } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/contact_/sitemap")({
  head: () => ({
    meta: [
      { title: "SunXtender Sitemap | SunXtender" },
      { name: "description", content: "Every page on the SunXtender website, organized by section." },
      { property: "og:title", content: "SunXtender Sitemap | SunXtender" },
      { property: "og:description", content: "Every page on the SunXtender website, organized by section." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SitemapPage,
});

// Friendly names for known pages. Any page not listed here still appears,
// named automatically from its web address.
const LABELS: Record<string, string> = {
  "/": "Home",
  "/applications/grid-tied": "Grid-Tied Systems",
  "/applications/off-grid-systems": "Off Grid Systems",
  "/applications/energy-storage-backup-power": "Energy Storage for Backup Power",
  "/applications/solar-street-lights": "Solar Street Lights",
  "/applications/smart-grid-systems": "Smart Grid Energy Systems",
  "/about/sun-xtender-vs-flooded": "Sun Xtender vs. Flooded",
  "/about/sun-xtender-vs-gel": "Sun Xtender vs. Gel",
  "/about/sun-xtender-vs-other-agm": "Sun Xtender vs. Other AGM",
  "/technical/iso-9001-as9100": "ISO 9001 + AS9100",
  "/technical/construction-and-design": "Battery Construction",
  "/technical/battery-sizing": "Battery Sizing",
  "/technical/battery-banks-installations": "Battery Banks & Installations",
  "/technical/sds": "SDS (PDF)",
  "/technical/eu-reach-article-33": "EU REACH Regulation - Article 33 Compliance (PDF)",
  "/technical/ir-iss-values": "IR & ISS Values",
  "/technical/electrolyte-content": "Electrolyte Content of Sun Xtender Batteries",
  "/technical/limited-warranty": "Sun Xtender Limited Warranty (PDF)",
  "/technical/warranty-claim-form": "Sun Xtender Warranty Claim Form (PDF)",
  "/products": "All Products (Battery Specifications)",
  "/products/why-sunxtender-batteries": "Why SunXtender Batteries?",
  "/terminal-options": "Terminal Options",
  "/resources": "Resources Overview",
  "/about/agm-media-center": "AGM Media Center",
  "/about": "About Us",
  "/about/press-releases": "Press Releases",
  "/about/press-releases/sun-xtender-launches-new-website": "Sun Xtender® Launches New Website at www.SunXtender.com",
  "/about/press-releases/new-higher-capacity-group-31-batteries": "New Higher Capacity Group 31 Batteries Released",
  "/about/press-releases/caltrans-specifies-sun-xtender": "Caltrans Specifies Sun Xtender",
  "/contact/faqs": "Frequently Asked Questions",
  "/contact/sitemap": "Sitemap",
  "/web-accessibility-statement": "Web Accessibility Statement",
  "/customer-service-policy": "Customer Service Policy",
};

const GROUPS = ["Home", "Applications", "Technology", "Products", "Resources", "Media", "Company", "Other"] as const;
type Group = (typeof GROUPS)[number];

function groupFor(path: string): Group {
  if (path === "/") return "Home";
  if (path.startsWith("/applications/")) return "Applications";
  if (path.startsWith("/about/sun-xtender-vs-") || path === "/technical/iso-9001-as9100" || path === "/technical/construction-and-design") return "Technology";
  if (path.startsWith("/products") || path === "/terminal-options" || path === "/technical/battery-sizing") return "Products";
  if (path.startsWith("/technical/") || path === "/resources") return "Resources";
  if (path === "/about/agm-media-center") return "Media";
  if (path.startsWith("/about") || path.startsWith("/contact") || path === "/distributors" || path === "/web-accessibility-statement" || path === "/customer-service-policy") return "Company";
  return "Other";
}

function autoLabel(path: string) {
  const last = path.split("/").filter(Boolean).pop() ?? "";
  return last.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

type Entry = { key: string; label: string; to: string; params?: Record<string, string>; search?: Record<string, number>; indent?: boolean };

function useSitemap() {
  const router = useRouter();
  const paths = new Set<string>();
  for (const r of Object.values(router.routesById) as { fullPath?: string }[]) {
    if (!r.fullPath) continue;
    // URL form: drop pathless "_" markers and trailing slashes
    const url = r.fullPath.replace(/\/$/, "") || "/";
    if (url.includes("/api")) continue;
    paths.add(url);
  }

  const groups = new Map<Group, Entry[]>(GROUPS.map((g) => [g, []]));
  const sorted = [...paths].sort();
  for (const path of sorted) {
    if (path.includes("$")) continue; // expanded below
    groups.get(groupFor(path))!.push({ key: path, label: LABELS[path] ?? autoLabel(path), to: path, indent: path.startsWith("/about/press-releases/") });
  }

  const products = groups.get("Products")!;
  // Voltage views of the catalog, placed right after All Products
  const at = products.findIndex((e) => e.to === "/products") + 1;
  products.splice(
    at,
    0,
    ...[2, 6, 12].map((v) => ({ key: `volts-${v}`, label: `${v} Volt Batteries`, to: "/products", search: { volts: v }, indent: true })),
  );
  if (paths.has("/products/$sku")) {
    for (const p of PRODUCTS) {
      products.push({ key: `sku-${p.name}`, label: p.name, to: "/products/$sku", params: { sku: p.name }, indent: true });
    }
  }
  // Keep Press Releases children right after their index
  const company = groups.get("Company")!;
  company.sort((a, b) => {
    const rank = (e: Entry) => (e.to.startsWith("/about/press-releases") ? 1 : e.to === "/about" ? 0 : 2);
    return rank(a) - rank(b);
  });
  return GROUPS.map((g) => [g, groups.get(g)!] as const).filter(([, e]) => e.length > 0);
}

function SitemapPage() {
  const groups = useSitemap();
  return (
    <PageShell eyebrow="Contact" title="SunXtender Sitemap">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([group, entries]) => (
          <section key={group} aria-labelledby={`sm-${group}`}>
            <h2 id={`sm-${group}`} className="border-b border-border pb-3 font-display text-lg font-semibold tracking-tight">
              {group}
            </h2>
            <ul className="mt-4 space-y-2">
              {entries.map((e) => (
                <li key={e.key} className={e.indent ? "border-l border-border pl-4" : undefined}>
                  <Link
                    to={e.to as "/"}
                    params={e.params as never}
                    search={e.search as never}
                    className="text-sm text-muted-foreground underline-offset-2 transition-colors hover:text-primary hover:underline"
                  >
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

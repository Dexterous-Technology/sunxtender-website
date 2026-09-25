import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import { PageShell } from "@/components/page-shell";

type Distributor = {
  name: string;
  region: string;
  phone: string;
  website: string;
};

const DISTRIBUTORS: Distributor[] = [
  { name: "Advanced Power Products", region: "CA", phone: "(909) 599-7319", website: "www.advancedpowerproducts.com" },
  { name: "Alte Store", region: "MA", phone: "", website: "https://www.altestore.com" },
  { name: "BatteryGuys.com", region: "AZ", phone: "(800) 350-8101", website: "www.batteryguys.com" },
  { name: "BD Batteries", region: "CA", phone: "949-722-1027", website: "bdbatteries.com" },
  { name: "Centex Batteries, LLC", region: "TX", phone: "903-603-6007", website: "www.centexbatteries.com" },
  { name: "Copperstate Battery", region: "AZ", phone: "(623) 907-2255", website: "www.copperstatebattery.com" },
  { name: "DC Battery Specialists", region: "FL", phone: "(305) 758-5041", website: "www.dcbattery.com" },
  { name: "ED's BATTERIES", region: "ME", phone: "(207) 854-9418", website: "edsbatteries.com" },
  { name: "Gylling Teknikk AS", region: "Norway", phone: "+47 67151400", website: "www.gylling.no/index.shtml" },
  { name: "ImpactBattery.com", region: "KY", phone: "1-866-668-3163", website: "www.impactbattery.com" },
  { name: "Nisco Corporation Co., Ltd.", region: "Japan", phone: "(81) 462280291", website: "www.battery.co.jp/" },
  { name: "RFI Solar", region: "Australia", phone: "+61 2 8814 2300", website: "www.rfi.com.au/" },
  { name: "Sunwind Gylling AS", region: "Norway", phone: "(47) 67171370", website: "www.sunwind.no/" },
  { name: "Sunwize Power & Battery", region: "OR", phone: "866-827-6527", website: "www.sunwizepower.com" },
  { name: "Total Battery", region: "Ontario, Canada", phone: "613-747-2666", website: "www.totalbattery.com" },
  { name: "Total Battery", region: "Ontario, Canada", phone: "613-225-1888", website: "www.totalbattery.com" },
  { name: "Total Battery", region: "Ontario, Canada", phone: "705-726-6660", website: "www.totalbattery.com" },
  { name: "Total Battery", region: "Ontario, Canada", phone: "613-735-8860", website: "www.totalbattery.com" },
  { name: "Total Battery", region: "Ontario, Canada", phone: "613-836-0000", website: "www.totalbattery.com" },
];

function hrefFor(website: string) {
  return website.startsWith("http") ? website : `https://${website}`;
}

const DESCRIPTION =
  "Search the list of Sun Xtender® Battery approved distributors by name, state or country, phone number or website.";

export const Route = createFileRoute("/distributors")({
  head: () => ({
    meta: [
      { title: "Approved Distributors | Sun Xtender®" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Approved Distributors | Sun Xtender®" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DistributorsPage,
});

function DistributorsPage() {
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DISTRIBUTORS;
    return DISTRIBUTORS.filter((d) =>
      `${d.name} ${d.region} ${d.phone} ${d.website}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <PageShell eyebrow="Global Reach" title="Sun Xtender® Battery Approved Distributors">
      <div className="flex w-full max-w-md items-center gap-0 border border-border bg-surface focus-within:border-primary">
        <Search className="ml-4 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={2} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search distributors"
          aria-label="Search distributors by name, state or country, phone number or website"
          className="w-full bg-transparent px-3 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>

      <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">
        Showing {rows.length} of {DISTRIBUTORS.length} distributors
      </p>

      <div className="mt-6 w-full overflow-x-auto border border-border">
        <table className="w-full min-w-[44rem] border-collapse text-sm">
          <caption className="sr-only">Sun Xtender® Battery approved distributors</caption>
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground">
                Distributor Name
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground">
                State/Country
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground">
                Phone Number
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-foreground">
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr
                key={`${d.name}-${d.phone}-${d.website}`}
                className="border-b border-border last:border-b-0 even:bg-muted/20"
              >
                <th scope="row" className="px-4 py-3 text-left align-top text-sm font-medium text-foreground">
                  {d.name}
                </th>
                <td className="px-4 py-3 align-top text-sm text-muted-foreground">{d.region}</td>
                <td className="mono px-4 py-3 align-top text-sm text-muted-foreground">{d.phone}</td>
                <td className="px-4 py-3 align-top text-sm">
                  <a
                    href={hrefFor(d.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:opacity-80"
                  >
                    {d.website}
                  </a>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No matching distributors.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}

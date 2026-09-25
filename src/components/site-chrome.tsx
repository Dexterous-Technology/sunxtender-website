import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Moon, Search, Sun } from "lucide-react";

import logoAsset from "@/assets/sunxtender-logo.png.asset.json";
import concordeLogo from "@/assets/concorde-logo.png";
import concordeLogoWhite from "@/assets/concorde-logo-white.png";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("sx-theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className="inline-flex h-9 w-9 items-center justify-center border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {dark ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      )}
    </button>
  );
}

export function AffiliationBar() {
  return (
    <div className="relative z-50 w-full border-b border-border bg-[#f5f6f8] dark:bg-surface">
      <div className="container-x flex h-9 items-center justify-center gap-2">
        <a
          href="https://concordebattery.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>SunXtender is a Concorde Battery Corporation company</span>
          <img
            src={concordeLogo}
            alt="Concorde Battery Corporation"
            loading="lazy"
            width={1194}
            height={241}
            className="w-[110px] h-auto dark:hidden"
          />
          <img
            src={concordeLogoWhite}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1194}
            height={241}
            className="hidden w-[110px] h-auto opacity-80 dark:block"
          />
        </a>
      </div>
    </div>
  );
}

const NAV_LINKS = ["Products", "Applications", "Resources", "About", "Contact", "Distributors"];

export const TECHNICAL_MENU: { label: string; to: string }[] = [
  { label: "Technical Data", to: "/technical/technical-data" },
  { label: "Technical Manual", to: "/technical/technical-manual" },
  { label: "Battery Sizing", to: "/technical/battery-sizing" },
  { label: "Battery Banks & Installations", to: "/technical/battery-banks-installations" },
  { label: "SDS (PDF)", to: "/technical/sds" },
  {
    label: "EU REACH Regulation - Article 33 Compliance (PDF)",
    to: "/technical/eu-reach-article-33",
  },
  { label: "Transportation", to: "/technical/transportation" },
  { label: "ISO 9001 + AS9100", to: "/technical/iso-9001-as9100" },
  { label: "IR & ISS Values", to: "/technical/ir-iss-values" },
  {
    label: "Electrolyte Content of Sun Xtender Batteries",
    to: "/technical/electrolyte-content",
  },
  { label: "Sun Xtender Limited Warranty (PDF)", to: "/technical/limited-warranty" },
  {
    label: "Sun Xtender Warranty Claim Form (PDF)",
    to: "/technical/warranty-claim-form",
  },
];

const ABOUT_MENU: { label: string; to?: string; href?: string }[] = [
  { label: "About us", to: "/about" },
  { label: "Sun Xtender vs. Flooded", to: "/about/sun-xtender-vs-flooded" },
  { label: "Sun Xtender vs. Gel", to: "/about/sun-xtender-vs-gel" },
  { label: "Sun Xtender vs. Other AGM", to: "/about/sun-xtender-vs-other-agm" },
  { label: "AGM Media Center", to: "/about/agm-media-center" },
  { label: "Press Releases", to: "/about/press-releases" },
  { label: "FAQs", to: "/contact/faqs" },
];



const PRODUCT_MENU: { label: string; to: string }[] = [
  { label: "All Products", to: "/products" },
  { label: "Why SunXtender Batteries?", to: "/products/why-sunxtender-batteries" },
  { label: "Terminal Options", to: "/terminal-options" },
  { label: "Battery Construction", to: "/technical/construction-and-design" },
];

const APPLICATION_MENU: { label: string; to: string }[] = [
  { label: "Grid Tied", to: "/applications/grid-tied" },
  { label: "Off Grid System", to: "/applications/off-grid-systems" },
  {
    label: "Energy Storage for Backup Power",
    to: "/applications/energy-storage-backup-power",
  },
  { label: "Solar Street Lights", to: "/applications/solar-street-lights" },
  { label: "Smart Grid Systems", to: "/applications/smart-grid-systems" },
];

function NavDropdown({
  label,
  to,
  items,
  wide = false,
}: {
  label: string;
  to: string;
  items: { label: string; to?: string; href?: string }[];
  wide?: boolean;
}) {
  return (
    <div className="group relative">
      <Link
        to={to}
        className="inline-flex items-center gap-1 py-5 text-sm text-muted-foreground transition-colors hover:text-foreground group-focus-within:text-foreground"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.5} />
      </Link>
      <div
        className={`pointer-events-none invisible absolute left-0 top-full z-50 ${
          wide ? "w-80" : "w-64"
        } border border-border bg-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 dark:bg-surface`}
      >
        {items.map((item) =>
          item.href ? (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border px-4 py-3 text-sm text-muted-foreground transition-colors last:border-b-0 hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.to}
              to={item.to!}
              className="block border-b border-border px-4 py-3 text-sm text-muted-foreground transition-colors last:border-b-0 hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export function Nav({ overlay = false }: { overlay?: boolean }) {
  const anchor = (l: string) => (overlay ? `#${l.toLowerCase()}` : `/#${l.toLowerCase()}`);
  return (
    <header
      className={`${
        overlay ? "absolute inset-x-0 top-9" : "sticky top-0"
      } z-40 bg-white text-foreground backdrop-blur-md border-b border-border dark:bg-background/80`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="SunXtender home">
          <img
            src={logoAsset.url}
            alt="SunXtender — the heart of your renewable energy system"
            className="h-7 w-auto md:h-8"
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) =>
            l === "Products" ? (
              <NavDropdown key={l} label={l} to="/products" items={PRODUCT_MENU} />
            ) : l === "Applications" ? (
              <NavDropdown key={l} label={l} to="/applications/grid-tied" items={APPLICATION_MENU} />
            ) : l === "Resources" ? (
              <NavDropdown key={l} label={l} to="/resources" items={TECHNICAL_MENU} wide />
            ) : l === "About" ? (
              <NavDropdown
                key={l}
                label={l}
                to="/about"
                items={ABOUT_MENU}
              />
            ) : l === "Contact" ? (
              <Link
                key={l}
                to="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </Link>
            ) : l === "Distributors" ? (
              <Link
                key={l}
                to="/distributors"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </Link>
            ) : (
              <a
                key={l}
                href={anchor(l)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/products"
            aria-label="Find your battery"
            className="inline-flex h-9 items-center gap-2 border border-border-strong px-3 text-xs font-medium tracking-wide uppercase transition-colors hover:border-primary hover:text-primary min-[1600px]:py-2"
          >
            <Search className="h-4 w-4 shrink-0" strokeWidth={1.5} />
            <span className="hidden min-[1600px]:inline">Find Your Battery</span>
          </Link>
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="SunXtender logo" className="h-6 w-auto" />
          <span className="mono text-[11px] tracking-widest text-muted-foreground uppercase">
            SunXtender · Concorde Battery Corp. · Est. 1987
          </span>
        </div>
        <div className="mono text-[11px] tracking-widest text-muted-foreground uppercase">
          West Covina, CA · Made in USA
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <a
            href="https://concordebattery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] text-muted-foreground opacity-80 transition-opacity hover:opacity-100"
          >
            <span>SunXtender is proudly manufactured by Concorde Battery Corporation</span>
            <img
              src={concordeLogo}
              alt="Concorde Battery Corporation"
              loading="lazy"
              width={1194}
              height={241}
              className="w-[110px] h-auto dark:hidden"
            />
            <img
              src={concordeLogoWhite}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1194}
              height={241}
              className="hidden w-[110px] h-auto dark:block"
            />
          </a>
          <nav
            aria-label="Footer policies"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            <Link
              to="/web-accessibility-statement"
              className="text-[11px] text-muted-foreground transition-colors hover:text-primary"
            >
              Web Accessibility Statement
            </Link>
            <Link
              to="/customer-service-policy"
              className="text-[11px] text-muted-foreground transition-colors hover:text-primary"
            >
              Customer Service Policy
            </Link>
            <Link
              to="/contact/sitemap"
              className="text-[11px] text-muted-foreground transition-colors hover:text-primary"
            >
              SunXtender Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

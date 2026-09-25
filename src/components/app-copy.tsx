import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

const linkCls = "text-primary underline underline-offset-2 hover:opacity-80";

export function CopyP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-muted-foreground first:mt-0">{children}</p>;
}

export function VoltLink({ volts, children }: { volts: number; children: ReactNode }) {
  return (
    <Link to="/products" search={{ volts }} className={linkCls}>
      {children}
    </Link>
  );
}

export function CatalogLink({ children }: { children: ReactNode }) {
  return (
    <Link to="/products" className={linkCls}>
      {children}
    </Link>
  );
}

export function SizingLink({ children }: { children: ReactNode }) {
  return (
    <Link to="/technical/battery-sizing" className={linkCls}>
      {children}
    </Link>
  );
}

export function IsoLink({ children }: { children: ReactNode }) {
  return (
    <Link to="/technical/iso-9001-as9100" className={linkCls}>
      {children}
    </Link>
  );
}

export function SpecsParagraph() {
  return (
    <CopyP>
      A wide variety of sizes and capacities in <VoltLink volts={2}>2 Volt</VoltLink>,{" "}
      <VoltLink volts={6}>6 Volt</VoltLink> and <VoltLink volts={12}>12 Volt</VoltLink> configurations
      are available, including many configurations and layouts which are exclusive to Sun Xtender®.
      For more information please refer to the <CatalogLink>battery specifications page</CatalogLink>.
    </CopyP>
  );
}

export function ComparisonTable({ caption, headers, rows, centerHeaders = false }: { caption: string; headers: string[]; rows: string[][]; centerHeaders?: boolean }) {
  return (
    <figure className="mt-8">
      <div className="w-full overflow-x-auto border border-border">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-border bg-muted/50">
              {headers.map((h) => (
                <th key={h} scope="col" className={`px-4 py-3 align-bottom text-xs font-semibold ${centerHeaders ? "text-center" : "text-left"} tracking-wide text-foreground`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-border last:border-b-0 even:bg-muted/20">
                <th scope="row" className="px-4 py-3 text-left align-top text-sm font-medium text-foreground">{row[0]}</th>
                {row.slice(1).map((cell, i) => (
                  <td key={i} className="px-4 py-3 align-top text-sm leading-relaxed text-muted-foreground">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

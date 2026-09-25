import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { TECHNICAL_MENU } from "@/components/site-chrome";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resources | SunXtender" },
      {
        name: "description",
        content:
          "Technical manuals, sizing guides, certifications, warranty documents and other resources for Sun Xtender AGM batteries.",
      },
      { property: "og:title", content: "Resources | SunXtender" },
      {
        property: "og:description",
        content:
          "Technical manuals, sizing guides, certifications, warranty documents and other resources for Sun Xtender AGM batteries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Technical Resources"
      subtitle="Manuals, sizing guidance, certifications and warranty documentation for Sun Xtender AGM batteries. Select a resource below to continue."
    >
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {TECHNICAL_MENU.map((item, i) => (
          <Link
            key={item.to}
            to={item.to}
            className="group flex min-h-[140px] flex-col justify-between bg-background p-6 transition-colors hover:bg-primary/5"
          >
            <span className="mono text-[10px] tracking-widest text-muted-foreground uppercase">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-6 flex items-start justify-between gap-4">
              <span className="text-sm font-medium leading-snug text-foreground">
                {item.label}
              </span>
              <ArrowUpRight
                className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                strokeWidth={1.5}
              />
            </span>
          </Link>
        ))}
        {Array.from({ length: (3 - (TECHNICAL_MENU.length % 3)) % 3 }).map(
          (_, f) => (
            <div
              key={`filler-${f}`}
              aria-hidden
              className="min-h-[1px] bg-background"
            />
          ),
        )}
      </div>
    </PageShell>
  );
}

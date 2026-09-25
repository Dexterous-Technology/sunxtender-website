import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import manualPdf from "@/assets/sun-xtender-technical-manual.pdf.asset.json";

export const Route = createFileRoute("/technical/technical-manual")({
  head: () => ({
    meta: [
      { title: "Technical Manual | SunXtender" },
      { name: "description", content: "Service and installation manual for Sun Xtender AGM batteries." },
      { property: "og:title", content: "Technical Manual | SunXtender" },
      { property: "og:description", content: "Service and installation manual for Sun Xtender AGM batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow={"Technical"}
      title={"Technical Manual"}
      subtitle="Service and installation manual for Sun Xtender AGM batteries."
    >
      <div className="flex flex-col items-center text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Concorde Battery's team of engineers are continuously developing the
            safest and most effective way to utilize and maximize the quality of
            your Sun Xtender batteries. Please check back frequently for the most
            up-to-date information on installation, maintenance, configuration
            and safety.
          </p>

          <div className="mono mt-10 text-[11px] tracking-widest text-muted-foreground uppercase">
            Sun Xtender Technical Manual
          </div>
        </div>

        <div className="mt-6 w-full border border-border bg-card shadow-sm">
          <object
            data={manualPdf.url}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Sun Xtender Technical Manual PDF preview"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <FileText className="h-8 w-8 text-muted-foreground/60" aria-hidden="true" />
              <p className="text-xs text-muted-foreground">
                Your browser can&apos;t display the PDF inline.
              </p>
            </div>
          </object>
        </div>

        <a
          href={manualPdf.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm underline decoration-1 underline-offset-4 transition-colors hover:text-primary"
        >
          Open or download the PDF
          <FileText className="h-4 w-4 text-primary" aria-hidden="true" />
        </a>
      </div>
    </PageShell>
  ),
});

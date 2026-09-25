import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import documentPdf from "@/assets/documents/Sun_Xtender_Limited_Warranty_6331-WT.pdf.asset.json";

export const Route = createFileRoute("/technical/limited-warranty")({
  head: () => ({
    meta: [
      { title: "Sun Xtender Limited Warranty (PDF) | SunXtender" },
      { name: "description", content: "Limited warranty terms for Sun Xtender deep-cycle AGM batteries." },
      { property: "og:title", content: "Sun Xtender Limited Warranty (PDF) | SunXtender" },
      { property: "og:description", content: "Limited warranty terms for Sun Xtender deep-cycle AGM batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="Sun Xtender Limited Warranty (PDF)"
      subtitle="Limited warranty terms for Sun Xtender deep-cycle AGM batteries."
    >
      <PdfPreview url={documentPdf.url} title="Sun Xtender Limited Warranty" />
    </PageShell>
  ),
});

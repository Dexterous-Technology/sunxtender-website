import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import documentPdf from "@/assets/documents/sds.pdf.asset.json";

export const Route = createFileRoute("/technical/sds")({
  head: () => ({
    meta: [
      { title: "SDS (PDF) | SunXtender" },
      { name: "description", content: "Safety Data Sheet for Sun Xtender VRLA-AGM batteries." },
      { property: "og:title", content: "SDS (PDF) | SunXtender" },
      { property: "og:description", content: "Safety Data Sheet for Sun Xtender VRLA-AGM batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="SDS (PDF)"
      subtitle="Safety Data Sheet for Sun Xtender VRLA-AGM batteries."
    >
      <PdfPreview url={documentPdf.url} title="Sun Xtender Safety Data Sheet" />
    </PageShell>
  ),
});

import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import documentPdf from "@/assets/documents/SunXtender_REACH_Compliance.pdf.asset.json";

export const Route = createFileRoute("/technical/eu-reach-article-33")({
  head: () => ({
    meta: [
      { title: "EU REACH Regulation - Article 33 Compliance (PDF) | SunXtender" },
      { name: "description", content: "EU REACH Article 33 compliance statement for Sun Xtender batteries." },
      { property: "og:title", content: "EU REACH Regulation - Article 33 Compliance (PDF) | SunXtender" },
      { property: "og:description", content: "EU REACH Article 33 compliance statement for Sun Xtender batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="EU REACH Regulation - Article 33 Compliance (PDF)"
      subtitle="EU REACH Article 33 compliance statement for Sun Xtender batteries."
    >
      <PdfPreview url={documentPdf.url} title="Sun Xtender EU REACH Compliance" />
    </PageShell>
  ),
});

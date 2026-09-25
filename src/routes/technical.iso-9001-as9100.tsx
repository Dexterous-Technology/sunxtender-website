import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import certificationPdf from "@/assets/iso-9001-as9100.pdf.asset.json";

export const Route = createFileRoute("/technical/iso-9001-as9100")({
  head: () => ({
    meta: [
      { title: "ISO 9001 + AS9100 (PDF) | SunXtender" },
      { name: "description", content: "Quality management certifications held by Concorde Battery Corporation." },
      { property: "og:title", content: "ISO 9001 + AS9100 (PDF) | SunXtender" },
      { property: "og:description", content: "Quality management certifications held by Concorde Battery Corporation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="ISO 9001 + AS9100"
      subtitle="Quality management certifications held by Concorde Battery Corporation."
    >
      <PdfPreview url={certificationPdf.url} title="ISO 9001 + AS9100 certifications" />
    </PageShell>
  ),
});

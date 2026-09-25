import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import documentPdf from "@/assets/documents/Sun_Xtender_Limited_Warranty_Claim_Form.pdf.asset.json";

export const Route = createFileRoute("/technical/warranty-claim-form")({
  head: () => ({
    meta: [
      { title: "Sun Xtender Warranty Claim Form (PDF) | SunXtender" },
      { name: "description", content: "Editable warranty claim form for Sun Xtender batteries." },
      { property: "og:title", content: "Sun Xtender Warranty Claim Form (PDF) | SunXtender" },
      { property: "og:description", content: "Editable warranty claim form for Sun Xtender batteries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="Sun Xtender Warranty Claim Form (PDF)"
      subtitle="Editable warranty claim form for Sun Xtender batteries."
    >
      <PdfPreview url={documentPdf.url} title="Sun Xtender Warranty Claim Form" />
    </PageShell>
  ),
});

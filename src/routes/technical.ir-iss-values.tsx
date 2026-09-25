import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import valuesPdf from "@/assets/ir-iss-values.pdf.asset.json";

export const Route = createFileRoute("/technical/ir-iss-values")({
  head: () => ({
    meta: [
      { title: "IR & ISS Values (PDF) | SunXtender" },
      { name: "description", content: "Internal resistance and short circuit current values by part number." },
      { property: "og:title", content: "IR & ISS Values (PDF) | SunXtender" },
      { property: "og:description", content: "Internal resistance and short circuit current values by part number." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="IR & ISS Values"
      subtitle="Internal resistance and short circuit current values by part number."
    >
      <PdfPreview url={valuesPdf.url} title="IR & ISS Values" />
    </PageShell>
  ),
});

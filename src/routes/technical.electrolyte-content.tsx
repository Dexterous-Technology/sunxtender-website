import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PdfPreview } from "@/components/pdf-preview";
import electrolytePdf from "@/assets/electrolyte-content.pdf.asset.json";

export const Route = createFileRoute("/technical/electrolyte-content")({
  head: () => ({
    meta: [
      { title: "Electrolyte Content of Sun Xtender Batteries (PDF) | SunXtender" },
      { name: "description", content: "Electrolyte content data for the Sun Xtender AGM range." },
      { property: "og:title", content: "Electrolyte Content of Sun Xtender Batteries (PDF) | SunXtender" },
      { property: "og:description", content: "Electrolyte content data for the Sun Xtender AGM range." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Technical"
      title="Electrolyte Content of Sun Xtender Batteries"
      subtitle="Electrolyte content data for the Sun Xtender AGM range."
    >
      <PdfPreview url={electrolytePdf.url} title="Electrolyte Content of Sun Xtender Batteries" />
    </PageShell>
  ),
});

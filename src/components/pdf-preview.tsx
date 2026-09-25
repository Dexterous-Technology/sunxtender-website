export function PdfPreview({ url, title }: { url: string; title: string }) {
  return (
    <object
      data={url}
      type="application/pdf"
      aria-label={`${title} PDF preview`}
      className="h-[80vh] w-full border border-border bg-background"
    >
      <p className="p-6 text-sm text-muted-foreground">
        Your browser cannot display this PDF inline. You can{" "}
        <a href={url} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">
          open it in a new tab
        </a>
        .
      </p>
    </object>
  );
}
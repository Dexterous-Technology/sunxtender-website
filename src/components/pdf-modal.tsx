import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function PdfModal({
  open,
  onOpenChange,
  url,
  title,
  fileName,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  url: string;
  title: string;
  fileName: string;
}) {
  const [canEmbed, setCanEmbed] = useState(true);

  useEffect(() => {
    if (!open) return;
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
    setCanEmbed(!mobile);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-label={title}
        className="flex h-[90vh] max-h-[90vh] w-[min(1100px,95vw)] max-w-[95vw] flex-col gap-0 overflow-hidden border border-border bg-background p-0 sm:rounded-none"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 pr-14">
          <DialogTitle className="mono text-[12px] tracking-widest uppercase">{title}</DialogTitle>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border-strong px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface"
            >
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} /> Open in new tab
            </a>
            <a
              href={url}
              download={fileName}
              className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              <Download className="h-3.5 w-3.5" strokeWidth={2} /> Download
            </a>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-surface">
          {canEmbed ? (
            <object data={url} type="application/pdf" aria-label={`${title} preview`} className="h-full w-full">
              <PdfFallback url={url} title={title} fileName={fileName} />
            </object>
          ) : (
            <PdfFallback url={url} title={title} fileName={fileName} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PdfFallback({ url, title, fileName }: { url: string; title: string; fileName: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
      <p className="font-display text-xl">{title}</p>
      <p className="max-w-sm text-sm text-muted-foreground">
        This document can’t be displayed inside this window on your device.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          <ExternalLink className="h-4 w-4" strokeWidth={2} /> Open PDF
        </a>
        <a
          href={url}
          download={fileName}
          className="inline-flex items-center gap-2 border border-border-strong px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface"
        >
          <Download className="h-4 w-4" strokeWidth={2} /> Download PDF
        </a>
      </div>
    </div>
  );
}

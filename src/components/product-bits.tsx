import { useEffect } from "react";
import { X } from "lucide-react";

import type { Product } from "@/data/products";
import { PRODUCT_IMAGES, GRAPH_IMAGE_URL } from "@/data/product-images";
import { DRAWING_IMAGES, TERMINAL_IMAGES } from "@/data/product-diagrams";

/** Battery spec PDFs are not bundled with the site yet. */
const AVAILABLE_PDFS = new Set<string>();

export function productImageUrl(p: Product): string | null {
  const file = p.thumb ?? p.image;
  if (!file) return null;
  return PRODUCT_IMAGES[file] ?? null;
}

export const graphImageUrl = GRAPH_IMAGE_URL;

export function drawingImageUrl(p: Product): string | null {
  return DRAWING_IMAGES[p.name.trim().toUpperCase()] ?? null;
}

export function terminalImageUrl(p: Product): string | null {
  return TERMINAL_IMAGES[p.name.trim().toUpperCase()] ?? null;
}

export function specSheetUrl(p: Product): string | null {
  if (!p.specSheet || !AVAILABLE_PDFS.has(p.specSheet)) return null;
  return `/assets/pdfs/${p.specSheet}`;
}

/** Geometric placeholder used when no product photo is available. */
export function BatteryPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface">
      <svg viewBox="0 0 160 120" className="h-2/3 w-2/3" role="img" aria-label={`${label} battery`}>
        <rect
          x="24"
          y="28"
          width="112"
          height="76"
          className="fill-background stroke-border-strong"
          strokeWidth="2"
        />
        <rect x="44" y="18" width="16" height="10" className="fill-border-strong" />
        <rect x="100" y="18" width="16" height="10" className="fill-primary" />
        <line x1="24" y1="48" x2="136" y2="48" className="stroke-border" strokeWidth="2" />
        <text
          x="80"
          y="80"
          textAnchor="middle"
          className="fill-muted-foreground"
          style={{ font: "500 11px ui-monospace, monospace", letterSpacing: "0.12em" }}
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

/** Full-size lightbox for product imagery. */
export function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center border border-white/30 text-white hover:bg-white/10"
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[95vw] object-contain"
      />
    </div>
  );
}

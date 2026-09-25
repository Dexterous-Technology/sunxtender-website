import { useEffect, useRef, useState } from "react";

import { PRODUCT_VIEW_IMAGES } from "@/data/product-views";

const VIEW_LABELS = ["Left view", "Middle view", "Right view"];

export function CatalogProductViewer({ sku }: { sku: string }) {
  const anchors = PRODUCT_VIEW_IMAGES[sku];
  const frames = anchors ? [anchors.left, anchors.middle, anchors.right] : [];
  const [frame, setFrame] = useState(1);
  const pointerStart = useRef(0);
  const activePointer = useRef<number | null>(null);
  const dragged = useRef(false);

  useEffect(() => {
    frames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, [frames]);

  if (!anchors || frames.length === 0) return null;

  const maxFrame = frames.length - 1;
  const viewName = VIEW_LABELS[frame];

  const setFromPosition = (clientX: number, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setFrame(Math.round(progress * maxFrame));
  };

  return (
    <div
      role="slider"
      tabIndex={0}
      aria-label={`${sku} horizontal battery view`}
      aria-valuemin={1}
      aria-valuemax={frames.length}
      aria-valuenow={frame + 1}
      aria-valuetext={viewName}
      className="relative h-full w-full cursor-ew-resize touch-pan-y overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      onPointerDown={(event) => {
        pointerStart.current = event.clientX;
        activePointer.current = event.pointerId;
        dragged.current = false;
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Synthetic pointer events may not create a capturable browser pointer.
        }
      }}
      onPointerMove={(event) => {
        if (activePointer.current === event.pointerId) {
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 5) dragged.current = true;
          setFromPosition(event.clientX, event.currentTarget);
          return;
        }
        if (event.pointerType === "mouse") {
          setFromPosition(event.clientX, event.currentTarget);
        }
      }}
      onPointerUp={(event) => {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
        activePointer.current = null;
      }}
      onPointerCancel={() => {
        activePointer.current = null;
      }}
      onClickCapture={(event) => {
        if (dragged.current) {
          event.preventDefault();
          event.stopPropagation();
          dragged.current = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        event.stopPropagation();
        setFrame((current) =>
          Math.max(0, Math.min(maxFrame, current + (event.key === "ArrowRight" ? 1 : -1))),
        );
      }}
    >
      {frames.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={index === frame ? `${sku} AGM battery, ${viewName.toLowerCase()}` : ""}
          aria-hidden={index !== frame}
          draggable={false}
          loading={index === frame ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full select-none object-cover transition-opacity duration-150 ${
            index === frame ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
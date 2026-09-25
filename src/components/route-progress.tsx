import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

/**
 * Thin top-of-viewport progress bar shown during route transitions.
 */
export function RouteProgress() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" || s.isLoading });
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    if (isLoading) {
      setVisible(true);
      setProgress(8);
      timers.current.push(setTimeout(() => setProgress(45), 60));
      timers.current.push(setTimeout(() => setProgress(75), 300));
      timers.current.push(setTimeout(() => setProgress(90), 800));
    } else if (visible) {
      setProgress(100);
      timers.current.push(
        setTimeout(() => {
          setVisible(false);
          setProgress(0);
        }, 220),
      );
    }

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-0.5"
    >
      <div
        className="h-full bg-primary transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%`, opacity: progress === 100 ? 0 : 1 }}
      />
    </div>
  );
}

/** Centered spinner used while a route's content is still resolving. */
export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center bg-background">
      <div
        role="status"
        aria-label="Loading"
        className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary"
      />
    </div>
  );
}

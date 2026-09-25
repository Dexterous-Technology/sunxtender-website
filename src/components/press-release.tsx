import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PageShell } from "@/components/page-shell";

export const PR_LINK = "text-primary underline underline-offset-2 hover:opacity-80";

export function PrP({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-muted-foreground first:mt-0">{children}</p>;
}

export function CsEmail() {
  return (
    <a href="mailto:customer-service@concordebattery.com" className={PR_LINK}>
      customer-service@concordebattery.com
    </a>
  );
}

function BackLink() {
  return (
    <Link
      to="/about/press-releases"
      className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-primary uppercase hover:opacity-80"
    >
      <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
      Back to Press Releases
    </Link>
  );
}

export function PressReleaseShell({
  title,
  date,
  boldDate = false,
  children,
}: {
  title: string;
  date: string;
  boldDate?: boolean;
  children: ReactNode;
}) {
  return (
    <PageShell eyebrow="Press Release" title={title}>
      <article className="max-w-3xl">
        <BackLink />
        <div className="mt-8">{children}</div>
        <p className={`mono mt-10 text-sm ${boldDate ? "font-bold text-foreground" : "text-muted-foreground"}`}>
          <time dateTime={date}>{date}</time>
        </p>
        <div className="mt-10 border-t border-border pt-6">
          <BackLink />
        </div>
      </article>
    </PageShell>
  );
}

export function prHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | SunXtender` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | SunXtender` },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

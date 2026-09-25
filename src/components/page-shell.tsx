import type { ReactNode } from "react";

import { AffiliationBar, Nav, Footer } from "@/components/site-chrome";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AffiliationBar />
      <Nav />

      <section className="border-b border-border">
        <div className="container-x py-16 md:py-24">
          <div className="mono text-[11px] tracking-widest text-primary uppercase">{eyebrow}</div>
          <h1 className="mt-6 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle ? <p className="mt-6 max-w-xl text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
      </section>

      <section>
        <div className="container-x py-16 md:py-24">{children}</div>
      </section>

      <Footer />
    </main>
  );
}

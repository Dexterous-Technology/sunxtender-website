import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";
import { PR_LINK } from "@/components/press-release";

export const Route = createFileRoute("/about/press-releases/")({
  head: () => ({
    meta: [
      { title: "Press Releases | SunXtender" },
      { name: "description", content: "Sun Xtender® press releases: new website launch, higher capacity Group 31 batteries and the Caltrans AGM specification." },
      { property: "og:title", content: "Press Releases | SunXtender" },
      { property: "og:description", content: "Sun Xtender® press releases: new website launch, higher capacity Group 31 batteries and the Caltrans AGM specification." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PressReleasesIndex,
});

const cardCls = "border border-border bg-card p-6 md:p-8";
const readCls = "mt-5 inline-block text-xs font-medium tracking-wide text-primary uppercase hover:opacity-80";
const titleCls = "font-display text-xl leading-snug tracking-tight md:text-2xl";

function PressReleasesIndex() {
  return (
    <PageShell eyebrow="About" title="Sun Xtender® Press Releases">
      <ul className="grid max-w-3xl gap-6">
        <li className={cardCls}>
          <time dateTime="2015-04-29" className="mono text-[11px] tracking-widest text-muted-foreground">2015-04-29</time>
          <h2 className={`mt-3 ${titleCls}`}>
            Sun Xtender® Launches New Website at{" "}
            <Link to="/" className={PR_LINK}>www.SunXtender.com</Link>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The newly designed website for Sun Xtender solar batteries is now live on the World Wide Web. SunXtender.com connects Sun Xtender users to the information and resources needed for selecting and installing renewable energy batteries.
          </p>
          <Link to="/about/press-releases/sun-xtender-launches-new-website" className={readCls}>Read more →</Link>
        </li>
        <li className={cardCls}>
          <time dateTime="2011-07-12" className="mono text-[11px] tracking-widest text-muted-foreground">2011-07-12</time>
          <h2 className={`mt-3 ${titleCls}`}>
            <Link to="/about/press-releases/new-higher-capacity-group-31-batteries" className="hover:text-primary">New Higher Capacity Group 31 Batteries Released</Link>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Concorde Battery Corporation is pleased to introduce four new Sun Xtender® AGM, deep cycle batteries for renewable energy and photovoltaic systems, available in 12 Volt, 6 Volt and 2 Volt configurations.
          </p>
          <Link to="/about/press-releases/new-higher-capacity-group-31-batteries" className={readCls}>Read more →</Link>
        </li>
        <li className={cardCls}>
          <time dateTime="2004-01-14" className="mono text-[11px] tracking-widest text-muted-foreground">2004-01-14</time>
          <h2 className={`mt-3 ${titleCls}`}>
            <Link to="/about/press-releases/caltrans-specifies-sun-xtender" className="hover:text-primary">Caltrans Specifies Sun Xtender</Link>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            After extensive application and product research Caltrans has specified that AGM batteries manufactured by Concorde Battery Corporation shall be used for Deep Cycle Charging Applications.
          </p>
          <Link to="/about/press-releases/caltrans-specifies-sun-xtender" className={readCls}>Read more →</Link>
        </li>
      </ul>
    </PageShell>
  );
}

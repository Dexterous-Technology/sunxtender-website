import { createFileRoute } from "@tanstack/react-router";

import { PR_LINK, PressReleaseShell, PrP, prHead } from "@/components/press-release";

export const Route = createFileRoute("/about/press-releases/caltrans-specifies-sun-xtender")({
  head: () =>
    prHead(
      "Caltrans Specifies Sun Xtender",
      "January 14, 2004 — Caltrans specifies Concorde AGM batteries, including the Sun Xtender® Series, for Deep Cycle Charging Applications.",
    ),
  component: Page,
});

function Page() {
  return (
    <PressReleaseShell title="Caltrans Specifies Sun Xtender" date="2004-01-14">
      <p className="text-sm font-semibold tracking-wide text-foreground">
        CALIFORNIA DEPARTMENT OF TRANSPORTATION (CALTRANS)
      </p>
      <p className="mt-4 text-sm font-semibold tracking-wide text-foreground">
        CALTRANS EQUIPMENT QUALITY STANDARDS ELECTRIC SECTION 4. BATTERIES
        <br />
        SUB-SECTION 4.3 - DEEP CYCLE BATTERIES STATES:
      </p>
      <blockquote className="mt-6 border-l-2 border-primary pl-6 text-sm leading-relaxed text-foreground italic">
        "Deep Cycle Charging Applications (e.g. solar charging systems and inverter power) shall use absorbent glass mat (AGM) batteries (e.g. Chairman® Series, Lifeline® Series, Sun Xtender® Series by Concorde)."
      </blockquote>
      <div className="mt-6">
        <PrP>
          After extensive application and product research Caltrans has specified that AGM batteries manufactured by Concorde Battery Corporation shall be used by Caltrans and Caltrans Equipment Suppliers for Deep Cycle Charging Applications.
        </PrP>
        <PrP>The selection of which battery series to use for an application is defined by Concorde Battery as follows:</PrP>
        <PrP>
          The Sun Xtender® Series Batteries are designed for solar / wind charging systems (examples include arrow &amp; message boards, monitoring, communications systems, inverter power).
        </PrP>
        <PrP>
          The Lifeline® Series Batteries are designed for alternator charging systems (examples include use in marine craft, recreational vehicles).
        </PrP>
        <PrP>
          The Chairman® Series Batteries are designed for conventional AC/DC charging systems such as motive and back-up power applications (examples include electric powered personnel / materials carriers, traffic light signals).
        </PrP>
        <PrP>
          <a
            href="http://www.dot.ca.gov/hq/eqsc/QualityStandards/Electric/Electric-04.htm"
            target="_blank"
            rel="noopener noreferrer"
            className={PR_LINK}
          >
            Access the web pages below:
          </a>
        </PrP>
        <PrP>Scroll to: 4.3 Deep Cycle Batteries</PrP>
      </div>
    </PressReleaseShell>
  );
}

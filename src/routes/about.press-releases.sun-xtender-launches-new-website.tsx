import { createFileRoute } from "@tanstack/react-router";

import { CsEmail, PressReleaseShell, PrP, prHead } from "@/components/press-release";

export const Route = createFileRoute("/about/press-releases/sun-xtender-launches-new-website")({
  head: () =>
    prHead(
      "Sun Xtender® Launches New Website",
      "April 29, 2015 — the newly designed SunXtender.com connects users to resources for selecting and installing renewable energy batteries.",
    ),
  component: Page,
});

function Page() {
  return (
    <PressReleaseShell title="Sun Xtender® Launches New Website at www.SunXtender.com" date="2015-04-29">
      <PrP>
        West Covina, CA - April 29, 2015 - The newly designed website for Sun Xtender solar batteries is now live on the World Wide Web. SunXtender.com connects Sun Xtender users to the information and resources needed for selecting and installing renewable energy batteries in grid tied, off grid, backup and smart grid systems.
      </PrP>
      <PrP>
        The new site features expanded content on battery construction and explains what sets Sun Xtender apart as the superior energy storage solution by comparison to flooded lead acid, gel and other AGM battery designs. A cross section shows how Sun Xtender batteries are constructed and explains the unique features that make Sun Xtender batteries robust for long term energy storage and durability in the most demanding environments. The newly designed site also offers information on battery bank sizing and battery bank installations providing users the ability to better understand their energy storage needs.
      </PrP>
      <PrP>
        Sun Xtender batteries are designed and manufactured by Concorde Battery Corporation, the leader in sealed lead acid battery engineering and construction for the aviation industry. Each Sun Xtender battery is manufactured with the same sealed, valve regulated, absorbed glass mat (AGM) features that have been proven and adopted by aircraft manufacturers, fixed wing and rotorcraft operators as well as military Air Forces worldwide. Concorde has designed application specific solutions for over 3 decades in West Covina, California.
      </PrP>
      <PrP>
        For more information about this release please contact Customer Service at Concorde Battery. Call 626-813-1234 or email <CsEmail />.
      </PrP>
    </PressReleaseShell>
  );
}

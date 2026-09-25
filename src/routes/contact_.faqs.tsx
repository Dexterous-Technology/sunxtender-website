import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

import { PageShell } from "@/components/page-shell";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What does AGM stand for?",
    a: "It stands for Absorbed Glass Mat, the type of separator used in all Sun Xtender AGM batteries.",
  },
  {
    q: "What is the difference between AGM batteries and Gel batteries?",
    a: "Both AGM and Gel batteries utilize oxygen recombination and pressure relief valves to minimize water loss and allow maintenance-free operation. That is where the similarities end. AGM batteries have the advantage of being mountable in any orientation without capacity loss, have lower internal impedance to support high load currents, and have better capacity at low temperatures. Gel batteries must be mounted upright to prevent air pockets from forming that will burn out the plates. They have inferior performance at high discharge rates and low temperatures. Refer to Chapter 3 for further details.",
  },
  {
    q: "Why should I choose Sun Xtender AGM batteries?",
    a: "Concorde has been supplying Sun Xtender AGM batteries to the Renewable Energy Storage / Solar Energy / Photovoltaic (PV) Industries for over 20 years, providing excellent performance, reliability and life. Applications include installations for telecommunications, village power, medical refrigeration, remote home, supervisory control & data acquisition, cathodic protection, telemetry, residential homes, aids to navigation (sea & air), lighting, and many more uses. With this long history and wide variety of successful applications, prospective customers are assured that Sun Xtender AGM batteries have proven themselves over and over again.",
  },
  {
    q: "What depth of discharge should be used when sizing a battery?",
    a: "To get the best cycle life, the average depth of discharge should be as low as possible. Concorde recommends the average depth of discharge be no greater than 50% of the battery's 24 hour rating.",
  },
  {
    q: "What is the maximum number of batteries that can be connected in parallel?",
    a: "There is no theoretical limit to the number of batteries that can be connected in parallel. As more batteries are paralleled together, the risk of one faulty battery affecting the entire battery bank increases. Depending on the criticality of the application, there may be a need to isolate each battery or battery string for fault protection or to allow servicing of individual batteries. This can be accomplished by incorporating additional circuitry in the battery system that includes fuses, circuit breakers, or diodes. For more details on this subject, contact Concorde Battery for technical assistance.",
  },
  {
    q: "Can Sun Xtender AGM batteries be installed in sealed containers?",
    a: "NO. Do not install Sun Xtender AGM batteries in a sealed box or enclosure. During charging, hydrogen gas can be released and must be ventilated to prevent the possibility of ignition and/or explosion.",
  },
  {
    q: "What is the best way to charge my battery?",
    a: "Charge with a 3 stage charger that compensates the voltage setting as the battery temperature changes. See Chapter 5 for further information.",
  },
  {
    q: "What is the best charge voltage setting for outdoor applications if temperature sensing is not available?",
    a: "NONE. Charging voltage varies widely depending on the battery's temperature and there is no single voltage that will work over a wide temperature range. Batteries will fail prematurely if this is attempted.",
  },
  {
    q: "How can I tell if my battery is fully charged?",
    a: "For a battery at room temperature, it can be considered fully charged when the charging current falls below 0.5A per 100Ah of rated capacity. The open circuit voltage (after at least 4 hours of rest) will be 2.17 volts per cell or higher (13.0 volts for a 12-volt battery), regardless of the battery temperature.",
  },
  {
    q: "How do I know when it is time to replace my battery?",
    a: "Replace the battery when it no longer is capable of supporting the discharge load for the minimum required run time.",
  },
];

export const Route = createFileRoute("/contact_/faqs")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | SunXtender" },
      {
        name: "description",
        content: "Answers to frequently asked questions about Sun Xtender AGM batteries.",
      },
      { property: "og:title", content: "Frequently Asked Questions | SunXtender" },
      {
        property: "og:description",
        content: "Answers to frequently asked questions about Sun Xtender AGM batteries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <PageShell
      eyebrow="Contact"
      title="Frequently Asked Questions"
      subtitle="Answers to the most common questions about Sun Xtender AGM batteries."
    >
      <div className="mx-auto max-w-3xl divide-y divide-border border border-border">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center gap-4 px-5 py-6 text-left transition-colors hover:bg-primary/5 md:px-8 ${
                  isOpen ? "bg-primary/5" : ""
                }`}
              >
                <span className="mono shrink-0 text-[11px] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-medium leading-snug">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-7 pt-4 md:px-8">
                  <p className="max-w-none pl-9 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}

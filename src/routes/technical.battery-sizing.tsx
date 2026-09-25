import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/technical/battery-sizing")({
  head: () => ({
    meta: [
      { title: "Sun Xtender Battery Sizing | SunXtender" },
      {
        name: "description",
        content:
          "Guidelines for sizing a Sun Xtender AGM battery bank: load calculations, days of autonomy, temperature design factors and worked examples.",
      },
      { property: "og:title", content: "Sun Xtender Battery Sizing | SunXtender" },
      {
        property: "og:description",
        content:
          "Guidelines for sizing a Sun Xtender AGM battery bank: load calculations, days of autonomy, temperature design factors and worked examples.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BatterySizingPage,
});

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 font-display text-2xl tracking-tight first:mt-0 md:text-3xl">
      {children}
    </h2>
  );
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mono mt-10 text-[11px] tracking-widest text-primary uppercase">{children}</h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</p>;
}

function Formula({ lines }: { lines: string[] }) {
  return (
    <div className="mt-4 border-l-2 border-primary/60 bg-muted/40 py-3 pl-4">
      {lines.map((line) => (
        <div key={line} className="mono text-xs leading-6 text-foreground">
          {line}
        </div>
      ))}
    </div>
  );
}

function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-6 border-l-2 border-primary bg-primary/[0.05] px-5 py-4">
      <div className="mono text-[11px] tracking-widest text-primary uppercase">{label}</div>
      <div className="mt-2 space-y-1 text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

function DataTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <figure className="mt-8">
      <div className="w-full overflow-x-auto border border-border">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <caption className="mono border-b border-border bg-muted/50 px-4 py-3 text-left text-[11px] tracking-widest text-foreground uppercase">
            {caption}
          </caption>
          <thead>
            <tr className="border-b border-border bg-muted/30">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium tracking-wide text-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-border last:border-b-0 odd:bg-muted/10">
                {row.map((cell, i) => (
                  <td
                    key={`${row.join("|")}-${i}`}
                    className={
                      i === 0
                        ? "px-4 py-2.5 text-sm text-foreground"
                        : "mono px-4 py-2.5 text-xs text-muted-foreground"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function BatterySizingPage() {
  return (
    <PageShell
      eyebrow="Resources · Battery Sizing"
      title="Sun Xtender Battery Sizing"
      subtitle="How to size a Sun Xtender AGM battery bank for a stand alone renewable energy system."
    >
      <div className="max-w-3xl">
        <P>
          Follow these guidelines for sizing a battery system that should provide a reliable energy
          storage system for stand alone Renewable Energy systems. The primary emphasis is for
          photovoltaic (PV), solar battery systems but other renewable energy source systems would
          have similar requirements.
        </P>

        <H2>Load Calculations</H2>

        <H3>DC Loads</H3>
        <P>To calculate the DC Ampere Hours per Day required to power the system:</P>
        <Formula
          lines={[
            "DC Load Amps = 1000 x kW ÷ DC System Voltage",
            "Total Daily Load [AH] = DC Load Amps x No. of Operating Hours per Day",
          ]}
        />

        <Callout label="Example">
          <p>For a 0.12 kW DC load at 48 VDC,</p>
          <p className="mono text-xs leading-6">DC Load Amps = 1000 x 0.12kW ÷ 48VDC = 2.5A.</p>
          <p className="mono text-xs leading-6">
            Total Daily Load = 2.5A x 24 Hours/Day = 60 AH/Day.
          </p>
        </Callout>

        <P>
          For variable DC Loads, establish the duty cycle based on percentages of the daily
          operations.
        </P>
        <Formula lines={["(P1% of day at xx Amps) + (P2% of day at yy Amps) + Etc = Total AH Consumed/Day"]} />

        <Callout label="Example">
          <p>A system operates at 5A for 70% of the day and 10A for 30% of the day:</p>
          <p className="mono text-xs leading-6">
            Total Daily Load = (70% X 5A X 24 Hrs) + (30% X 10A X 24 Hrs)
          </p>
          <p className="mono text-xs leading-6">
            Total Daily Load = 84 AH + 72 AH = 156 AH/Day.
          </p>
        </Callout>

        <H3>AC Loads</H3>
        <P>
          When an inverter is used to power 120 or 240 VAC appliances, such as pumps, refrigerators,
          lighting, etc., the AC voltage must be converted to the Battery&apos;s DC voltage and the
          efficiency of the inverter must be considered.
        </P>
        <P>
          If the inverter AC voltage is 120 VAC and the battery DC voltage is 24 VDC, then the
          conversion factor is 5.0. For every AC amp drawn there will be 5 times as many DC amps
          required. Also, the inverter&apos;s conversion efficiency from DC to AC is not 100%. There
          is an internal loss in the inverter which is normally about 10% to 15%. See
          inverter/charger manufacturer&apos;s data for efficiency specifications.
        </P>

        <Callout label="Example">
          <p>
            For a 2.4 kW AC Load at 120VAC with a 48VDC battery and Inverter operating at 90%
            efficiency,
          </p>
          <p className="mono text-xs leading-6">AC Load = 1000 x 2.4 kW ÷ 120 VAC = 20 Amps @ 120 VAC</p>
          <p className="mono text-xs leading-6">DC Load = 20 Amps AC X 120/48 ÷ 0.90 = 55.6 Amps DC</p>
          <p className="mono text-xs leading-6">
            Total Daily Load = 55.6 A x 24 Hours/Day = 1,334 AH/Day
          </p>
        </Callout>

        <Callout label="Note">
          <p>
            When sizing the battery for non continuous loads, or for larger loads for short periods
            of time per day, it may not be possible to use the 20, 24 or 120 hr. rate of discharge
            for the battery&apos;s capacity. When discharged at different rates, a battery&apos;s
            capacity will vary. The higher the rate of discharge, the lower the capacity of the
            battery will be. More detailed calculations are required in these cases.
          </p>
        </Callout>

        <H2>Days of Autonomy</H2>
        <P>
          As everybody knows, the sun does not shine with equal intensity every day, nor does it
          shine at night and during inclement weather. Cloud cover, rain, snow, etc. diminish the
          daily insolation (Insolation is the amount of solar energy delivered to the earth&apos;s
          surface, measured in W/m2 or kWh/m2/day). A storage factor must be employed to allow the
          photovoltaic battery system to operate reliably throughout these periods.
        </P>
        <P>
          In addition, it is desired to obtain the best service life of the battery by limiting its
          average daily depth of discharge. This storage factor is commonly referred to as
          &quot;Number of Days of Battery Autonomy&quot;. The number of days is established by
          evaluating the peak hours of sun per day for the lowest insolation month of the year with
          the solar array oriented for maximum output during that month.
        </P>
        <P>
          The minimum number of days that should be considered is 5 days of storage for even the
          sunniest locations on earth. In these high sun locations there will be days when the sun is
          obscured and the battery&apos;s average depth of discharge should not be more than 20% per
          day. The recommended days of autonomous storage are shown in the following table:
        </P>

        <DataTable
          caption="Recommended Days of Storage"
          headers={["kWh/m2/day", "Days of Autonomy"]}
          rows={[
            ["4.5+", "5"],
            ["3.5 to 4.5", "6"],
            ["2.7 to 3.5", "7"],
            ["2.0 to 2.7", "8"],
            ["< 2.0", "10 or more"],
          ]}
        />

        <H2>Temperature Considerations</H2>
        <P>
          The temperature of the battery is a major factor in sizing a PV system. Battery capacity is
          reduced in cold temperatures and the battery life is shortened in high temperatures.
        </P>
        <P>
          It should be realized that the temperature of the battery itself and ambient temperature
          can be vastly different. While ambient temperatures can change very quickly, battery
          temperature change is much slower. This is due to the large thermal mass of the battery. It
          takes time for the battery to absorb temperature and it takes time for the battery to
          relinquish temperature.
        </P>
        <P>
          The battery&apos;s temperature is normally the average temperature for the past 24 hours
          plus or minus a few degrees. In many systems it can be difficult or impossible to heat or
          cool the battery and we must take ambient temperature into consideration. A battery that is
          required to operate continuously at -18°C (0° F.) will provide about 60% of its capacity.
          This same battery operated continuously in a 35°C (95°F.) environment will see its life
          expectancy cut in half. The earth is a great heat sink which provides enormous insulation
          in high or low temperatures. By burying the battery in the ground we can increase its
          capacity at cold ambient temperatures and increase the life of the battery at high ambient
          temperatures. The battery with only 60% of its capacity at -18°C (0°F) can be brought up to
          85% to 90% capacity by burying it. With life cut in half at 35°C (95°F), burying the
          battery can bring it back to near normal life expectancy.
        </P>

        <H2>Battery Sizing</H2>
        <P>The battery capacity for a PV system can be calculated using the following formula:</P>
        <Formula lines={["Capacity (AH) = Total Daily Load x Days of Autonomy x Design Factor"]} />
        <P>
          The Design Factor depends on the battery&apos;s average temperature during the coldest time
          of the year, as discussed above. The following table provides recommended Design Factors at
          various temperatures.
        </P>

        <DataTable
          caption="Lowest Battery Temperature Averaged over 24 Hours"
          headers={["Degrees C", "Degrees F", "Design Factor"]}
          rows={[
            ["25 or above", "77 or above", "1.25"],
            ["20 to 24", "68 to 76", "1.39"],
            ["10 to 19", "50 to 67", "1.43"],
            ["0 to 9", "32 to 49", "1.60"],
            ["-10 to -1", "14 to 31", "1.84"],
            ["-20 to -11", "-4 to 13", "2.23"],
            ["-30 to -21", "-22 to -5", "2.84"],
            ["-40 to -31", "-40 to -23", "4.17"],
          ]}
        />

        <Callout label="Example">
          <p>
            For a 48VDC system, Total Daily Load of 30AH, 5 Days of Autonomy, and -8°C is the lowest
            average temperature, the required battery capacity is as follows:
          </p>
          <p>
            <span className="mono text-xs">Battery Capacity = 30 x 5 x 1.84 = 276AH.</span> This
            requirement could be satisfied with a PVX-2580L, which has a C/120 rating of 305AH. Four
            of these batteries in series gives 4 x 12VDC = 48VDC.
          </p>
        </Callout>
      </div>
    </PageShell>
  );
}

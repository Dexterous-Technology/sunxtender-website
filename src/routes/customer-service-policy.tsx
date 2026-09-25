import { createFileRoute, Link } from "@tanstack/react-router";

import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/customer-service-policy")({
  head: () => ({
    meta: [
      { title: "Customer Service Policy | SunXtender" },
      {
        name: "description",
        content:
          "Concorde Battery Corporation's commitment to quality, service, and the people behind every Sun Xtender battery.",
      },
      { property: "og:title", content: "Customer Service Policy | SunXtender" },
      {
        property: "og:description",
        content:
          "Concorde Battery Corporation's commitment to quality, service, and the people behind every Sun Xtender battery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow={"SunXtender"}
      title={"Customer Service Policy"}
      subtitle="Our commitment to quality, service, and the people behind every battery."
    >
      <article className="mx-auto max-w-3xl">
        <h2 className="font-display text-xl tracking-tight text-foreground">
          Concorde Battery Corporation
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Concorde Battery Corporation, the manufacturers of Sun Xtender&reg;
            renewable energy batteries, has been manufacturing batteries in the
            U.S.A. since 1979. Concorde has supplied the Department of Defense
            with over 150,000 military batteries manufactured to the same rigid
            quality requirements that all products released from the facility
            must pass.
          </p>
          <p>
            Concorde&rsquo;s facility is{" "}
            <Link
              to="/technical/iso-9001-as9100"
              className="text-primary hover:underline"
            >
              ISO 9001 + AS9100
            </Link>{" "}
            certified and is fully qualified under the FAA Parts Manufacturing
            Approval (PMA) process.
          </p>
          <p>
            Concorde is committed to the position that the customer deserves the
            best performing and highest quality product. Our batteries are
            tailored to the application rather than make the designer settle for
            what is available. It is this commitment &mdash; to meet the needs of
            the customer &mdash; that sets Concorde apart.
          </p>
        </div>

        <h2 className="mt-16 font-display text-xl tracking-tight text-foreground">
          The People
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            People are the most important ingredient in the success of a
            company, and we are extremely fortunate to have many talented and
            experienced people under one roof. The management group at Concorde
            represents over one hundred fifty years of battery manufacturing
            experience. Our President, Research and Development, Engineering,
            Manufacturing, Quality Assurance, Marketing and Sales personnel are
            knowledgeable, friendly, and ready to meet any challenge for
            superior battery technology.
          </p>
        </div>

        <h2 className="mt-16 font-display text-xl tracking-tight text-foreground">
          The Future
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            It is our belief that there is a growing need for special purpose
            sealed lead-acid batteries in such areas as inertial navigation
            systems, stand-by emergency lighting, cable television, computer
            back-up, and motive power to mention a few. To manufacture quality
            VRB batteries requires exacting knowledge, expertise, and a
            commitment to quality needed in few segments of the battery
            industry. Concorde has the knowledge, skill, people and desire to
            produce the finest quality batteries.
          </p>
          <p>
            Concorde&rsquo;s research and development in the valve regulated
            lead-acid battery continues to bring considerable interest from
            military, marine, UPS, motive power and medical equipment
            manufacturers and users. Continued effort from every level of
            management has contributed to our growth and success.
          </p>
        </div>

        <h2 className="mt-16 font-display text-xl tracking-tight text-foreground">
          Growth and Facilities
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Our growth has required us to greatly increase our manufacturing
            facilities and employ additional personnel. Concorde Battery&rsquo;s
            manufacturing facilities and offices are located at 2009 San
            Bernardino Road in West Covina, CA. All phases of the manufacturing,
            engineering, quality assurance, marketing, and administration are
            performed at this location.
          </p>
        </div>
      </article>
    </PageShell>
  ),
});

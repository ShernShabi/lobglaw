import Link from "next/link";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Constitutional Law",
    slug: "constitutional-law",
    description:
      "We defend fundamental constitutional rights, including First Amendment protections for free speech, religious liberty, and political expression. Our work frequently intersects with civil rights matters where government action threatens individual freedoms.",
  },
  {
    title: "Civil Rights Litigation",
    slug: "civil-rights-litigation",
    description:
      "We represent individuals whose civil rights have been violated — political activists, professors, students and community members facing retaliation for exercising their rights. The firm has taken on well-funded opponents and won.",
  },
  {
    title: "Anti-SLAPP Litigation",
    slug: "anti-slapp-litigation",
    description:
      "SLAPP suits are designed to silence critics through expensive litigation. We have extensive experience filing and winning anti-SLAPP motions to protect our clients' right to speak freely, and have defeated meritless suits brought by powerful parties.",
  },
  {
    title: "Appeals",
    slug: "appeals",
    description:
      "We handle complex appellate matters before the California Court of Appeal and the Ninth Circuit Court of Appeals. Multiple decisions from our cases have been certified for publication, establishing new legal precedent.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              {config.serviceLabel.toUpperCase()}
            </div>
            <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {config.serviceLabel}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
              We handle a focused range of legal matters with precision and
              individualized attention.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <Reveal key={s.slug} delay={idx * 100}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full bg-white p-6 shadow-sm transition-all duration-300 ease-[ease] hover:-translate-y-2 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:p-10"
                >
                  <div className="border-t border-[var(--color-accent)] pt-7">
                    <div
                      className="text-xs font-medium text-[var(--color-accent)]"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      {number}
                    </div>
                    <div className="relative mt-6">
                      <div className="pr-10">
                        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                          {s.title}
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                          {s.description}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="absolute right-0 top-1 inline-flex translate-x-2 text-lg opacity-0 transition-all duration-300 ease-[ease] group-hover:translate-x-0 group-hover:opacity-100 text-[var(--color-accent)]"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

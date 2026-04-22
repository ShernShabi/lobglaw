import type { Metadata } from "next";
import Link from "next/link";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: `Practice Areas | ${config.businessName}`,
  description:
    "Constitutional law, civil rights litigation, anti-SLAPP, and appeals attorney in Los Angeles. Law Offices of Ben Gharagozli.",
};

const services = [
  {
    title: "Constitutional Law",
    slug: "constitutional-law",
    description:
      "We defend fundamental constitutional rights, including First Amendment protections for free speech, religious liberty, and political expression.",
  },
  {
    title: "Civil Rights Litigation",
    slug: "civil-rights-litigation",
    description:
      "We represent individuals whose civil rights have been violated, including political activists, professors, and community members facing retaliation.",
  },
  {
    title: "Anti-SLAPP Litigation",
    slug: "anti-slapp-litigation",
    description:
      "We have extensive experience filing and winning anti-SLAPP motions to protect our clients' right to speak out against meritless, retaliatory lawsuits.",
  },
  {
    title: "Appeals",
    slug: "appeals",
    description:
      "We handle complex appellate matters before the California Court of Appeal and the Ninth Circuit. Multiple decisions have been certified for publication.",
  },
] as const;

export default function ServicesPage() {

  return (
    <div className="bg-[var(--color-background)]">
      {/* Hero band */}
      <div
        className="pt-28 pb-16 md:pt-40 md:pb-24 lg:pb-32"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, #3a3a3a 0%, var(--color-primary) 70%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              {config.serviceLabel.toUpperCase()}
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              Practice Areas
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              We handle a focused range of legal matters with precision and
              individualized attention.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => {
            const number = String(idx + 1).padStart(2, "0");
            return (
              <Reveal key={s.slug} delay={idx * 100}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:p-10"
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
                        <h2 className="font-[family-name:var(--font-serif)] text-2xl font-bold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                          {s.title}
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                          {s.description}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="absolute right-0 top-1 translate-x-2 text-lg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-[var(--color-accent)]"
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

        <Reveal>
          <div className="mt-16 border-t border-neutral-200 pt-12 text-center md:mt-20 md:pt-16">
            <p className="text-base text-neutral-700 md:text-lg">
              Not sure which practice area applies to your situation?
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90 md:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

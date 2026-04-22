import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  { year: "2025", description: "R.R. v. C.R. — California Court of Appeal reversed trial court's denial of client's request for a restraining order (published decision)" },
  { year: "2024", description: "BB v. AS — Court of Appeal affirmed lifetime restraining order" },
  { year: "2022", description: "G v. M — Published decision; adverse verdict vacated" },
  { year: "2025", description: "G v. S — Prevailed in trial regarding a commercial matter" },
  { year: "2022", description: "B v. A — Prevailed in trial; restraining order granted for lifetime term" },
  { year: "2026", description: "FL v. AR — Prevailed in an anti-SLAPP motion on behalf of a progressive political activist" },
  { year: "2025", description: "JS v. DK — Prevailed in anti-SLAPP motion on behalf of graduate student activist" },
  { year: "2018", description: "M v. R — Prevailed on motion to dismiss lawsuit brought by a large firm against university professor" },
] as const;

export function Successes() {
  return (
    <section id="successes" className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              TRACK RECORD
            </div>
            <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-tight sm:text-5xl">
              Select Victories
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-neutral-700">
          {highlights.map((item, idx) => (
            <Reveal key={`${item.year}-${item.description}`} delay={idx * 80}>
              <div className="group -mx-5 flex flex-col gap-2 px-5 py-5 transition-colors duration-300 ease-[ease] hover:bg-white/5 md:-mx-4 md:flex-row md:items-start md:gap-10 md:px-4">
                <div
                  className="min-w-[92px] text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {item.year}
                </div>
                <div className="flex items-start gap-3 text-base leading-relaxed text-white/90 md:text-lg">
                  <span
                    className="mt-2.5 h-1 w-4 shrink-0 bg-[var(--color-accent)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  {item.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/victories"
              className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-2 hover:opacity-80"
            >
              View More →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

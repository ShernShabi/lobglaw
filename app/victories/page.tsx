import type { Metadata } from "next";
import Link from "next/link";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: `Track Record | ${config.businessName}`,
  description:
    "Select appellate wins, trial wins, and motion wins from the Law Offices of Ben Gharagozli.",
};

const categories = [
  {
    title: "Select Appellate Wins",
    items: [
      { year: "2025", description: "R.R. v. C.R. — California Court of Appeal reversed trial court's denial of client's request for a restraining order (published decision)" },
      { year: "2024", description: "BB v. AS — California Court of Appeal affirmed trial court's granting client a lifetime restraining order" },
      { year: "2024", description: "T v. M — California Court of Appeal affirmed trial court's fee award" },
      { year: "2023", description: "BB v. AS — California Court of Appeal reversed trial court's imposition of sanctions and order regarding support arrearages (published decision)" },
      { year: "2023", description: "BJ v. MV — Appellate Division reversed jury's adverse verdict against client" },
      { year: "2022", description: "BB v. AS — California Court of Appeal reversed trial court's denial of client's request to renew restraining order (published decision)" },
      { year: "2022", description: "C v. B — Appellate Division reversed trial court's denial of motion for directed verdict and motion for nonsuit; jury's adverse verdict vacated" },
      { year: "2022", description: "G v. S — Appellate Division reversed trial court's denial of motion for directed verdict and motion for nonsuit; jury's adverse verdict vacated (published decision)" },
      { year: "2012", description: "Z. v. Holder — Ninth Circuit reversed adverse decisions of both immigration judge and Board of Immigration Appeals" },
    ],
  },
  {
    title: "Select Trial Wins",
    items: [
      { year: "2025", description: "H v. C — Prevailed in trial regarding a residential matter" },
      { year: "2025", description: "V v. L — Prevailed in trial regarding a residential matter" },
      { year: "2025", description: "G v. S — Prevailed in trial regarding a commercial matter" },
      { year: "2024", description: "PV v. RB — Prevailed in trial regarding a residential matter" },
      { year: "2024", description: "M v. CL — Prevailed in trial regarding a commercial matter" },
      { year: "2024", description: "SB v. DD — Prevailed in trial regarding a residential matter" },
      { year: "2023", description: "M v. CL — Prevailed in trial regarding a commercial matter" },
      { year: "2022", description: "B v. A — Prevailed in trial to renew restraining order, granted for lifetime term" },
      { year: "2022", description: "KHO v. EG — Prevailed in trial in a commercial case" },
      { year: "2022", description: "T v. M — Prevailed in trial regarding a commercial matter" },
      { year: "2021", description: "L v. V — Prevailed in a restraining order trial" },
      { year: "2018", description: "C v. H — Prevailed in a restraining order trial" },
      { year: "2017", description: "G v. M — Prevailed in a restraining order trial" },
      { year: "2016", description: "J v. A — Prevailed in family law trial by arguing First Amendment issues" },
      { year: "2012", description: "J v. R — Prevailed in a family law trial" },
      { year: "2012–2015", description: "Prevailed in more than a dozen deportation defense trials" },
    ],
  },
  {
    title: "Select Motion Wins",
    items: [
      { year: "2026", description: "FL v. AR — Prevailed in anti-SLAPP motion on behalf of progressive political activist" },
      { year: "2025", description: "JS v. DK — Prevailed in anti-SLAPP motion on behalf of graduate student activist" },
      { year: "2025", description: "JS v. DK — Prevailed in fee motion following anti-SLAPP victory" },
      { year: "2025", description: "H v. C — Prevailed in motion for attorneys' fees" },
      { year: "2025", description: "DJ v. TE — Prevailed in motion for attorneys' fees following successful motion for summary judgment" },
      { year: "2024", description: "T v. M — Prevailed in motion for summary judgment in a commercial case" },
      { year: "2024", description: "T v. M — Prevailed in motion for attorneys' fees following successful appeal" },
      { year: "2024", description: "PV v. RB — Prevailed in motion for attorneys' fees following trial victory" },
      { year: "2024", description: "SV v. RC — Prevailed in motion for attorneys' fees following summary judgment victory" },
      { year: "2024", description: "SB v. DD — Prevailed in motion for attorneys' fees following trial victory" },
      { year: "2024", description: "S v. D — Prevailed in motion for attorneys' fees for advancement of fees to handle numerous appeals" },
      { year: "2023", description: "G v. S — Prevailed in motion for attorneys' fees following successful appeal" },
      { year: "2023", description: "M v. CL — Prevailed in motion for attorneys' fees following trial victory" },
      { year: "2023", description: "H v. C — Prevailed in motion for attorneys' fees" },
      { year: "2022", description: "DB v. BASTA — Prevailed in motion for evidentiary sanctions, precluding opposing party from introducing economic damages evidence" },
      { year: "2022", description: "T v. M — Prevailed in motion for attorneys' fees following trial victory" },
      { year: "2022", description: "KHO v. EG — Prevailed in motion for attorneys' fees following trial victory" },
      { year: "2022", description: "RM v. CL — Prevailed in motion for summary judgment in commercial case" },
      { year: "2022", description: "RM v. CL — Prevailed in motion for attorneys' fees following summary judgment victory" },
      { year: "2018", description: "M v. R — Prevailed on motion to dismiss lawsuit brought by a large firm against university professor" },
    ],
  },
] as const;

export default function VictoriesPage() {
  return (
    <div className="bg-[var(--color-primary)] text-white min-h-screen">
      {/* Hero band */}
      <div className="border-b border-neutral-700 pt-28 pb-16 md:pt-40 md:pb-24 lg:pb-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-3 hover:opacity-80"
            >
              ← Back to Home
            </Link>
            <div className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)] md:mt-8">
              TRACK RECORD
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              Select Victories
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              A selection of favorable outcomes across appellate, trial, and motion practice.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 md:space-y-20 md:px-8 md:py-20 lg:py-32">
        {categories.map((category) => (
          <div key={category.title}>
            <Reveal>
              <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)] pb-4 border-b border-neutral-600">
                {category.title}
              </h2>
            </Reveal>

            <div className="divide-y divide-neutral-700">
              {category.items.map((item, idx) => (
                <Reveal key={`${item.year}-${item.description}`} delay={Math.min(idx * 60, 400)}>
                  <div className="group -mx-5 flex flex-col gap-2 px-5 py-5 transition-colors duration-300 ease-[ease] hover:bg-white/5 md:-mx-4 md:flex-row md:items-start md:gap-10 md:px-4">
                    <div
                      className="min-w-[92px] text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      {item.year}
                    </div>
                    <div className="flex items-start gap-3 text-base leading-relaxed text-white/90">
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
          </div>
        ))}

        <div className="border-t border-neutral-700 pt-10">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-3 hover:opacity-80"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

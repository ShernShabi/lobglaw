import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="cta" className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Schedule a Consultation
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200">
              A brief conversation can clarify your options and next steps.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-3.5 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 ease-[ease] hover:scale-[1.03] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/30 md:w-auto"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

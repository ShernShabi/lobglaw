"use client";

import { useMemo, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";

type Item = { q: string; a: string };

export function FAQ() {
  const items = useMemo<Item[]>(
    () => [
      {
        q: "How quickly can I schedule a consultation?",
        a: "Typically within 1–2 business days. Use the contact form on our contact page and we will respond promptly.",
      },
      {
        q: "What areas of law do you practice?",
        a: "Our practice focuses on constitutional law, civil rights litigation, anti-SLAPP defense, appeals, and restraining orders. We serve clients throughout Los Angeles and Orange County.",
      },
      {
        q: "Will I work directly with the attorney?",
        a: "Yes. When you become a client, you receive direct access to Ben Gharagozli. We do not hand off cases to associates or paralegals.",
      },
      {
        q: "What makes your firm different from larger firms?",
        a: "We have a proven track record of defeating large firms and certified specialists by providing individualized attention, creative strategy, and aggressive advocacy. We are selective in who we take on so that every case gets the attention it deserves.",
      },
      {
        q: "Do you handle appeals?",
        a: "Yes. We have extensive appellate experience before the California Court of Appeal and the Ninth Circuit. Multiple decisions from our cases have been certified for publication.",
      },
    ],
    []
  );

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--color-background)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
              FREQUENTLY ASKED
            </div>
            <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              FAQ
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="border-b border-neutral-200 py-6">
                <button
                  type="button"
                  className="group flex min-h-[44px] w-full items-center justify-between gap-4 text-left transition-colors duration-300 hover:text-[var(--color-accent)]"
                  onClick={() => setOpenIdx((v) => (v === idx ? null : idx))}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium leading-snug text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)] md:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={[
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center text-[var(--color-accent)] transition-transform duration-300 ease-[ease]",
                      isOpen ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>

                <div
                  className={[
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-[ease]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 pb-6 text-lg leading-relaxed text-neutral-700">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


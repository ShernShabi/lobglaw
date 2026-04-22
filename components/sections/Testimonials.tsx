"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { carouselTestimonials } from "@/lib/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((active + 1) % carouselTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [active, goTo]);

  const current = carouselTestimonials[active];

  return (
    <section id="testimonials" className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <figure className="relative pt-14 md:pt-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 font-[family-name:var(--font-serif)] text-7xl leading-none text-[var(--color-accent)] opacity-30 md:-top-6 md:text-9xl"
              >
                &ldquo;
              </div>
              <blockquote
                className={[
                  "mx-auto max-w-4xl font-[family-name:var(--font-serif)] text-xl italic leading-relaxed text-white md:text-2xl lg:text-3xl",
                  "transition-opacity duration-300",
                  fading ? "opacity-0" : "opacity-100",
                ].join(" ")}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption
                className={[
                  "mt-10 text-sm font-light uppercase tracking-widest text-neutral-300",
                  "transition-opacity duration-300",
                  fading ? "opacity-0" : "opacity-100",
                ].join(" ")}
              >
                — {current.name}
              </figcaption>
            </figure>

            <div className="mt-12 flex items-center justify-center gap-4">
              {carouselTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  className={[
                    "rounded-full transition-all duration-300 ease-[ease] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
                    idx === active
                      ? "h-2 w-6 bg-[var(--color-accent)]"
                      : "h-2 w-2 bg-white/30 hover:bg-white/60",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-2 hover:opacity-80"
              >
                View More Testimonials →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

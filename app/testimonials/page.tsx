import type { Metadata } from "next";
import Link from "next/link";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: `Client Testimonials | ${config.businessName}`,
  description:
    "What clients say about working with Ben Gharagozli — constitutional law, civil rights, and appeals attorney.",
};

export default function TestimonialsPage() {
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
              CLIENT TESTIMONIALS
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              What Clients Say
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Testimonials from clients who have worked directly with Ben Gharagozli.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Testimonials grid */}
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <div className="space-y-6 md:space-y-8">
          {testimonials.map((item, idx) => (
            <Reveal key={item.name} delay={idx * 80}>
              <div className="border-l-2 border-[var(--color-accent)] bg-white px-6 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-l-4 hover:shadow-lg md:px-10 md:py-10">
                <blockquote className="font-[family-name:var(--font-serif)] text-lg italic leading-relaxed text-neutral-800 md:text-xl lg:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
                  — {item.name}
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-3 hover:opacity-80"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

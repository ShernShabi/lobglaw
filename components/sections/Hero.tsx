import Link from "next/link";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";

// SVG diagonal line pattern encoded for use in backgroundImage
const DIAGONAL_PATTERN = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M0 60L60 0M-15 15L15-15M45 75L75 45" stroke="#b8965a" stroke-width="0.6" stroke-opacity="0.12"/></svg>'
)}")`;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 50% 38%, #3a3a3a 0%, var(--color-primary) 68%)",
      }}
    >
      {/* Diagonal gold line pattern — very subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: DIAGONAL_PATTERN,
          backgroundRepeat: "repeat",
          opacity: 0.5,
        }}
      />

      <div className="relative mx-auto flex h-full max-w-6xl px-5 md:px-8">
        <Reveal className="flex w-full flex-col items-center justify-center pb-20 text-center">
          <div className="max-w-4xl">
            <h1
              className="font-[family-name:var(--font-serif)] text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl xl:text-8xl"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.55)" }}
            >
              {config.businessName}
            </h1>

            <div className="mx-auto mt-8 h-px w-16 bg-[var(--color-accent)] md:mt-10" />

            <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed tracking-wide text-white/85 md:text-lg lg:text-xl">
              Protecting Constitutional Rights. Defending Civil Liberties.
              Winning Trials and Appeals.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 md:flex-row md:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-3.5 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:w-auto"
              >
                {config.ctaText}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <div className="h-10 w-px bg-white/30 animate-scroll-indicator" />
          <div className="text-[10px] uppercase tracking-[0.35em]">Scroll</div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import config from "@/site.config";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/services" },
  { label: "Track Record", href: "/victories" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

const practiceAreas = [
  { label: "Constitutional Law", slug: "constitutional-law" },
  { label: "Civil Rights", slug: "civil-rights-litigation" },
  { label: "Anti-SLAPP", slug: "anti-slapp-litigation" },
  { label: "Appeals", slug: "appeals" },
] as const;

export function Footer() {
  const fullAddress = `${config.address}, ${config.city}, ${config.state}`;

  return (
    <footer className="bg-[var(--color-primary)] text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 text-center md:grid-cols-2 md:gap-12 md:px-8 md:py-20 md:text-left lg:grid-cols-12 lg:gap-14 lg:py-24">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-[family-name:var(--font-serif)] text-xl font-semibold tracking-tight text-white transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            <Image
              src="/chess-logo.png"
              alt=""
              aria-hidden="true"
              width={28}
              height={28}
              quality={85}
              className="h-7 w-auto"
              style={{
                filter: "sepia(1) saturate(3) hue-rotate(10deg) brightness(0.7)",
              }}
            />
            <span className="whitespace-nowrap">{config.businessName}</span>
          </Link>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-neutral-300 md:mx-0">
            {config.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div className="lg:col-span-2">
          <div className="text-xs font-medium uppercase tracking-widest text-white">
            Navigation
          </div>
          <nav className="mt-6 grid gap-3">
            {navigationLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex min-h-[44px] items-center justify-center text-sm text-neutral-300 transition-colors duration-300 hover:text-[var(--color-accent)] md:justify-start"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Practice Areas */}
        <div className="lg:col-span-3">
          <div className="text-xs font-medium uppercase tracking-widest text-white">
            Practice Areas
          </div>
          <nav className="mt-6 grid gap-3 text-sm">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/services/${area.slug}`}
                className="inline-flex min-h-[44px] items-center justify-center text-neutral-300 transition-colors duration-300 hover:text-[var(--color-accent)] md:justify-start"
              >
                {area.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <div className="text-xs font-medium uppercase tracking-widest text-white">
            Contact
          </div>
          <div className="mt-6 grid gap-4 text-sm leading-relaxed text-neutral-300">
            <div>{fullAddress}</div>
            <a
              href={`mailto:${config.email}`}
              className="inline-flex min-h-[44px] items-center justify-center break-all transition-colors duration-300 hover:text-[var(--color-accent)] md:justify-start"
            >
              {config.email}
            </a>
            <div>
              <span className="font-medium text-white">Hours:</span>{" "}
              {config.businessHours}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-center text-xs text-neutral-400 md:flex-row md:items-center md:justify-between md:px-8 md:text-left">
          <div className="mx-auto max-w-md md:mx-0">
            © 2026 {config.businessName}. All rights reserved.
            <div className="mt-2 text-[11px] leading-relaxed text-neutral-400">
              Member of FIRE (Foundation for Individual Rights and Expression)
            </div>
          </div>
          <div className="text-neutral-400">
            {config.city}, {config.state}
          </div>
        </div>
      </div>
    </footer>
  );
}

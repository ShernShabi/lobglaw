"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import config from "@/site.config";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/services" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

const LOGO_FILTER_WHITE = "brightness(0) invert(1)";
const LOGO_FILTER_GOLD =
  "sepia(1) saturate(3) hue-rotate(10deg) brightness(0.7)";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          style={{
            backgroundColor: scrolled ? "#ffffff" : "transparent",
            boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            transition: "background-color 300ms ease, box-shadow 300ms ease",
          }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">

            {/* Mobile hamburger + logo */}
            <div className="flex min-w-0 items-center gap-2 md:gap-3">
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                style={{
                  color: scrolled ? "var(--color-text)" : "#ffffff",
                  transition: "color 300ms ease",
                }}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-colors duration-300 hover:text-[var(--color-accent)] lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <Link
                href="/"
                className="flex min-w-0 items-center gap-2 truncate font-[family-name:var(--font-serif)] text-base font-semibold tracking-tight transition-colors duration-300 hover:text-[var(--color-accent)] md:gap-3 md:text-lg lg:text-xl"
                style={{
                  color: scrolled ? "var(--color-text)" : "#ffffff",
                  transition: "color 300ms ease",
                }}
              >
                <Image
                  src="/chess-logo.png"
                  alt=""
                  aria-hidden="true"
                  width={28}
                  height={28}
                  quality={85}
                  priority
                  className="h-6 w-auto shrink-0 md:h-7"
                  style={{
                    filter: scrolled ? LOGO_FILTER_GOLD : LOGO_FILTER_WHITE,
                    transition: "filter 300ms ease",
                  }}
                />
                <span className="truncate">{config.businessName}</span>
              </Link>
            </div>

            {/* Desktop nav links */}
            <nav className="hidden items-center justify-center gap-6 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-light uppercase tracking-widest transition-colors duration-300 hover:text-[var(--color-accent)]"
                  style={{
                    color: scrolled ? "var(--color-text)" : "#ffffff",
                    transition: "color 300ms ease",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA button — visible at md+ (tablet and desktop) */}
            <div className="hidden items-center md:flex">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-2 text-xs font-medium uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                {config.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className={[
          "fixed inset-0 z-[60] bg-[var(--color-primary)] text-white",
          "transition-transform duration-300 ease-[ease]",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 font-[family-name:var(--font-serif)] text-lg font-semibold tracking-tight">
              <Image
                src="/chess-logo.png"
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                quality={85}
                style={{
                  height: "28px",
                  width: "auto",
                  filter: LOGO_FILTER_WHITE,
                }}
              />
              <span className="whitespace-nowrap">{config.businessName}</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center transition-colors duration-300 hover:text-[var(--color-accent)]"
              onClick={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <nav className="grid gap-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pb-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:opacity-90"
            >
              {config.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

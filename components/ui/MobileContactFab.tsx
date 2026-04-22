"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import config from "@/site.config";

export function MobileContactFab() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      aria-label={config.ctaText}
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-xs font-medium uppercase tracking-widest text-black shadow-xl transition-all duration-300 hover:scale-[1.03] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/40 md:hidden"
    >
      {config.ctaText}
    </Link>
  );
}

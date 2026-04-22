import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import config from "@/site.config";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MobileContactFab } from "@/components/ui/MobileContactFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: config.seo.titleTemplate,
    default: config.businessName,
  },
  description: config.seo.defaultDescription,
  keywords: config.seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssVars = {
    ["--color-primary" as any]: config.colors.primary,
    ["--color-secondary" as any]: config.colors.secondary,
    ["--color-accent" as any]: config.colors.accent,
    ["--color-background" as any]: config.colors.background,
    ["--color-text" as any]: config.colors.text,
  } satisfies CSSProperties;

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </head>
      <body
        style={cssVars}
        className={`${inter.variable} ${playfair.variable} min-h-dvh overflow-x-hidden bg-[var(--color-background)] text-[var(--color-text)] antialiased`}
      >
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <MobileContactFab />
      </body>
    </html>
  );
}

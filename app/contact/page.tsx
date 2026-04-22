import type { Metadata } from "next";

import config from "@/site.config";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: `Contact | ${config.businessName}`,
  description: "Contact the Law Offices of Ben Gharagozli. Send a message using our contact form. Serving Los Angeles and Orange County.",
};

export default function ContactPage() {
  const fullAddress = `${config.address}, ${config.city}, ${config.state}`;

  return (
    <div className="bg-[var(--color-background)]">
      {/* Dark header band — keeps navbar legible in transparent state */}
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
              GET IN TOUCH
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-7xl">
              Contact Us
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Share a brief overview of your situation and we&apos;ll follow up
              promptly.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Form + sidebar */}
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal>
              <aside className="bg-[var(--color-primary)] px-6 py-8 text-white md:px-10 md:py-12">
                <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
                  Contact Details
                </div>
                <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />

                <div className="mt-10 grid gap-8">
                  <div className="grid gap-2">
                    <div className="text-xs font-medium uppercase tracking-widest text-white/70">
                      Address
                    </div>
                    <div className="text-base leading-relaxed text-white">
                      {fullAddress}
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="text-xs font-medium uppercase tracking-widest text-white/70">
                      Email
                    </div>
                    <a
                      href={`mailto:${config.email}`}
                      className="inline-flex min-h-[44px] items-center break-all text-base font-light tracking-wide text-white transition-colors duration-300 hover:text-[var(--color-accent)]"
                    >
                      {config.email}
                    </a>
                  </div>

                  <div className="grid gap-2">
                    <div className="text-xs font-medium uppercase tracking-widest text-white/70">
                      Hours
                    </div>
                    <div className="text-base leading-relaxed text-white/90">
                      {config.businessHours}
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

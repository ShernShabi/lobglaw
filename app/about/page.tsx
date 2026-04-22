import type { Metadata } from "next";
import Link from "next/link";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";
import {
  BEN_HEADSHOT_PRIMARY,
  BEN_HEADSHOT_SECONDARY,
  HeadshotImage,
} from "@/components/ui/HeadshotImage";

/** Set to true when the about layout includes a second portrait frame. */
const ABOUT_PAGE_SECOND_PORTRAIT = false;

export const metadata: Metadata = {
  title: `About the Attorney | ${config.businessName}`,
  description:
    "Ben Gharagozli — Constitutional law, civil rights, trial and appeals attorney since 2010.",
};

const credentials = [
  {
    label: "Education",
    items: [
      "UC Berkeley — B.A. Political Science, Highest Distinction",
      "University of Cambridge — MPhil, International Relations & Politics (Distinction in Politics of the Middle East and North Africa)",
      "UC Law San Francisco — J.D., cum laude",
    ],
  },
  {
    label: "Publications",
    items: [
      "Published: Daily Journal, Los Angeles Lawyer, Huffington Post, The Sidebar, UC Law SF International Law Review, The Iranian, Mondoweiss, The New Arab, Washington Monthly, Berkeley Political Review, Perspective Magazine",
    ],
  },
  {
    label: "Select Work Experience Prior to Opening Law Offices of Ben Gharagozli",
    items: [
      "Extern, United States District Court, Northern District of California",
      "Extern, United States Attorney's Office, Central District of California",
    ],
  },
  {
    label: "Memberships & Recognition",
    items: [
      "FIRE (Foundation for Individual Rights and Expression) Attorney Network",
      "State Bar of California",
      "Multiple published appellate decisions",
    ],
  },
];

export default function AboutPage() {
  const aboutPortraitSources = [
    BEN_HEADSHOT_PRIMARY,
    ...(ABOUT_PAGE_SECOND_PORTRAIT ? [BEN_HEADSHOT_SECONDARY] : []),
  ];

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
              ABOUT THE ATTORNEY
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              Ben Gharagozli
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Constitutional law, civil rights, trial and appeals attorney since 2010.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Photo column */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="space-y-10">
                {aboutPortraitSources.map((src) => (
                  <HeadshotImage
                    key={src}
                    src={src}
                    alt="Ben Gharagozli, Attorney"
                    quality={85}
                    caption="Ben Gharagozli, Attorney at Law"
                  />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="prose-lg max-w-none space-y-6 text-lg leading-relaxed text-neutral-800">
                <p>
                  Ben Gharagozli has been in practice since 2010, building a reputation for
                  zealous advocacy, integrity, and brilliant strategic maneuvering. He is
                  committed to providing effective, individualized and honest representation.
                </p>
                <p>
                  A graduate of UC Berkeley (Political Science, Highest Distinction) and
                  UC Law San Francisco (J.D., cum laude), Ben also holds an MPhil in
                  International Relations and Politics from the University of Cambridge. He
                  externed for a federal judge in the Northern District of California and has
                  been published in the Daily Journal, Los Angeles Lawyer, and the UC Law SF
                  International Law Review.
                </p>
                <p>
                  Ben has successfully argued before the Ninth Circuit Court of Appeals and
                  the California Court of Appeal. Multiple appellate decisions from his cases
                  have been certified for publication, establishing precedent that benefits
                  clients in future matters.
                </p>
                <p>
                  When you become a client, you get Ben&apos;s direct contact information. There are
                  no gatekeepers, no associates, and no paralegals screening your calls. Every
                  client receives individualized attention and a strategy tailored to their
                  specific circumstances and goals.
                </p>
              </div>
            </Reveal>

            {/* Credential blocks */}
            <div className="mt-16 grid gap-8 sm:grid-cols-1">
              {credentials.map((section, idx) => (
                <Reveal key={section.label} delay={idx * 100}>
                  <div className="border-l-2 border-[var(--color-accent)] pl-6 transition-all duration-300 hover:border-l-4">
                    <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
                      {section.label}
                    </div>
                    <ul className="mt-4 grid gap-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-neutral-800">
                          <span className="mt-2 h-1 w-3 shrink-0 bg-[var(--color-accent)] opacity-60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 bg-[var(--color-primary)] px-6 py-10 text-center text-white md:mt-20 md:px-12 md:py-16">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl font-semibold md:text-3xl lg:text-4xl">
              Ready to discuss your case?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg">
              Contact the firm directly. Ben personally responds to every inquiry.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90 md:w-auto"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

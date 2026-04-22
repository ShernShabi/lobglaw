import Link from "next/link";
import type { Metadata } from "next";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";
import {
  articles,
  legalPublications,
  commentaryArticles,
  type Article,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: `Media & Publications | ${config.businessName}`,
  description:
    "Published legal articles, news coverage, and media appearances featuring Ben Gharagozli.",
};

function PdfIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-0.5 ml-2 inline-block opacity-50"
      aria-label="PDF"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ArticleRow({ item }: { item: Article }) {
  const inner = (
    <>
      <div className="text-sm font-medium text-[var(--color-accent)]">
        {item.publication}{item.date ? ` · ${item.date}` : ""}
      </div>
      <div className="mt-2 break-words text-base font-medium leading-relaxed text-[var(--color-text)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-accent)] md:text-lg">
        {item.title}
        {item.linkType === "pdf" && <PdfIcon />}
        {item.linkType === "external" && (
          <span className="ml-2 text-sm opacity-50" aria-label="external link">
            ↗
          </span>
        )}
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block -mx-5 px-5 py-6 transition-colors duration-300 hover:bg-neutral-50 md:-mx-4 md:px-4 md:py-7"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="group -mx-5 px-5 py-6 md:-mx-4 md:px-4 md:py-7">
      {inner}
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
        {label}
      </div>
      <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
    </div>
  );
}

export default function NewsPage() {
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
              MEDIA &amp; PUBLICATIONS
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              In the News
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Published legal articles, media appearances, and notable coverage.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-16 px-5 py-16 md:space-y-20 md:px-8 md:py-20 lg:py-32">

        {/* Media coverage */}
        <section>
          <Reveal>
            <SectionHeading label="Media Coverage" title="News & Press" />
          </Reveal>
          <div className="divide-y divide-neutral-200">
            {articles.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 60}>
                <ArticleRow item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Legal publications */}
        <section>
          <Reveal>
            <SectionHeading label="Legal Scholarship" title="Legal Publications" />
          </Reveal>
          <div className="divide-y divide-neutral-200">
            {legalPublications.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 60}>
                <ArticleRow item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Commentary & analysis */}
        <section>
          <Reveal>
            <SectionHeading label="Opinion & Analysis" title="Commentary & Analysis" />
          </Reveal>
          <div className="divide-y divide-neutral-200">
            {commentaryArticles.map((item, idx) => (
              <Reveal key={item.slug} delay={idx * 60}>
                <ArticleRow item={item} />
              </Reveal>
            ))}
          </div>
        </section>

        <div className="border-t border-neutral-200 pt-10">
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

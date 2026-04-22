import Link from "next/link";

import { articles, type Article } from "@/lib/articles";
import { Reveal } from "@/components/ui/Reveal";

function PdfIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-0.5 ml-1.5 inline-block opacity-50"
      aria-label="PDF"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function ItemContent({ item }: { item: Article }) {
  return (
    <>
      <div className="text-sm font-medium text-[var(--color-accent)]">
        {item.publication} · {item.date}
      </div>
      <div className="mt-2 break-words text-base font-medium leading-relaxed text-[var(--color-text)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-accent)] md:text-lg">
        {item.title}
        {item.linkType === "pdf" && <PdfIcon />}
        {item.linkType === "external" && (
          <span className="ml-1.5 text-xs opacity-50" aria-label="external link">
            ↗
          </span>
        )}
      </div>
    </>
  );
}

function NewsRow({ item }: { item: Article }) {
  const rowClass =
    "group block -mx-5 px-5 py-6 transition-colors duration-300 md:-mx-4 md:px-4";

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${rowClass} hover:bg-neutral-50`}
      >
        <ItemContent item={item} />
      </a>
    );
  }

  return (
    <div className={rowClass}>
      <ItemContent item={item} />
    </div>
  );
}

export function News() {
  return (
    <section id="news" className="bg-white text-[var(--color-text)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              MEDIA &amp; PUBLICATIONS
            </div>
            <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-tight sm:text-5xl">
              In the News
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-neutral-200">
          {articles.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 80}>
              <NewsRow item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-right">
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-2 hover:opacity-80"
            >
              View All Publications →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

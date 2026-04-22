import { Reveal } from "@/components/ui/Reveal";
import { HeadshotImage } from "@/components/ui/HeadshotImage";

export function About() {
  return (
    <section id="about" className="bg-[var(--color-background)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:gap-12 md:px-8 md:py-20 lg:grid-cols-12 lg:items-start lg:py-32">
        <Reveal className="lg:col-span-5">
          <HeadshotImage
            src="/images/ben-headshot.jpg"
            alt="Ben Gharagozli, Attorney"
            caption="Ben Gharagozli, Attorney"
            priority
            quality={85}
            borderClassName="border-l-4 border-[#b8965a]"
          />
        </Reveal>

        <Reveal className="lg:col-span-7">
          <div className="max-w-2xl lg:pl-10">
            <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              ABOUT THE ATTORNEY
            </div>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <h2 className="mt-6 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Ben Gharagozli
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Ben Gharagozli has been in practice since 2010, building a
              reputation for zealous advocacy, integrity, and brilliant
              strategic maneuvering. He is committed to providing effective,
              individualized and honest representation.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              A graduate of UC Berkeley (Political Science, Highest
              Distinction) and UC Law San Francisco (J.D., cum laude),
              Ben also holds an MPhil in International Relations and Politics
              from the University of Cambridge. He externed for a federal judge
              in the Northern District of California and has been published in
              the Daily Journal, Los Angeles Lawyer, and the UC Law SF
              International Law Review.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Ben has successfully argued before the Ninth Circuit Court of
              Appeals and the California Court of Appeal. He is a member of
              FIRE (Foundation for Individual Rights and Expression) attorney
              network.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "UC Berkeley · UC Law SF · Cambridge",
                "In Practice Since 2010",
                "Published Legal Scholar",
                "FIRE Attorney Network",
              ].map((t) => (
                <div
                  key={t}
                  className="border border-neutral-300 px-4 py-3 text-sm leading-relaxed text-neutral-700 transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

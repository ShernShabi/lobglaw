import { Reveal } from "@/components/ui/Reveal";

const blocks = [
  {
    title: "Direct Access to Your Attorney",
    body: "When you become a client, you get Ben's direct contact information. No gatekeepers, no associates, no paralegals screening your calls. You work directly with the attorney handling your case — every step of the way.",
  },
  {
    title: "We Don't Operate Like a Mill",
    body: "Most firms maximize profit by signing up as many clients as possible, then assigning your case to someone who barely knows the details. We are selective in who we take on so that every case receives individualized attention and a custom strategy.",
  },
  {
    title: "Proven Results Against Larger Firms",
    body: "We have defeated large mega-firms and certified legal specialists at their own game. Our diverse experience across multiple areas of law allows us to see angles that specialists miss. It's not enough to just win — you have to win in a way that sets you up for what comes next.",
  },
] as const;

export function HowWereDifferent() {
  return (
    <section
      id="howWereDifferent"
      className="bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="text-center">
            <div className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-accent)]">
              WHY CHOOSE US
            </div>
            <div className="mx-auto mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-tight sm:text-5xl">
              How This Firm Is Different
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-14">
          {blocks.map((b, idx) => (
            <Reveal key={b.title} delay={idx * 100}>
              <div className="flex gap-4 border-l-2 border-[var(--color-accent)] pl-5 transition-all duration-300 hover:border-l-4 md:gap-10 md:pl-8">
                <div className="hidden font-light text-6xl leading-none text-[var(--color-accent)] opacity-25 md:block min-w-[72px]">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                    {b.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                    {b.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

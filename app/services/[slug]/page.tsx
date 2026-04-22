import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import config from "@/site.config";
import { Reveal } from "@/components/ui/Reveal";

const services = {
  "constitutional-law": {
    title: "Constitutional Law",
    tagline: "Defending Your Fundamental Rights",
    paragraphs: [
      "This firm defends individuals whose constitutional rights have been threatened or violated. Constitutional cases can arise in many contexts. Whatever the setting, constitutional rights are not optional and they are worth fighting for.",
      "The firm's constitutional law practice draws on deep familiarity with First Amendment doctrine, including protections for free speech, religious liberty, and political association.",
      "Ben Gharagozli has successfully challenged unconstitutional policies in many different contexts. If you believe your constitutional rights have been violated, contact us to discuss your situation. Early action often matters — evidence must be preserved and certain claims have strict time limits.",
    ],
  },
  "civil-rights-litigation": {
    title: "Civil Rights Litigation",
    tagline: "Standing Up Against Retaliation and Abuse of Power",
    paragraphs: [
      "Civil rights litigation involves holding powerful institutions and individuals accountable when they violate the rights of individuals. Clients in this area of the practice have included professors, political activists, students and community members. The firm has taken on well-funded opponents and won.",
      "Civil rights cases can be high-stakes and emotionally difficult. The firm approaches them with both rigorous legal preparation and a genuine commitment to the client's goals.",
      "If you believe you have been subjected to discrimination, retaliation, or abuse of power, contact us to discuss whether a civil rights claim applies to your situation.",
    ],
  },
  "anti-slapp-litigation": {
    title: "Anti-SLAPP Litigation",
    tagline: "Protecting Your Right to Speak Out",
    paragraphs: [
      "A SLAPP suit (Strategic Lawsuit Against Public Participation) is a lawsuit filed not to win on the merits, but to intimidate and silence critics through the burden and expense of litigation. They are commonly filed against journalists, activists, tenants, online reviewers, and anyone who speaks out against a powerful party. California law provides strong tools to fight back.",
      "The firm has extensive experience both filing and defending against anti-SLAPP motions. A successful motion can result in early dismissal of the case and an award of attorney's fees against the party that filed the meritless suit. Anti-SLAPP motions must be filed quickly after service of the lawsuit, so timing is critical — contact us as soon as possible if you have been served.",
      "Whether you are a defendant needing to strike back against a retaliatory lawsuit, or a plaintiff whose case is facing an anti-SLAPP challenge, the firm can evaluate your position and develop a strategy. The analysis of what speech or conduct qualifies as protected activity is nuanced, and experience in this area of law matters.",
    ],
  },
  appeals: {
    title: "Appeals",
    tagline: "Reversing Unjust Outcomes Through Appellate Advocacy",
    paragraphs: [
      "Appellate work is different from trial work — it requires identifying the strongest grounds for reversal from an existing record, constructing a persuasive written argument, and defending that argument in oral argument. The firm has successfully handled appeals before the California Court of Appeal and the Ninth Circuit Court of Appeals.",
      "Multiple decisions from the firm's cases have been certified for publication. Published decisions are significant because they establish binding precedent for future cases — not just for the client, but for others facing similar circumstances.",
      "If you received an adverse ruling at the trial level, an appeal may be an option. Contact us to discuss whether your situation presents viable grounds for review.",
    ],
  },
} as const;

type PageParams = { slug: string };

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  if (!service) return {};
  return {
    title: `${service.title} Attorney | ${config.businessName}`,
    description: service.paragraphs[0].slice(0, 160),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
  if (!service) notFound();

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
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)] transition-all duration-300 hover:gap-3 hover:opacity-80"
            >
              ← Practice Areas
            </Link>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              {service.title}
            </h1>
            <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            <p className="mt-4 text-base font-light leading-relaxed text-white/85 md:text-lg">
              {service.tagline}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20 lg:py-32">
        <Reveal>
          <div className="space-y-6">
            {service.paragraphs.map((para, idx) => (
              <p key={idx} className="text-base leading-relaxed text-neutral-800 md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-12 bg-[var(--color-primary)] px-6 py-8 text-white md:mt-16 md:px-12 md:py-12">
            <h2 className="font-[family-name:var(--font-serif)] text-xl font-semibold md:text-2xl lg:text-3xl">
              Need help with {service.title}?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-200 md:text-lg">
              Contact the firm directly. Ben personally responds to every inquiry.
            </p>
            <div className="mt-8 flex items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.03] hover:opacity-90 md:w-auto"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

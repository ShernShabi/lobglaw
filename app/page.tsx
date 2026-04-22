import config from "@/site.config";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { HowWereDifferent } from "@/components/sections/HowWereDifferent";
import { News } from "@/components/sections/News";
import { Services } from "@/components/sections/Services";
import { Successes } from "@/components/sections/Successes";
import { Testimonials } from "@/components/sections/Testimonials";

const sectionMap = {
  hero: <Hero />,
  about: <About />,
  practiceAreas: <Services />,
  howWereDifferent: <HowWereDifferent />,
  successes: <Successes />,
  testimonials: <Testimonials />,
  news: <News />,
  cta: <CTA />,
  faq: <FAQ />,
} as const satisfies Record<string, React.ReactNode>;

function isSectionKey(key: string): key is keyof typeof sectionMap {
  return key in sectionMap;
}

export default function HomePage() {
  return (
    <>
      {config.homeSections.map((key) =>
        isSectionKey(key) ? <div key={key}>{sectionMap[key]}</div> : null
      )}
    </>
  );
}

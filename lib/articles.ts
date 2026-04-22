export type LinkType = "pdf" | "external";

export type Article = {
  slug: string;
  title: string;
  publication: string;
  date: string;
  /** URL to open — relative (PDF) or absolute (external site) */
  href?: string;
  /** Controls which icon appears next to the title */
  linkType?: LinkType;
};

/** Media coverage — shown on homepage and at top of /news page */
export const articles: Article[] = [
  {
    slug: "nyt-civil-rights-2022",
    title: "Quoted in The New York Times on data privacy and civil rights litigation",
    publication: "The New York Times",
    date: "July 2022",
    href: "https://www.nytimes.com/2022/07/20/technology/twitter-saudi-trial-ahmad-abouammo.html",
    linkType: "external",
  },
  {
    slug: "la-times-2012",
    title: "Featured in coverage of high-profile criminal defense case",
    publication: "Los Angeles Times",
    date: "October 2012",
    href: "https://www.latimes.com/local/la-xpm-2012-oct-20-la-me-bling-ring-20121020-story.html",
    linkType: "external",
  },
  {
    slug: "al-bawaba-2019",
    title: "Quoted on social media platform accountability and user data protection",
    publication: "Al Bawaba",
    date: "November 2019",
    href: "https://www.albawaba.com/news/twitter-mole-provides-ksa-info-journalist-who-dies-under-torture-1320272",
    linkType: "external",
  },
  {
    slug: "sfsu-victory",
    title: "Victory in federal lawsuit defending university professor's rights",
    publication: "Palestine Legal",
    date: "October 2018",
    href: "https://palestinelegal.org/news/2018/10/30/lawfare-case-thrown-out",
    linkType: "external",
  },
  {
    slug: "the-bling-ring",
    title: 'Featured in "The Bling Ring" by Nancy Jo Sales',
    publication: "It Books",
    date: "2013",
    href: "https://www.amazon.com/Bling-Ring-Fame-Obsessed-Hollywood-Shocked/dp/0062245538",
    linkType: "external",
  },
];

/** Legal publications — shown only on /news page */
export const legalPublications: Article[] = [
  {
    slug: "huffpost-iran-2012",
    title: "An Israeli Military Strike Against Iran Would Be Illegal",
    publication: "Huffington Post",
    date: "March 2012",
  },
  {
    slug: "sidebar-expedited-jury-2011",
    title: "Removing Uncertainty in Determining Liability: The California Expedited Jury Trial Act",
    publication: "The Sidebar",
    date: "March 2011",
  },
  {
    slug: "sidebar-frivolous-2011",
    title: "Employers Lose Safeguard Against Employees' Frivolous Lawsuits",
    publication: "The Sidebar",
    date: "January 2011",
  },
  {
    slug: "uclawsf-intl-law-2010",
    title: "War of Words or a Regional Disaster?",
    publication: "UC Law SF International Law Review",
    date: "2010",
  },
];

/** Commentary & analysis — shown only on /news page */
export const commentaryArticles: Article[] = [
  {
    slug: "iranian-propaganda-2019",
    title: "Untangling the Web of the Saudi-Israeli-US Propaganda War on Iran",
    publication: "The Iranian",
    date: "February 2019",
  },
  {
    slug: "mondoweiss-likudism-2018",
    title: "'Likudism' invades the academy",
    publication: "Mondoweiss",
    date: "May 2018",
  },
  {
    slug: "new-arab-iran-deal-2018",
    title: "So Trump violated the Iran deal, now what?",
    publication: "The New Arab",
    date: "May 2018",
  },
  {
    slug: "new-arab-ghosts-2018",
    title: "The ghosts of 1979: Why Iran protests won't bring regime change",
    publication: "The New Arab",
    date: "January 2018",
  },
  {
    slug: "new-arab-trump-mideast-2017",
    title: "Trump's Middle East policy is absurd and incoherent",
    publication: "The New Arab",
    date: "July 2017",
  },
  {
    slug: "new-arab-rouhani-2017",
    title: "Rouhani's landslide quells risk of escalation",
    publication: "The New Arab",
    date: "May 2017",
  },
  {
    slug: "new-arab-iran-race-2017",
    title: "Iran's presidential race heats up",
    publication: "The New Arab",
    date: "May 2017",
  },
  {
    slug: "new-arab-iran-elections-2017",
    title: "Iran elections 2017: A new direction for foreign policy?",
    publication: "The New Arab",
    date: "May 2017",
  },
  {
    slug: "new-arab-who-is-who-2017",
    title: "A who's who of Iran's presidential candidates",
    publication: "The New Arab",
    date: "May 2017",
  },
  {
    slug: "new-arab-guide-2017",
    title: "A step by step guide to Iran's presidential elections",
    publication: "The New Arab",
    date: "May 2017",
  },
  {
    slug: "huffpost-iran-populism-2017",
    title: "This too shall pass(?) What Iran's brush with populism can teach America",
    publication: "Huffington Post",
    date: "April 2017",
  },
  {
    slug: "washington-monthly-amnesty-2013",
    title: "Stop Worrying About Amnesty for Undocumented Immigrants",
    publication: "Washington Monthly",
    date: "August 2013",
  },
  {
    slug: "bpr-sunni-shia",
    title: "Is he Sunni or Shia?",
    publication: "Berkeley Political Review",
    date: "",
  },
  {
    slug: "perspective-hezbollah-2006",
    title: "Iran's Relationship with Hezbollah",
    publication: "Perspective Magazine",
    date: "Fall 2006",
  },
  {
    slug: "bpr-israel-middle-path",
    title: "Israel's Unsuccessful Middle Path",
    publication: "Berkeley Political Review",
    date: "",
  },
  {
    slug: "perspective-nuclear-2006",
    title: "Iran's Nuclear Program",
    publication: "Perspective Magazine",
    date: "Spring 2006",
  },
  {
    slug: "bpr-iran-hardliner",
    title: "Rejecting Reform: Iran Chooses Hardliner for President",
    publication: "Berkeley Political Review",
    date: "",
  },
];

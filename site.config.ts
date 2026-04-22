export type Vertical = 'law' | 'dental' | 'hvac' | 'landscaping';

export type SiteConfig = {
  vertical: Vertical;
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  serviceLabel: string;
  teamLabel: string;
  ctaText: string;
  businessHours: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  homeSections: string[];
  seo: {
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
  };
  schema: {
    type: string;
    priceRange: string;
  };
};

const config: SiteConfig = {
  vertical: 'law',
  businessName: 'Law Offices of Ben Gharagozli',
  tagline: 'Constitutional Law · Civil Rights · Trials · Appeals',
  phone: '(310) 272-9211',
  email: 'ben@lobglaw.com',
  address: '7655 Winnetka Avenue, #2010',
  city: 'Winnetka',
  state: 'CA',
  serviceLabel: 'Practice Areas',
  teamLabel: 'About the Attorney',
  ctaText: 'Contact Us',
  businessHours: 'Monday–Friday, 8:00 AM – 5:00 PM',
  colors: {
    primary: '#2b2b2b',
    secondary: '#4a4a4a',
    accent: '#b8965a',
    background: '#f5f5f3',
    text: '#1a1a1a',
  },
  homeSections: [
    'hero',
    'about',
    'practiceAreas',
    'howWereDifferent',
    'successes',
    'testimonials',
    'news',
    'cta',
  ],
  seo: {
    titleTemplate: '%s | Law Offices of Ben Gharagozli',
    defaultDescription:
      'Constitutional law, civil rights litigation, and appeals attorney serving Los Angeles and Orange County.',
    keywords: ['constitutional law', 'civil rights litigation', 'appeals attorney', 'civil rights attorney Los Angeles'],
  },
  schema: {
    type: 'LegalService',
    priceRange: '$$',
  },
};

export default config;
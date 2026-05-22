import type { HeroVariant } from './types';

export type LandingPageConfig = {
  id: string;                 // e.g. "example-lp"
  vertical: string;           // e.g. "saas"
  slug: string;               // e.g. "fleet"
  theme: 'light' | 'dark';
  heroVariant: HeroVariant;
};

export const DEFAULT_LOCALE = 'en';
export const DEFAULT_LP_ID = 'example-lp';

export const landingPages: LandingPageConfig[] = [
  { id: 'agency-lp', vertical: 'agency', slug: 'landing-pages', theme: 'light', heroVariant: 'hero-text-contact' },
  { id: 'example-lp', vertical: 'saas', slug: 'fleet', theme: 'dark', heroVariant: 'hero-text-contact' },
];

export function getDefaultLandingPage(locale: 'en' | 'de'): { vertical: string; slug: string } {
  // TODO: Support locale-specific landing pages in the future
  // For now, returns the first entry in landingPages regardless of locale
  void locale; // Reserved for future locale-specific page selection
  const firstLP = landingPages[0];
  if (!firstLP) {
    throw new Error('No landing pages configured');
  }
  return {
    vertical: firstLP.vertical,
    slug: firstLP.slug,
  };
}

export function getDefaultLandingPageRoute(): string {
  const defaultLP = getDefaultLandingPage(DEFAULT_LOCALE);
  return `/${DEFAULT_LOCALE}/${defaultLP.vertical}/${defaultLP.slug}`;
}

export function findLandingPageConfig(
  locale: 'en' | 'de',
  vertical: string,
  slug: string
): LandingPageConfig | null {
  const config = landingPages.find(
    (lp) => lp.vertical === vertical && lp.slug === slug
  );
  return config || null;
}

export function findLandingPageConfigById(id: string): LandingPageConfig | null {
  const config = landingPages.find((lp) => lp.id === id);
  return config || null;
}


export type SectionHeroCopy = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
};

export type HeroVariant = 'hero-split-phone' | 'hero-centered-area' | 'hero-text-contact';

export type SectionSocialProofCopy = {
  label?: string;
};

export type SectionValuePropsCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionFeaturesCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionPricingCopy = {
  heading: string;
  subtitle: string;
  plans: {
    name: string;
    price: string;
    description: string;
    features: string[];
    ctaLabel: string;
  }[];
};

export type SectionFAQCopy = {
  heading: string;
  subtitle: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export type SectionFinalCtaCopy = {
  heading: string;
  subtitle: string;
  ctaLabel: string;
};

export type SectionTestimonialsCopy = {
  heading: string;
  subtitle: string;
  testimonials: {
    quote: string;
    name: string;
    role: string;
    metric?: string;
  }[];
};

export type SectionDeepDiveCopy = {
  heading: string;
  subtitle: string;
  steps: {
    title: string;
    body: string;
  }[];
};

export type SectionUseCasesCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionIntegrationsCopy = {
  heading: string;
  subtitle: string;
  integrations: {
    name: string;
  }[];
};

export type SectionSecurityCopy = {
  heading: string;
  subtitle: string;
  items: {
    title: string;
    body: string;
  }[];
};

export type SectionMetricsCopy = {
  heading: string;
  subtitle: string;
  metrics: {
    value: string;
    label: string;
    description: string;
  }[];
};

export type MockDashboardCopy = {
  user: string;
  sidebar: string[];
  pageTitle: string;
  metrics: {
    label: string;
    value: string;
    trend?: string;
  }[];
  table: {
    title: string;
    columns: string[];
    rows: string[][];
  };
};

export type PageCopyConfig = {
  hero: SectionHeroCopy;
  socialProof: SectionSocialProofCopy;
  valueProps: SectionValuePropsCopy;
  features: SectionFeaturesCopy;
  deepDive?: SectionDeepDiveCopy;
  useCases?: SectionUseCasesCopy;
  integrations?: SectionIntegrationsCopy;
  security?: SectionSecurityCopy;
  metrics?: SectionMetricsCopy;
  testimonials?: SectionTestimonialsCopy;
  pricing?: SectionPricingCopy;
  faq?: SectionFAQCopy;
  finalCta: SectionFinalCtaCopy;
  mockDashboard?: MockDashboardCopy;
};


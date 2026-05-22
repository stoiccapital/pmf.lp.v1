import React from 'react';
import { ThemeName, themes } from '../config/theme';
import type { HeroVariant, PageCopyConfig } from '../config/types';
import { getMessages } from '../locales';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../sections/Hero';
import { Pain } from '../sections/Pain';
import { HowItWorks } from '../sections/HowItWorks';
import { Pricing } from '../sections/Pricing';
import { FAQ } from '../sections/FAQ';
import { FinalCTA } from '../sections/FinalCTA';
import { findLandingPageConfigById } from '../config/lp-config';

export type LandingPageTemplateProps = {
  theme: ThemeName;
  copy: PageCopyConfig;
  locale: 'en' | 'de';
  lpId?: string;
};

/**
 * Landing Page Template
 * Section order: Navbar → Hero → Pain → HowItWorks → Pricing → FAQ → FinalCTA → Footer
 */
export function LandingPageTemplate({
  theme,
  copy,
  locale,
  lpId,
}: LandingPageTemplateProps) {
  const themeConfig = themes[theme];
  const messages = getMessages(locale);
  const defaultHeroVariant: HeroVariant = 'hero-split-phone';
  const lpConfig = lpId ? findLandingPageConfigById(lpId) : null;
  const heroVariant = lpConfig?.heroVariant ?? defaultHeroVariant;

  return (
    <div className={`min-h-screen ${themeConfig.background} ${themeConfig.font}`}>
      <Navbar theme={theme} labels={messages.navbar} locale={locale} />
      <main>
        <Hero copy={copy.hero} theme={theme} heroVariant={heroVariant} mockDashboard={copy.mockDashboard} />
        <Pain copy={copy.valueProps} theme={theme} />
        <HowItWorks copy={copy.features} theme={theme} />
        <Pricing copy={copy.pricing || { heading: 'Simple pricing', subtitle: 'Choose the plan that works for you', plans: [] }} theme={theme} />
        <FAQ theme={theme} content={copy.faq || { heading: 'Frequently asked questions', subtitle: 'Everything you need to know', items: [] }} />
        <FinalCTA copy={copy.finalCta} theme={theme} />
      </main>
      <Footer theme={theme} labels={messages.footer} />
    </div>
  );
}

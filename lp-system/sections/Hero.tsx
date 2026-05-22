import React from 'react';
import type { HeroVariant, SectionHeroCopy, MockDashboardCopy } from '../config/types';
import { CTAButton } from '../components/ui/CTAButton';
import { CTAGroup } from '../components/ui/CTAGroup';
import { SplitGrid } from '../components/layouts/SplitGrid';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { spacing, typography, maxTextWidth, globalBackground, ColorTheme } from '../config/design-system';
import { MockDashboard } from '../components/MockDashboard';

export type HeroProps = {
  copy: SectionHeroCopy;
  theme: ColorTheme;
  heroVariant?: HeroVariant;
  mockDashboard?: MockDashboardCopy;
};

/**
 * Hero Section
 * Layout: SplitGrid
 * Alignment: Text column LEFT aligned
 * Section spacing: Top section.y.2xl, Bottom section.y.2xl
 * Internal spacing: H1 → subtitle block.y.md, Subtitle → CTAGroup block.y.md
 */
export function Hero({ copy, theme, heroVariant = 'hero-split-phone', mockDashboard }: HeroProps) {
  const renderHeadline = () => (
    <h1 className={`${typography.h1} text-text-primary ${spacing.block.y.md}`}>
      {copy.title}
    </h1>
  );

  const renderSubtitle = (align: 'left' | 'center') => {
    if (!copy.subtitle) {
      return null;
    }

    const alignClass = align === 'center' ? 'mx-auto' : '';

    return (
      <p className={`${typography.body} text-text-secondary ${maxTextWidth} ${spacing.block.y.md} ${alignClass}`.trim()}>
        {copy.subtitle}
      </p>
    );
  };

  const renderCtas = (align: 'left' | 'center') => (
    <div className={spacing.block.y.md}>
      <CTAGroup align={align} stack="horizontal">
        <CTAButton variant="primary" theme={theme} label={copy.primaryCtaLabel} />
        {copy.secondaryCtaLabel && (
          <CTAButton variant="ghost" theme={theme} label={copy.secondaryCtaLabel} />
        )}
      </CTAGroup>
    </div>
  );

  const renderContactBlock = () => null;

  const baseSectionClass = `${spacing.section.y['2xl']} ${globalBackground.neutral.darkest}`;

  switch (heroVariant) {
    case 'hero-centered-area':
      return (
        <section id="hero" data-section-id="hero" className={baseSectionClass}>
          <CenteredLayout align="center">
            <div className={spacing.block.y['2xl']}>
              {renderHeadline()}
              {renderSubtitle('center')}
              {renderCtas('center')}
            </div>
            <div className="w-full max-w-xl lg:max-w-2xl aspect-video rounded-xl border border-border-subtle bg-bg-neutral flex items-center justify-center">
              <div className="text-text-muted text-sm">Preview</div>
            </div>
          </CenteredLayout>
        </section>
      );
    case 'hero-text-contact':
      return (
        <section id="hero" data-section-id="hero" className={baseSectionClass}>
          <CenteredLayout>
            <div className="text-left">
              {renderHeadline()}
              {renderSubtitle('left')}
              {renderCtas('left')}
              {renderContactBlock()}
            </div>
            {mockDashboard && (
              <div className={spacing.block.y.md}>
                <MockDashboard {...mockDashboard} />
              </div>
            )}
          </CenteredLayout>
        </section>
      );
    case 'hero-split-phone':
    default:
      return (
        <section id="hero" data-section-id="hero" className={baseSectionClass}>
          <CenteredLayout>
            <SplitGrid>
              <div className="text-left">
                {renderHeadline()}
                {renderSubtitle('left')}
                {renderCtas('left')}
              </div>
              {mockDashboard && <MockDashboard {...mockDashboard} />}
            </SplitGrid>
          </CenteredLayout>
        </section>
      );
  }
}

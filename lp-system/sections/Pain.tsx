import React from 'react';
import type { SectionValuePropsCopy } from '../config/types';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { FeatureCard } from '../components/ui/FeatureCard';
import { spacing, typography, globalBackground, ColorTheme } from '../config/design-system';

export type PainProps = {
  copy: SectionValuePropsCopy;
  theme: ColorTheme;
};

export function Pain({ copy, theme }: PainProps) {
  return (
    <section id="pain" data-section-id="pain" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <CenteredLayout>
        <h2 className={`${typography.h2} text-text-primary ${spacing.block.y.md}`}>
          {copy.heading}
        </h2>
        <p className={`${typography.body} text-text-secondary ${spacing.block.y.md}`}>
          {copy.subtitle}
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-3 ${spacing.grid.x.md} ${spacing.grid.y.md}`}>
          {copy.items.map((item, index) => (
            <FeatureCard
              key={index}
              icon={<span className={typography.textXs}>⚡</span>}
              title={item.title}
              body={item.body}
              theme={theme}
            />
          ))}
        </div>
      </CenteredLayout>
    </section>
  );
}

import React from 'react';
import type { SectionFeaturesCopy } from '../config/types';
import { SingleColumn } from '../components/layouts/SingleColumn';
import { spacing, typography, globalBackground, ColorTheme } from '../config/design-system';

export type HowItWorksProps = {
  copy: SectionFeaturesCopy;
  theme: ColorTheme;
};

export function HowItWorks({ copy, theme }: HowItWorksProps) {
  void theme;

  return (
    <section id="how-it-works" data-section-id="how-it-works" className={`${spacing.section.y.xl} ${globalBackground.neutral.darkest}`}>
      <SingleColumn>
        <div className={spacing.block.y.md}>
          <h2 className={`${typography.h2} text-text-primary`}>
            {copy.heading}
          </h2>
        </div>
        <div className={spacing.block.y.md}>
          <p className={`${typography.body} text-text-secondary`}>
            {copy.subtitle}
          </p>
        </div>
        {copy.items.map((item, index) => (
          <div key={index} className={index < copy.items.length - 1 ? spacing.block.y.xl : ''}>
            <div className="text-left">
              <div className={spacing.block.y.md}>
                <h3 className={`${typography.h3} text-text-primary`}>
                  {item.title}
                </h3>
              </div>
              <p className={`${typography.body} text-text-secondary`}>
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </SingleColumn>
    </section>
  );
}

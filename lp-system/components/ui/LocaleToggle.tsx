'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { type Locale, LOCALES } from '../../config/preferences';

export function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const pathParts = pathname.split('/').filter(Boolean);
  const firstSegment = pathParts[0];

  let currentLocale: Locale = 'en';
  if (firstSegment && LOCALES.includes(firstSegment as Locale)) {
    currentLocale = firstSegment as Locale;
  }

  const navigateTo = (locale: Locale) => {
    const newPathParts = [locale, ...pathParts.slice(1)];
    router.replace('/' + newPathParts.join('/'));
  };

  return (
    <div className="flex items-center gap-1">
      {LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => navigateTo(locale)}
            aria-label={`Switch to ${locale === 'en' ? 'English' : 'German'}`}
            className={`px-2 py-1 text-sm rounded cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ring-focus ${
              isActive
                ? 'text-text-primary font-medium'
                : 'text-text-muted hover:text-text-secondary hover:bg-bg-neutral'
            }`}
          >
            {locale.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

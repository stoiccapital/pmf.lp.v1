import type { PageCopyConfig } from '../config/types';
import enData from './en.json';
import deData from './de.json';

const localeData: Record<'en' | 'de', Record<string, PageCopyConfig>> = {
  en: enData as Record<string, PageCopyConfig>,
  de: deData as Record<string, PageCopyConfig>,
};

export function loadPageCopy(
  locale: 'en' | 'de',
  lpId: string
): PageCopyConfig | null {
  const data = localeData[locale];
  return data[lpId] || null;
}

export type ShellMessages = {
  navbar: {
    brand: string;
    links: {
      features: string;
      pricing: string;
      howItWorks: string;
      faq: string;
    };
    cta: string;
    ariaLabels: {
      goToHomepage: string;
      switchToEnglish: string;
      switchToGerman: string;
      openMenu: string;
      closeMenu: string;
    };
  };
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
};

const shellMessages: Record<'en' | 'de', ShellMessages> = {
  en: {
    navbar: {
      brand: 'Logo',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        howItWorks: 'How it works',
        faq: 'FAQ',
      },
      cta: 'Get Started',
      ariaLabels: {
        goToHomepage: 'Go to homepage',
        switchToEnglish: 'Switch to English',
        switchToGerman: 'Switch to German',
        openMenu: 'Open main menu',
        closeMenu: 'Close main menu',
      },
    },
    footer: {
      copyright: '© 2024 Company Name. All rights reserved.',
      links: {
        privacy: 'Privacy',
        terms: 'Terms',
        contact: 'Contact',
      },
    },
  },
  de: {
    navbar: {
      brand: 'Logo',
      links: {
        features: 'Funktionen',
        pricing: 'Preise',
        howItWorks: 'Wie es funktioniert',
        faq: 'FAQ',
      },
      cta: 'Loslegen',
      ariaLabels: {
        goToHomepage: 'Zur Startseite',
        switchToEnglish: 'Zu Englisch wechseln',
        switchToGerman: 'Zu Deutsch wechseln',
        openMenu: 'Hauptmenü öffnen',
        closeMenu: 'Hauptmenü schließen',
      },
    },
    footer: {
      copyright: '© 2024 Firmenname. Alle Rechte vorbehalten.',
      links: {
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        contact: 'Kontakt',
      },
    },
  },
};

export function getMessages(locale: 'en' | 'de'): ShellMessages {
  return shellMessages[locale];
}


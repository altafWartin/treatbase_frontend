// i18n-setup.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import frTranslations from './locales/fr.json';
import itTranslations from './locales/it.json';
import esTranslations from './locales/es.json';
import ptTranslations from './locales/pt.json';
import hiTranslations from './locales/hi.json';
import jaTranslations from './locales/ja.json';
import zhTranslations from './locales/zh.json';

// Initialize i18next
const resources = {
  en: {
    translation: enTranslations,
  },
  de: {
    translation: deTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  it: {
    translation: itTranslations,
  },
  es: {
    translation: esTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
  hi: {
    translation: hiTranslations,
  },
  ja: {
    translation: jaTranslations,
  },
  zh: {
    translation: zhTranslations,
  },
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    keySeparator: false, // Disable key nesting in translation strings
  });

export default i18n;

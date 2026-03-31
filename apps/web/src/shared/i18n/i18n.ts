import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from '@shared/i18n/resources';

import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';

const LANGUAGE_STORAGE_KEY = 'app-language';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const isSupported = SUPPORTED_LANGUAGES.some(
    (lang) => lang === savedLanguage,
  );

  return isSupported && savedLanguage ? savedLanguage : DEFAULT_LANGUAGE;
};

i18n.on('languageChanged', (lng: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  if (!SUPPORTED_LANGUAGES.some((lang) => lang === lng)) {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  document.documentElement.lang = lng;
});

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: [...SUPPORTED_LANGUAGES],

  ns: [
    'common',
    'navigation',
    'todo',
    'empty',
    'dashboard',
    'fitAnalysis',
    'roadmap',
    'userPopover',
    'myPage',
  ],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;

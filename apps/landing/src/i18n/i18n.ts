import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '@i18n/constants';
import { resources } from '@i18n/resources';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const LANGUAGE_STORAGE_KEY = 'landing-language';

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const isSupported = SUPPORTED_LANGUAGES.some(
    (language) => language === savedLanguage,
  );

  return isSupported && savedLanguage ? savedLanguage : DEFAULT_LANGUAGE;
};

i18n.on('languageChanged', (language: string) => {
  if (!SUPPORTED_LANGUAGES.some((item) => item === language)) {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language;
});

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: [...SUPPORTED_LANGUAGES],
  ns: ['landing'],
  defaultNS: 'landing',
  interpolation: { escapeValue: false },
});

export default i18n;

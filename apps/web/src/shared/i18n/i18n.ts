import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from '@shared/i18n/resources';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ko', 'vi', 'zh-CN'],
  ns: ['common, todo'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

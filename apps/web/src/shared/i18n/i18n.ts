import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@shared/i18n/locales/en/common.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    ko: { common: koCommon },
    vi: { common: viCommon },
    'zh-CN': { common: zhCnCommon },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'ko', 'vi', 'zh-CN'],
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@shared/i18n/locales/en/common.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, todo: enTodo },
    ko: { common: koCommon, todo: koTodo },
    vi: { common: viCommon, todo: viTodo },
    'zh-CN': { common: zhCnCommon, todo: zhCnTodo },
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

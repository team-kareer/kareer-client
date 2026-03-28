import enCommon from '@shared/i18n/locales/en/common.json';
import enDashboard from '@shared/i18n/locales/en/dashboard.json';
import enEmpty from '@shared/i18n/locales/en/empty.json';
import enNavigation from '@shared/i18n/locales/en/navigation.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koDashboard from '@shared/i18n/locales/ko/dashboard.json';
import koEmpty from '@shared/i18n/locales/ko/empty.json';
import koNavigation from '@shared/i18n/locales/ko/navigation.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viDashboard from '@shared/i18n/locales/vi/dashboard.json';
import viEmpty from '@shared/i18n/locales/vi/empty.json';
import viNavigation from '@shared/i18n/locales/vi/navigation.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnDashboard from '@shared/i18n/locales/zh-CN/dashboard.json';
import zhCnEmpty from '@shared/i18n/locales/zh-CN/empty.json';
import zhCnNavigation from '@shared/i18n/locales/zh-CN/navigation.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

export const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    todo: enTodo,
    empty: enEmpty,
    dashboard: enDashboard,
  },
  ko: {
    common: koCommon,
    navigation: koNavigation,
    todo: koTodo,
    empty: koEmpty,
    dashboard: koDashboard,
  },
  vi: {
    common: viCommon,
    navigation: viNavigation,
    todo: viTodo,
    empty: viEmpty,
    dashboard: viDashboard,
  },
  'zh-CN': {
    common: zhCnCommon,
    navigation: zhCnNavigation,
    todo: zhCnTodo,
    empty: zhCnEmpty,
    dashboard: zhCnDashboard,
  },
} as const;

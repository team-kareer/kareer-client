import enCommon from '@shared/i18n/locales/en/common.json';
import enDashboard from '@shared/i18n/locales/en/dashboard.json';
import enMyPage from '@shared/i18n/locales/en/myPage.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koDashboard from '@shared/i18n/locales/ko/dashboard.json';
import koMyPage from '@shared/i18n/locales/ko/myPage.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viDashboard from '@shared/i18n/locales/vi/dashboard.json';
import viMyPage from '@shared/i18n/locales/vi/myPage.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnDashboard from '@shared/i18n/locales/zh-CN/dashboard.json';
import zhCnMyPage from '@shared/i18n/locales/zh-CN/myPage.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

export const resources = {
  en: {
    common: enCommon,
    todo: enTodo,
    dashboard: enDashboard,
    myPage: enMyPage,
  },
  ko: {
    common: koCommon,
    todo: koTodo,
    dashboard: koDashboard,
    myPage: koMyPage,
  },
  vi: {
    common: viCommon,
    todo: viTodo,
    dashboard: viDashboard,
    myPage: viMyPage,
  },
  'zh-CN': {
    common: zhCnCommon,
    todo: zhCnTodo,
    dashboard: zhCnDashboard,
    myPage: zhCnMyPage,
  },
} as const;

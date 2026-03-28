import enCommon from '@shared/i18n/locales/en/common.json';
import enDashboard from '@shared/i18n/locales/en/dashboard.json';
import enRoadmap from '@shared/i18n/locales/en/roadmap.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koDashboard from '@shared/i18n/locales/ko/dashboard.json';
import koRoadmap from '@shared/i18n/locales/ko/roadmap.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viDashboard from '@shared/i18n/locales/vi/dashboard.json';
import viRoadmap from '@shared/i18n/locales/vi/roadmap.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnDashboard from '@shared/i18n/locales/zh-CN/dashboard.json';
import zhCnRoadmap from '@shared/i18n/locales/zh-CN/roadmap.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

export const resources = {
  en: {
    common: enCommon,
    todo: enTodo,
    dashboard: enDashboard,
    roadmap: enRoadmap,
  },
  ko: {
    common: koCommon,
    todo: koTodo,
    dashboard: koDashboard,
    roadmap: koRoadmap,
  },
  vi: {
    common: viCommon,
    todo: viTodo,
    dashboard: viDashboard,
    roadmap: viRoadmap,
  },
  'zh-CN': {
    common: zhCnCommon,
    todo: zhCnTodo,
    dashboard: zhCnDashboard,
    roadmap: zhCnRoadmap,
  },
} as const;

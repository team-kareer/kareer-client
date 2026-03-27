import enCommon from '@shared/i18n/locales/en/common.json';
import enNavigation from '@shared/i18n/locales/en/navigation.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koNavigation from '@shared/i18n/locales/ko/navigation.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viNavigation from '@shared/i18n/locales/vi/navigation.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnNavigation from '@shared/i18n/locales/zh-CN/navigation.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

export const resources = {
  en: { common: enCommon, navigation: enNavigation, todo: enTodo },
  ko: { common: koCommon, navigation: koNavigation, todo: koTodo },
  vi: { common: viCommon, navigation: viNavigation, todo: viTodo },
  'zh-CN': {
    common: zhCnCommon,
    navigation: zhCnNavigation,
    todo: zhCnTodo,
  },
} as const;

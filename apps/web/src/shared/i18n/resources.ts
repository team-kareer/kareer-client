import enCommon from '@shared/i18n/locales/en/common.json';
import enEmpty from '@shared/i18n/locales/en/empty.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koEmpty from '@shared/i18n/locales/ko/empty.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viEmpty from '@shared/i18n/locales/vi/empty.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnEmpty from '@shared/i18n/locales/zh-CN/empty.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

export const resources = {
  en: { common: enCommon, todo: enTodo, empty: enEmpty },
  ko: { common: koCommon, todo: koTodo, empty: koEmpty },
  vi: { common: viCommon, todo: viTodo, empty: viEmpty },
  'zh-CN': { common: zhCnCommon, todo: zhCnTodo, empty: zhCnEmpty },
} as const;

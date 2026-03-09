import enCommon from '@shared/i18n/locales/en/common.json';
import enTodo from '@shared/i18n/locales/en/todo.json';
import koCommon from '@shared/i18n/locales/ko/common.json';
import koTodo from '@shared/i18n/locales/ko/todo.json';
import viCommon from '@shared/i18n/locales/vi/common.json';
import viTodo from '@shared/i18n/locales/vi/todo.json';
import zhCnCommon from '@shared/i18n/locales/zh-CN/common.json';
import zhCnTodo from '@shared/i18n/locales/zh-CN/todo.json';

export const resources = {
  en: { common: enCommon, todo: enTodo },
  ko: { common: koCommon, todo: koTodo },
  vi: { common: viCommon, todo: viTodo },
  'zh-CN': { common: zhCnCommon, todo: zhCnTodo },
} as const;

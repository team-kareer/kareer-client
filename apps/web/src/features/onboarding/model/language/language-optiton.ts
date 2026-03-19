import type { SupportedLanguage } from '@shared/i18n/constants';

export interface LanguageOption {
  value: SupportedLanguage;
  label: string;
}

export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: 'Korean' },
  { value: 'zh-CN', label: 'Chinese' },
  { value: 'vi', label: 'Vietnamese' },
] as const satisfies readonly LanguageOption[];

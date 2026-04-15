export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: '한국어' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'zh-CN', label: '中文' },
] as const;

export type SupportedLanguage = (typeof LANGUAGE_OPTIONS)[number]['value'];

export const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map(
  (option) => option.value,
) as SupportedLanguage[];

export const DEFAULT_LANGUAGE = 'en' as const satisfies SupportedLanguage;

export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'language.english' },
  { value: 'ko', label: 'language.korean' },
  { value: 'vi', label: 'language.vietnamese' },
  { value: 'zh-CN', label: 'language.chinese' },
] as const;

export type SupportedLanguage = (typeof LANGUAGE_OPTIONS)[number]['value'];

export const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map(
  (option) => option.value,
) as SupportedLanguage[];

export const DEFAULT_LANGUAGE = 'en' as const satisfies SupportedLanguage;

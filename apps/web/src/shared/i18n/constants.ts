export const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'ko', label: 'Korean' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'zh-CN', label: 'Chinese' },
] as const;

export type SupportedLanguage = (typeof LANGUAGE_OPTIONS)[number]['value'];

export const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map(
  (option) => option.value,
) as SupportedLanguage[];

export const DEFAULT_LANGUAGE = 'en' as const satisfies SupportedLanguage;

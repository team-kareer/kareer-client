export const SUPPORTED_LANGUAGES = ['en', 'ko', 'vi', 'zh-CN'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE = 'en' as const satisfies SupportedLanguage;

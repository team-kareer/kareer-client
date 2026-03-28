import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './constants';
import i18n from './i18n';

export const getLocaleQueryKey = () => {
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  return SUPPORTED_LANGUAGES.some((language) => language === currentLanguage)
    ? currentLanguage
    : DEFAULT_LANGUAGE;
};

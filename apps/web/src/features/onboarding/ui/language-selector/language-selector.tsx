import { GlobalIcon } from '@kds/icons';
import { Dropdown } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_OPTIONS } from '@features/onboarding/model';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLabel =
    LANGUAGE_OPTIONS.find((opt) => opt.value === i18n.language)?.label ??
    i18n.language;

  const filteredOptions = LANGUAGE_OPTIONS.filter(
    (opt) => opt.value !== i18n.language,
  );

  return (
    <Dropdown
      onSelect={(value) => i18n.changeLanguage(value)}
      options={filteredOptions}
    >
      <GlobalIcon width={16} height={16} />
      <span>{currentLabel}</span>
    </Dropdown>
  );
};

export default LanguageSelector;

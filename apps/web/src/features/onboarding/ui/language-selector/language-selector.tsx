import { GlobalIcon } from '@kds/icons';
import { Dropdown } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import { LANGUAGE_OPTIONS } from '@shared/i18n/constants';

import * as styles from './language-selector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLabel = LANGUAGE_OPTIONS.find(
    (opt) => opt.value === i18n.language,
  )!.label;

  const filteredOptions = LANGUAGE_OPTIONS.filter(
    (opt) => opt.value !== i18n.language,
  );

  return (
    <div className={styles.container}>
      <Dropdown
        onSelect={(value) => i18n.changeLanguage(value)}
        options={filteredOptions}
        icon={<GlobalIcon width={16} height={16} />}
      >
        {currentLabel}
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;

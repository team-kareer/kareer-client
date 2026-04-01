import { LanguageSelector } from '@features/onboarding/ui';

import * as styles from './language-selector-section.css';

const LanguageSelectorSection = () => {
  return (
    <div className={styles.container}>
      <LanguageSelector />
    </div>
  );
};

export default LanguageSelectorSection;

import { LogoIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import * as styles from './landing-footer.css';

const LandingFooter = () => {
  const { t } = useTranslation('landing');

  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <LogoIcon width={24} height={24} />
      </div>
      <span className={styles.note}>{t('footer.note')}</span>
    </footer>
  );
};

export default LandingFooter;

import { LogoIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import * as styles from './landing-header.css';

const NAVIGATION_ITEMS = [
  'header.navigation.features',
  'header.navigation.reviews',
  'header.navigation.earlyAccess',
] as const;

const LandingHeader = () => {
  const { t } = useTranslation('landing');

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <LogoIcon width={20} height={20} />
        </div>

        <div className={styles.sectionNavigation}>
          {NAVIGATION_ITEMS.map((labelKey) => (
            <button key={labelKey} type="button" className={styles.sectionLink}>
              {t(labelKey)}
            </button>
          ))}
        </div>

        <Button preset="small_primary">{t('header.cta')}</Button>
      </nav>
    </header>
  );
};

export default LandingHeader;

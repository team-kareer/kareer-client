import { LogoIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import { LANDING_SECTION_ID } from '@widgets/landing/constants/section-id';

import * as styles from './landing-header.css';

const NAVIGATION_ITEMS = [
  {
    labelKey: 'header.navigation.features',
    sectionId: LANDING_SECTION_ID.features,
  },
  {
    labelKey: 'header.navigation.reviews',
    sectionId: LANDING_SECTION_ID.reviews,
  },
  {
    labelKey: 'header.navigation.earlyAccess',
    sectionId: LANDING_SECTION_ID.earlyAccess,
  },
] as const;

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const LandingHeader = () => {
  const { t } = useTranslation('landing');

  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <LogoIcon width={20} height={20} />
        </div>

        <div className={styles.sectionNavigation}>
          {NAVIGATION_ITEMS.map(({ labelKey, sectionId }) => (
            <button
              key={sectionId}
              type="button"
              className={styles.sectionLink}
              onClick={() => scrollToSection(sectionId)}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>

        <Button
          type="button"
          preset="small_primary"
          onClick={() => scrollToSection(LANDING_SECTION_ID.earlyAccess)}
        >
          {t('header.cta')}
        </Button>
      </nav>
    </header>
  );
};

export default LandingHeader;

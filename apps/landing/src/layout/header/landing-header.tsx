import { LogoIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import { LANDING_SECTION_ID, NAVIGATION_ITEMS } from '@shared/constants';
import useLandingNavigation from '@shared/hooks/use-landing-navigation';

import * as styles from './landing-header.css';

const LandingHeader = () => {
  const { t } = useTranslation('landing');
  const { headerRef, activeSectionId, scrollToSection } =
    useLandingNavigation();

  return (
    <header ref={headerRef} className={styles.container}>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <LogoIcon width={20} height={20} />
        </div>

        <div className={styles.sectionNavigation}>
          {NAVIGATION_ITEMS.map(({ labelKey, sectionId }) => (
            <button
              key={sectionId}
              type="button"
              className={styles.sectionLink({
                active: activeSectionId === sectionId,
              })}
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

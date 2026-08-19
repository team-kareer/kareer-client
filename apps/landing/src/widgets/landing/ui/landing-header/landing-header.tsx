import { useEffect, useRef, useState } from 'react';
import { LogoIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import {
  LANDING_SECTION_ID,
  type LandingSectionId,
  NAVIGATION_ITEMS,
} from '@widgets/landing/constants';

import * as styles from './landing-header.css';

const scrollToSection = (sectionId: LandingSectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const LandingHeader = () => {
  const { t } = useTranslation('landing');
  const headerRef = useRef<HTMLElement>(null);
  const [activeSectionId, setActiveSectionId] =
    useState<LandingSectionId | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    const scrollContainer = header?.parentElement;

    if (!header || !scrollContainer) {
      return;
    }

    const updateActiveSection = () => {
      const isScrollEnd =
        scrollContainer.scrollTop + scrollContainer.clientHeight >=
        scrollContainer.scrollHeight - 1;

      if (isScrollEnd) {
        setActiveSectionId(LANDING_SECTION_ID.earlyAccess);
        return;
      }

      const activationTop = header.getBoundingClientRect().bottom;
      const activeSection = NAVIGATION_ITEMS.reduce<LandingSectionId | null>(
        (currentSection, { sectionId }) => {
          const section = document.getElementById(sectionId);

          if (section && section.getBoundingClientRect().top <= activationTop) {
            return sectionId;
          }

          return currentSection;
        },
        null,
      );

      setActiveSectionId(activeSection);
    };

    updateActiveSection();
    scrollContainer.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });

    return () => {
      scrollContainer.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

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

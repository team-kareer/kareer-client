import { useEffect, useRef, useState } from 'react';

import {
  LANDING_SECTION_ID,
  type LandingSectionId,
  NAVIGATION_ITEMS,
} from '@shared/constants';

const scrollToSection = (sectionId: LandingSectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const useLandingNavigation = () => {
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

          if (
            section &&
            section.getBoundingClientRect().top <= activationTop + 1
          ) {
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

  return { headerRef, activeSectionId, scrollToSection };
};

export default useLandingNavigation;

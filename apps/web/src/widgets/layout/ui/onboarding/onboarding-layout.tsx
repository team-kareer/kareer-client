import { ReactNode } from 'react';
import { LogoIcon, LogoTypoIcon } from '@kds/icons';

import * as styles from './onboarding-layout.css';

interface OnboardingLayoutProps {
  children: ReactNode;
}

const DESCRIPTION_TEXT = `Guiding your career journey\nwith trusted visa and career insights`;

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.introSection}>
        <span className={styles.logoWrapper}>
          <LogoIcon className={styles.logoIcon} width={28} height={28} />
          <LogoTypoIcon />
        </span>
        <LogoIcon width={326} height={326} />
        <p className={styles.text}>{DESCRIPTION_TEXT}</p>
      </div>
      <div className={styles.stepFormSection}>{children}</div>
    </div>
  );
};

export default OnboardingLayout;

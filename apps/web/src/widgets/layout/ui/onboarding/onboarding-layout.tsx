import { ReactNode } from 'react';
import { SymbolPrimaryIcon, LogoTypoIcon } from '@kds/icons';
import Lottie from 'lottie-react';
import { onboarding_lottie } from '@shared/assets';

import * as styles from './onboarding-layout.css';

interface OnboardingLayoutProps {
  children: ReactNode;
}

const DESCRIPTION_TEXT = `Guiding your career journey\nwith trusted visa and career insights`;

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.lottieWrapper}>
        <Lottie animationData={onboarding_lottie} loop={true} />
      </div>
      <div className={styles.introSection}>
        <span className={styles.logoWrapper}>
          <SymbolPrimaryIcon width={48} height={48} />
          <LogoTypoIcon width={121} height={48} />
        </span>
        <p className={styles.text}>{DESCRIPTION_TEXT}</p>
      </div>
      <div className={styles.stepFormSection}>{children}</div>
    </div>
  );
};

export default OnboardingLayout;

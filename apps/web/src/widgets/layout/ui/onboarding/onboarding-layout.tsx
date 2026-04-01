import { ReactNode } from 'react';
import { LogoTypoIcon, SymbolPrimaryIcon } from '@kds/icons';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';

import { onboarding_lottie } from '@shared/assets';

import * as styles from './onboarding-layout.css';

interface OnboardingLayoutProps {
  children: ReactNode;
}

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  const { t } = useTranslation('login');

  return (
    <div className={styles.container}>
      <div className={styles.introSection}>
        <div className={styles.lottieBackground}>
          <Lottie
            animationData={onboarding_lottie}
            loop={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            className={styles.lottie}
          />
        </div>
        <div className={styles.textSection}>
          <span className={styles.logoWrapper}>
            <SymbolPrimaryIcon width={48} height={48} />
            <LogoTypoIcon width={121} height={48} />
          </span>
          <p className={styles.text}>{t('layout.description')}</p>
        </div>
      </div>
      <div className={styles.stepFormSection}>{children}</div>
    </div>
  );
};

export default OnboardingLayout;

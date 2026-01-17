import { ReactNode } from 'react';
import { Button } from '@kds/ui';

import {
  type OnboardingStepData,
  OnboardingStepHeader,
} from '@widgets/onboarding';

import * as styles from './onboarding-step-layout.css';

interface OnboardingStepLayoutProps {
  children: ReactNode;
  steps: OnboardingStepData[];
  onBack?: () => void;
  onNext?: () => void;
}

const OnboardingStepLayout = ({
  children,
  steps,
  onBack,
  onNext,
}: OnboardingStepLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <OnboardingStepHeader steps={steps} />
      </div>
      <div className={styles.contentContainer}>{children}</div>
      <div className={styles.buttonContainer}>
        {onBack && (
          <Button preset="large_outlined" onClick={onBack}>
            Back
          </Button>
        )}
        {onNext && (
          <Button preset="large_primary" onClick={onNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingStepLayout;

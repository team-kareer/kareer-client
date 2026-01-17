import { ReactNode } from 'react';
import { SymbolLightIcon } from '@kds/icons/svg';
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
  const currentStep = steps.find((step) => step.status === 'In Progress');
  const isLastStep =
    currentStep &&
    currentStep.stepNumber === steps[steps.length - 1]?.stepNumber;
  const isFirstStep = currentStep?.stepNumber === 1;

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <OnboardingStepHeader steps={steps} />
      </div>
      <div className={styles.contentContainer}>{children}</div>
      <div className={styles.buttonContainer}>
        {onBack && (
          <Button
            preset="large_outlined"
            onClick={onBack}
            disabled={isFirstStep}
          >
            Back
          </Button>
        )}
        {onNext && (
          <Button preset="large_primary" onClick={onNext}>
            {isLastStep ? (
              <span className={styles.buttonContent}>
                <SymbolLightIcon width={19} height={19} />
                <span>Start your career journey</span>
              </span>
            ) : (
              'Next'
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingStepLayout;

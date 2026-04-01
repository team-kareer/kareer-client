import { ReactNode } from 'react';
import { SymbolGrayIcon, SymbolLightIcon } from '@kds/icons/svg';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

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
  isNextDisabled?: boolean;
}

const OnboardingStepLayout = ({
  children,
  steps,
  onBack,
  onNext,
  isNextDisabled,
}: OnboardingStepLayoutProps) => {
  const { t } = useTranslation('onboarding');
  const currentStep = steps.find((step) => step.status === 'In Process');
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
            {t('stepFlow.actions.back')}
          </Button>
        )}
        {onNext && (
          <Button
            preset={isNextDisabled ? 'large_outlined' : 'large_primary'}
            onClick={onNext}
            disabled={isNextDisabled}
          >
            {isLastStep ? (
              <span className={styles.buttonContent}>
                {isNextDisabled ? (
                  <SymbolGrayIcon width={19} height={19} />
                ) : (
                  <SymbolLightIcon width={19} height={19} />
                )}
                <span>{t('stepFlow.actions.submit')}</span>
              </span>
            ) : (
              t('stepFlow.actions.next')
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingStepLayout;

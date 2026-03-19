import { Fragment } from 'react';

import { OnboardingStep } from '@widgets/onboarding';

import * as styles from './onboarding-step-header.css';

export interface OnboardingStepData {
  stepNumber: number;
  title: string;
  status: 'Done' | 'In Process' | 'Disabled';
}

interface OnboardingStepHeaderProps {
  steps: OnboardingStepData[];
}

const OnboardingStepHeader = ({ steps }: OnboardingStepHeaderProps) => {
  return (
    <div className={styles.container}>
      {steps.map((step, idx) => {
        const hasNextStep = idx < steps.length - 1;
        return (
          <Fragment key={step.stepNumber}>
            <OnboardingStep
              stepNumber={step.stepNumber}
              title={step.title}
              status={step.status}
            />
            {hasNextStep && (
              <span className={styles.line({ status: step.status })} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default OnboardingStepHeader;

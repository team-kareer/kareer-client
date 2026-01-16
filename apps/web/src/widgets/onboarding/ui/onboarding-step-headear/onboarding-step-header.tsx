import OnboardingStep from '../step/onboarding-step';

import * as styles from './onboarding-step-header.css';

export interface OnboardingStepData {
  stepNumber: number;
  title: string;
  status: 'In Progress' | 'Next' | 'Later' | 'Completed';
}

interface OnboardingStepHeaderProps {
  steps: OnboardingStepData[];
}

const OnboardingStepHeader = ({ steps }: OnboardingStepHeaderProps) => {
  return (
    <div className={styles.container}>
      {steps.map((step) => {
        return (
          <OnboardingStep
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            status={step.status}
          />
        );
      })}
    </div>
  );
};

export default OnboardingStepHeader;

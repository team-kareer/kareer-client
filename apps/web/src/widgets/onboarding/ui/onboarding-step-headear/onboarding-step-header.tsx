import * as styles from './onboarding-step-header.css';
import OnboardingStep from '../step/onboarding-step';

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
          <div key={step.stepNumber} className={styles.stepItem}>
            <OnboardingStep
              stepNumber={step.stepNumber}
              title={step.title}
              status={step.status}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OnboardingStepHeader;

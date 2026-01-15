import * as styles from './onboarding-step-header.css';
import OnboardingStep from '../step/onboarding-step';

const ONBOARDING_STEPS = [
  {
    stepNumber: 1,
    title: 'Personal Information',
    status: 'In Progress',
  },
  {
    stepNumber: 2,
    title: 'Visa Information',
    status: 'Next',
  },
  {
    stepNumber: 3,
    title: 'Target Role',
    status: 'Later',
  },
  {
    stepNumber: 4,
    title: 'Background',
    status: 'Later',
  },
] as const;

const OnboardingStepHeader = () => {
  return (
    <div className={styles.container}>
      {ONBOARDING_STEPS.map((step) => {
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

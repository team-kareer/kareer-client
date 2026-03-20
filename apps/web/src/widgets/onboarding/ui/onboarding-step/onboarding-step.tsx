import { CheckDoneIcon } from '@kds/icons';

import type { StepStatus } from '@widgets/onboarding';

import * as styles from './onboarding-step.css';

interface OnboardingStepProps {
  stepNumber: number;
  title: string;
  status: StepStatus;
}

const OnboardingStep = ({ stepNumber, title, status }: OnboardingStepProps) => {
  return (
    <div className={styles.container}>
      {status === 'Done' ? (
        <CheckDoneIcon width={20} height={20} />
      ) : (
        <p className={styles.step({ status })}>{stepNumber}</p>
      )}
      <h2 className={styles.title({ status })}>{title}</h2>
    </div>
  );
};

export default OnboardingStep;

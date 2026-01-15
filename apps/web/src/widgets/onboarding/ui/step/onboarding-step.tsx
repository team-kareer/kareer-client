import { Tag } from '@kds/ui';

import * as styles from './onboarding-step.css';

interface OnboardingStepProps {
  stepNumber: number;
  title: string;
  status: 'In Progress' | 'Next' | 'Later' | 'Completed';
}

const OnboardingStep = ({ stepNumber, title, status }: OnboardingStepProps) => {
  const tagColor = {
    'In Progress': 'primary_blue',
    Next: 'outlined_black',
    Later: 'disabled_gray',
    Completed: 'disabled_gray',
  } as const;

  return (
    <div className={styles.container}>
      <p className={styles.stepNumber({ status })}>STEP {stepNumber}</p>
      <h2 className={styles.title({ status })}>{title}</h2>
      <div>
        <Tag color={tagColor[status]}>{status}</Tag>
      </div>
    </div>
  );
};

export default OnboardingStep;

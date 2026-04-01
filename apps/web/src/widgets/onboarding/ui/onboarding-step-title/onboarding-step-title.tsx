import * as styles from './onboarding-step-title.css';

interface OnboardingStepTitleProps {
  stepNumber: number;
  title: string;
}

const OnboardingStepTitle = ({ title }: OnboardingStepTitleProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default OnboardingStepTitle;

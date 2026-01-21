import * as styles from './onboarding-step-title.css';

interface OnboardingStepTitleProps {
  stepNumber: number;
  title: string;
}

const OnboardingStepTitle = ({
  stepNumber,
  title,
}: OnboardingStepTitleProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.numbering}>{stepNumber}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default OnboardingStepTitle;

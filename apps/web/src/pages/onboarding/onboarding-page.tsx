import {
  type OnboardingStepData,
  OnboardingStepLayout,
} from '@widgets/onboarding';
import { PersonalBackgroundStep } from '@widgets/onboarding';

const ONBOARDING_STEPS: OnboardingStepData[] = [
  {
    stepNumber: 1,
    title: 'Personal Information',
    status: 'Later',
  },
  {
    stepNumber: 2,
    title: 'Visa Information',
    status: 'Later',
  },
  {
    stepNumber: 3,
    title: 'Target Role',
    status: 'Later',
  },
  {
    stepNumber: 4,
    title: 'Background',
    status: 'In Progress',
  },
];

const OnboardingPage = () => {
  const handleBack = () => {
    // TODO: 이전 스텝 이동
  };

  const handleNext = () => {
    // TODO: 다음 스텝 이동
  };

  return (
    <OnboardingStepLayout
      steps={ONBOARDING_STEPS}
      onBack={handleBack}
      onNext={handleNext}
    >
      {/* <PersonalInformationStep /> */}
      <PersonalBackgroundStep />
    </OnboardingStepLayout>
  );
};

export default OnboardingPage;

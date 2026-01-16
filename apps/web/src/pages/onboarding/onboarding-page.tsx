import {
  OnboardingStepLayout,
  type OnboardingStepData,
} from '@widgets/onboarding';
import PersonalInformation from '@widgets/onboarding/ui/step/personal-information/personal-information';

const ONBOARDING_STEPS: OnboardingStepData[] = [
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
      <PersonalInformation />
    </OnboardingStepLayout>
  );
};

export default OnboardingPage;

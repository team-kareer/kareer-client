import {
  type OnboardingStepData,
  OnboardingStepHeader,
} from '@widgets/onboarding';

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
  return (
    <div>
      <OnboardingStepHeader steps={ONBOARDING_STEPS} />
    </div>
  );
};

export default OnboardingPage;

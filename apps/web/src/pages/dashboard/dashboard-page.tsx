import { OnboardingStep } from '@widgets/onboarding';

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

type OnboardingStep = (typeof ONBOARDING_STEPS)[number];

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', gap: '5rem' }}>
      {ONBOARDING_STEPS.map((step) => (
        <OnboardingStep
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          status={step.status}
        />
      ))}
    </div>
  );
};

export default DashboardPage;

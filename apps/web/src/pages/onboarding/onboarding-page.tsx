import useFunnel from '@shared/hooks/usefunnel';
import {
  type OnboardingStepData,
  OnboardingStepLayout,
  PersonalInformationStep,
  VisaInformationStep,
  TargetRoleStep,
  PersonalBackgroundStep,
} from '@widgets/onboarding';

const OnboardingPage = () => {
  const FUNNEL_STEPS = [
    'PersonalInformation',
    'VisaInformation',
    'TargetRole',
    'Background',
  ] as const;

  const STEP_TITLES = [
    'Personal Information',
    'Visa Information',
    'Target Role',
    'Background',
  ];

  const { Funnel, Step, goToNextStep, goToPrevStep, currentStepIndex } =
    useFunnel(FUNNEL_STEPS, '/');

  const steps: OnboardingStepData[] = STEP_TITLES.map((title, index) => ({
    stepNumber: index + 1,
    title,
    status:
      index < currentStepIndex
        ? 'Completed'
        : index === currentStepIndex
          ? 'In Progress'
          : index === currentStepIndex + 1
            ? 'Next'
            : 'Later',
  }));

  const handleBack = () => {
    goToPrevStep();
  };

  const handleNext = () => {
    goToNextStep();
  };

  return (
    <OnboardingStepLayout steps={steps} onBack={handleBack} onNext={handleNext}>
      <Funnel>
        <Step name={FUNNEL_STEPS[0]}>
          <PersonalInformationStep />
        </Step>
        <Step name={FUNNEL_STEPS[1]}>
          <VisaInformationStep />
        </Step>
        <Step name={FUNNEL_STEPS[2]}>
          <TargetRoleStep />
        </Step>
        <Step name={FUNNEL_STEPS[3]}>
          <PersonalBackgroundStep />
        </Step>
      </Funnel>
    </OnboardingStepLayout>
  );
};

export default OnboardingPage;

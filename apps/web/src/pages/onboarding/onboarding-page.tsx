import { useFunnel } from '@shared/hooks/usefunnel';
import {
  OnboardingStepLayout,
  PersonalInformationStep,
} from '@widgets/onboarding';

const OnboardingPage = () => {
  const { Funnel, Step, goToNextStep, goToPrevStep } = useFunnel(
    ['PersonalInformation', 'VisaInformation', 'TargetRole', 'Background'],
    '/dashboard',
  );

  const STEP_NAMES = [
    'Personal information',
    'Visa information',
    'Target role',
    'Background',
  ] as const;

  const handleBack = () => {
    goToPrevStep();
  };

  const handleNext = () => {
    goToNextStep();
  };

  return (
    <OnboardingStepLayout
      steps={STEP_NAMES}
      onBack={handleBack}
      onNext={handleNext}
    >
      <Funnel>
        <Step name={STEP_NAMES[0]}>
          <PersonalInformationStep />
        </Step>
      </Funnel>
    </OnboardingStepLayout>
  );
};

export default OnboardingPage;

import useFunnel from '@shared/hooks/usefunnel';
import { FormProvider, useForm } from 'react-hook-form';
import {
  type OnboardingForm,
  type OnboardingStepData,
  OnboardingStepLayout,
  PersonalBackgroundStep,
  PersonalInformationStep,
  TargetRoleStep,
  VisaInformationStep,
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

  const form = useForm<OnboardingForm>({
    mode: 'onChange',
    defaultValues: {
      personalInformation: {
        name: '',
        Birth: '',
        Country: '',
        OpikKiip: '',
      },
      visaInformation: {
        visaType: '',
        GraduationDate: '',
        IssuanceDate: '',
        ExpirationDate: '',
      },
      targetRole: {
        PrimaruMajor: '',
        SecondaryMajor: '',
        TargetJob: '',
      },
      background: {
        UserCareerIntroduction: '',
      },
    },
  });

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
    <FormProvider {...form}>
      <OnboardingStepLayout
        steps={steps}
        onBack={handleBack}
        onNext={handleNext}
      >
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
    </FormProvider>
  );
};

export default OnboardingPage;

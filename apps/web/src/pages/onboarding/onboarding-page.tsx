import { useEffect } from 'react';
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

const STORAGE_KEY = 'onboarding-form-data';

const DEFAULT_VALUES: OnboardingForm = {
  name: '',
  birthDate: '',
  country: '',
  languageLevel: '',
  degree: '',
  visaType: '',
  expectedGraduationDate: '',
  visaStartDate: '',
  visaExpiredAt: '',
  visaPoint: 0,
  primaryMajor: '',
  secondaryMajor: '',
  targetJob: '',
  targetJobSkill: '',
  personalBackground: '',
};

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
    mode: 'onChange', // 입력 시 실시간 검증
    reValidateMode: 'onChange', // 재검증도 입력 시
    defaultValues: async () => {
      if (typeof window !== 'undefined') {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
          return JSON.parse(savedData);
        }
      }
      return DEFAULT_VALUES;
    },
  });

  const allValues = form.watch();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allValues));
  }, [allValues]);

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

  const handleNext = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      goToNextStep();
    }
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

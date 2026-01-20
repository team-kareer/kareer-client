import useFunnel from '@shared/hooks/usefunnel';
import { FormProvider, useForm } from 'react-hook-form';
import {
  OnboardingStepLayout,
  PersonalBackgroundStep,
  PersonalInformationStep,
  TargetRoleStep,
  VisaInformationStep,
} from '@widgets/onboarding';
import { OnboardingForm } from '@entities/onboarding';
import {
  DEFAULT_ONBOARDING_FORM,
  FUNNEL_STEPS,
  STEP_TITLES,
} from '@entities/onboarding';
import {
  getRequiredFieldsForStep,
  hasAllRequiredFieldValues,
} from '@entities/onboarding';
import { getLocalStorageData, createStepData } from '@entities/onboarding';
import { useOnboardingStorage } from '@features/onboarding';

const OnboardingPage = () => {
  const { Funnel, Step, goToNextStep, goToPrevStep, currentStepIndex } =
    useFunnel(FUNNEL_STEPS, '/');

  const form = useForm<OnboardingForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: async () => {
      const savedData = getLocalStorageData();
      if (savedData) {
        return savedData;
      }
      return DEFAULT_ONBOARDING_FORM;
    },
  });

  // 버튼 비활성화 로직
  const allValues = form.watch();
  const requiredFields = getRequiredFieldsForStep(
    currentStepIndex,
    allValues.visaType,
  );

  // 모든 필드 존재 체크
  const hasAllRequiredValues = hasAllRequiredFieldValues(
    allValues,
    requiredFields,
  );

  const hasStepErrors = requiredFields.some((fieldName) =>
    Boolean(form.formState.errors[fieldName]),
  );

  const isNextDisabled =
    form.formState.isLoading || !hasAllRequiredValues || hasStepErrors;

  // 로컬스토리지 저장
  useOnboardingStorage(allValues);

  const steps = createStepData(STEP_TITLES, currentStepIndex);

  const handleBack = () => {
    goToPrevStep();
  };

  const handleNext = async () => {
    const isValid = await form.trigger(requiredFields);
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
        isNextDisabled={isNextDisabled}
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

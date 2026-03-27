import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import {
  createStepData,
  OnboardingStepLayout,
  PersonalBackgroundStep,
  PersonalInformationStep,
  TargetRoleStep,
  VisaInformationStep,
} from '@widgets/onboarding';
import IdentityVisaVerification from '@widgets/onboarding/ui/step/identity-visaVerification/identity-visaVerification';
import type { PostOnboardingForm } from '@features/onboarding';
import { postOnboardingForm } from '@features/onboarding';
import { ONBOARDING_MUTATION_OPTIONS } from '@features/onboarding/queries';
import {
  convertFormToRequest,
  DEFAULT_ONBOARDING_FORM,
  FUNNEL_STEPS,
  getRequiredFieldsForStep,
  hasAllRequiredFieldValues,
  OnboardingForm,
} from '@entities/onboarding';
import { USER_QUERY_KEY } from '@entities/user/queries';
import useFunnel from '@shared/hooks/usefunnel';

const OnboardingPage = () => {
  const queryClient = useQueryClient();
  const { Funnel, Step, goToNextStep, goToPrevStep, currentStepIndex } =
    useFunnel(FUNNEL_STEPS, '/');
  const [error, setError] = useState<Error | null>(null);

  const form = useForm<OnboardingForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_ONBOARDING_FORM,
  });

  // 버튼 비활성화 로직
  const visaType = useWatch({ control: form.control, name: 'visaType' });
  const requiredFields = getRequiredFieldsForStep(currentStepIndex, visaType);

  // 현재 단계의 필수 필드만 감시
  const watchedRequiredFields = useWatch({
    control: form.control,
    name: requiredFields,
  });

  // 전체 폼 값 감시
  const allFormValues = useWatch({
    control: form.control,
  }) as OnboardingForm;

  // 길이 체크
  const personalBackground = useWatch({
    control: form.control,
    name: 'personalBackground',
  });
  const isPersonalBackgroundOverLimit =
    currentStepIndex === FUNNEL_STEPS.length - 1 &&
    (personalBackground?.length || 0) > 1000;

  // 모든 필드 존재 체크
  const hasAllRequiredValues = hasAllRequiredFieldValues(
    { ...allFormValues, ...watchedRequiredFields } as OnboardingForm,
    requiredFields,
  );

  const hasStepErrors = requiredFields.some((fieldName) =>
    Boolean(form.formState.errors[fieldName]),
  );

  const isNextDisabled =
    form.formState.isLoading ||
    !hasAllRequiredValues ||
    hasStepErrors ||
    isPersonalBackgroundOverLimit;

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const steps = createStepData(FUNNEL_STEPS, currentStepIndex);

  const handleBack = () => {
    goToPrevStep();
  };

  // 로드맵 생성 mutation
  const { mutate: generateRoadmap } = useMutation({
    ...ONBOARDING_MUTATION_OPTIONS.POST_AI_ROADMAP(),
  });

  const { mutate: submitOnboarding } = useMutation({
    mutationFn: postOnboardingForm,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: USER_QUERY_KEY.USER_STATUS(),
      });
      // 온보딩 성공 후 로드맵 생성 API 호출
      generateRoadmap();
      goToNextStep();
    },
    onError: (error) => {
      setError(error instanceof Error ? error : new Error('온보딩 제출 실패'));
    },
  });

  const handleNext = async () => {
    const isValid = await form.trigger(requiredFields);
    if (isValid) {
      const isLastStep = currentStepIndex === FUNNEL_STEPS.length - 1;
      if (isLastStep) {
        const formData = form.getValues();
        const requestData = convertFormToRequest(
          formData,
        ) as PostOnboardingForm;
        submitOnboarding(requestData);
      } else {
        goToNextStep();
      }
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
            <TargetRoleStep />
          </Step>
          <Step name={FUNNEL_STEPS[4]}>
            <PersonalBackgroundStep />
          </Step>
          <Step name={FUNNEL_STEPS[5]}>
            <IdentityVisaVerification />
          </Step>
        </Funnel>
      </OnboardingStepLayout>
    </FormProvider>
  );
};

export default OnboardingPage;

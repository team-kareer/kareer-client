import { type UseFormReturn, useWatch } from 'react-hook-form';

import {
  FIELD_MAX_LENGTHS,
  FUNNEL_STEPS,
  getRequiredFieldsForStep,
  hasAllRequiredFieldValues,
  type OnboardingForm,
} from '@entities/onboarding';

interface UseOnboardingStepValidationProps {
  form: UseFormReturn<OnboardingForm>;
  currentStepIndex: number;
}

const useOnboardingStepValidation = ({
  form,
  currentStepIndex,
}: UseOnboardingStepValidationProps) => {
  const requiredFields = getRequiredFieldsForStep(currentStepIndex);

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
    (personalBackground?.length || 0) > FIELD_MAX_LENGTHS.PERSONAL_BACKGROUND;

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

  return { requiredFields, isNextDisabled };
};

export default useOnboardingStepValidation;

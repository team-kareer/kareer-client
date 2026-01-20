import { type OnboardingForm } from './types';
import { STEP_REQUIRED_FIELDS, VISA_TYPE_REQUIRED_FIELDS } from './constants';

const VISA_STEP_INDEX = 1;

export const getRequiredFieldsForStep = (
  stepIndex: number,
  visaType?: string,
): Array<keyof OnboardingForm> => {
  let requiredFields: Array<keyof OnboardingForm> =
    STEP_REQUIRED_FIELDS[stepIndex] ?? [];
  if (stepIndex === VISA_STEP_INDEX) {
    if (visaType === 'D-2') {
      requiredFields = VISA_TYPE_REQUIRED_FIELDS['D-2'];
    } else if (visaType === 'D-10') {
      requiredFields = [
        'visaType',
        'visaPoint',
        'visaStartDate',
        'visaExpiredAt',
      ] as Array<keyof OnboardingForm>;
    } else {
      // 비자 타입이 선택되지 않았을 때는 기본 필드만
      requiredFields = ['visaType', 'visaStartDate', 'visaExpiredAt'] as Array<
        keyof OnboardingForm
      >;
    }
  }
  return requiredFields;
};

export const hasAllRequiredFieldValues = (
  formValues: OnboardingForm,
  requiredFields: Array<keyof OnboardingForm>,
): boolean => {
  return requiredFields.every((fieldName) => {
    const value = formValues[fieldName];
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    if (typeof value === 'number') {
      return value !== 0 && !Number.isNaN(value);
    }
    return Boolean(value);
  });
};

import { STEP_REQUIRED_FIELDS, VISA_TYPE_REQUIRED_FIELDS } from './constants';
import { type OnboardingForm } from './types';

const VISA_STEP_INDEX = 1;

/**
 * 특정 단계에 대한 필수 필드 목록을 반환하는 함수
 * @description 비자 정보 단계(stepIndex === 1)인 경우 비자 타입에 따라 다른 필드 반환
 */
export const getRequiredFieldsForStep = (
  stepIndex: number,
  visaType?: string,
): Array<keyof OnboardingForm> => {
  let requiredFields: Array<keyof OnboardingForm> =
    STEP_REQUIRED_FIELDS[stepIndex] ?? [];
  if (stepIndex === VISA_STEP_INDEX) {
    if (visaType === 'D-2') {
      requiredFields = VISA_TYPE_REQUIRED_FIELDS['D2'];
    } else if (visaType === 'D-10') {
      requiredFields = VISA_TYPE_REQUIRED_FIELDS['D10'];
    } else {
      // 비자 타입이 선택되지 않았을 때는 기본 필드만
      requiredFields = ['visaType', 'visaStartDate', 'visaExpiredAt'] as Array<
        keyof OnboardingForm
      >;
    }
  }
  return requiredFields;
};

/**
 * 폼 값들이 모든 필수 필드를 충족하는지 검증하는 함수
 * @param formValues - 검증할 폼 값 객체
 * @returns 모든 필수 필드가 채워져 있으면 true 아니면 false
 * @description 문자열은 공백 제거 후 길이 체크, 숫자는 0이 아닌지 체크
 * 날짜 필드는 완전한 형식(YYYY-MM-DD)인지도 체크
 */
export const hasAllRequiredFieldValues = (
  formValues: OnboardingForm,
  requiredFields: Array<keyof OnboardingForm>,
): boolean => {
  const dateFields: Array<keyof OnboardingForm> = [
    'birthDate',
    'visaStartDate',
    'visaExpiredAt',
    'expectedGraduationDate',
  ];
  const completeDateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

  return requiredFields.every((fieldName) => {
    const value = formValues[fieldName];
    if (typeof value === 'string') {
      const trimmedValue = value.trim();
      if (trimmedValue.length === 0) {
        return false;
      }
      // 날짜 필드인 경우 완전한 형식인지 체크
      if (dateFields.includes(fieldName)) {
        return completeDateFormatRegex.test(trimmedValue);
      }
      return true;
    }
    if (typeof value === 'number') {
      return value !== 0 && !Number.isNaN(value);
    }
    return Boolean(value);
  });
};

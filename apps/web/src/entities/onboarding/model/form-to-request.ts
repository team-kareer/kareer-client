import { getDegreeValue } from './degree';
import type { OnboardingForm, OnboardingFormRequest } from './types';

/**
 * UI 값을 서버 값 변환
 */
const convertVisaTypeToServerValue = (uiValue: string): string => {
  const labelToValueMap: Record<string, string> = {
    'D-2': 'D2',
    'D-10': 'D10',
  };
  return labelToValueMap[uiValue] || uiValue;
};

/**
 * 폼 데이터를 API 요청 형식으로 변환
 */
export const convertFormToRequest = (
  formData: OnboardingForm,
): OnboardingFormRequest => {
  const { degreeLocation, ...rest } = formData;

  const serverVisaType = rest.visaType
    ? convertVisaTypeToServerValue(rest.visaType)
    : rest.visaType;

  const serverDegree =
    rest.degree && degreeLocation
      ? getDegreeValue(rest.degree, degreeLocation)
      : '';

  // 조건부 필드 제거를 위해 destructure
  const {
    expectedGraduationDate,
    visaPoint,
    secondaryMajor,
    targetJobSkill,
    ...baseFields
  } = rest;

  return {
    ...baseFields,
    visaType: serverVisaType,
    degree: serverDegree,
    ...(secondaryMajor?.trim() && {
      secondaryMajor,
    }),
    ...(targetJobSkill?.trim() && {
      targetJobSkill,
    }),
    ...(rest.visaType === 'D-2' &&
      expectedGraduationDate && {
        expectedGraduationDate,
      }),
    ...(rest.visaType === 'D-10' &&
      visaPoint !== undefined && {
        visaPoint,
      }),
  } as OnboardingFormRequest;
};

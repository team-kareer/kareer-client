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
      : rest.degree;

  return {
    ...rest,
    visaType: serverVisaType,
    degree: serverDegree,
    ...(rest.secondaryMajor?.trim() && {
      secondaryMajor: rest.secondaryMajor,
    }),
    ...(rest.targetJobSkill?.trim() && {
      targetJobSkill: rest.targetJobSkill,
    }),
    ...(rest.visaType === 'D-2' &&
      rest.expectedGraduationDate && {
        expectedGraduationDate: rest.expectedGraduationDate,
      }),
    ...(rest.visaType === 'D-10' &&
      rest.visaPoint !== undefined && {
        visaPoint: rest.visaPoint,
      }),
  } as OnboardingFormRequest;
};

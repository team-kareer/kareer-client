import type { OnboardingForm, OnboardingFormRequest } from './types';

/**
 * 폼 데이터를 API 요청 형식으로 변환하는 함수
 * @param formData - 온보딩 폼 데이터
 * @returns API 요청용 데이터
 * @description degreeLocation은 UI에서만 사용하고 API에는 전송하지 않음
 */
export const convertFormToRequest = (
  formData: OnboardingForm,
): OnboardingFormRequest => {
  const { degreeLocation: _degreeLocation, ...rest } = formData;

  return {
    ...rest,
    // 선택 필드: 값이 있고 공백이 아닌 경우만 포함
    ...(rest.secondaryMajor?.trim() && {
      secondaryMajor: rest.secondaryMajor,
    }),
    ...(rest.targetJobSkill?.trim() && {
      targetJobSkill: rest.targetJobSkill,
    }),
    // 비자 타입별 조건부 필드
    ...(rest.visaType === 'D2' &&
      rest.expectedGraduationDate && {
        expectedGraduationDate: rest.expectedGraduationDate,
      }),
    ...(rest.visaType === 'D10' &&
      rest.visaPoint !== undefined && {
        visaPoint: rest.visaPoint,
      }),
  } as OnboardingFormRequest;
};

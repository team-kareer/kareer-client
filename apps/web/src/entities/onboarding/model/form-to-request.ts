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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { degreeLocation: _degreeLocation, ...rest } = formData;

  // 필수 필드들을 명시적으로 변환
  const baseData: Omit<
    OnboardingFormRequest,
    'expectedGraduationDate' | 'visaPoint'
  > = {
    name: rest.name,
    birthDate: rest.birthDate,
    country: rest.country as OnboardingFormRequest['country'],
    languageLevel: rest.languageLevel as OnboardingFormRequest['languageLevel'],
    degree: rest.degree as OnboardingFormRequest['degree'],
    visaType: rest.visaType as OnboardingFormRequest['visaType'],
    visaStartDate: rest.visaStartDate,
    visaExpiredAt: rest.visaExpiredAt,
    primaryMajor: rest.primaryMajor,
    targetJob: rest.targetJob,
    personalBackground: rest.personalBackground,
    // 선택 필드
    ...(rest.secondaryMajor &&
      rest.secondaryMajor.trim() && {
        secondaryMajor: rest.secondaryMajor,
      }),
    ...(rest.targetJobSkill &&
      rest.targetJobSkill.trim() && {
        targetJobSkill: rest.targetJobSkill,
      }),
  };

  // 비자 타입에 따라 조건부 필드 처리
  if (rest.visaType === 'D2') {
    // D2인 경우: expectedGraduationDate만 포함
    return {
      ...baseData,
      ...(rest.expectedGraduationDate && {
        expectedGraduationDate: rest.expectedGraduationDate,
      }),
    } as OnboardingFormRequest;
  } else if (rest.visaType === 'D10') {
    // D10인 경우: visaPoint만 포함
    return {
      ...baseData,
      ...(rest.visaPoint !== undefined && { visaPoint: rest.visaPoint }),
    } as OnboardingFormRequest;
  }

  return baseData as OnboardingFormRequest;
};

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
  const { degreeLocation: _degreeLocation, ...requestData } = formData;
  return requestData as OnboardingFormRequest;
};

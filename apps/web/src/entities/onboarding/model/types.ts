export interface OnboardingForm {
  name: string;
  birthDate: string;
  country: string;
  languageLevel: string;
  degreeLocation: string;
  degree: string;
  visaType: string;
  expectedGraduationDate: string;
  visaStartDate: string;
  visaExpiredAt: string;
  visaPoint: number;
  primaryMajor: string;
  secondaryMajor: string;
  targetJob: string;
  targetJobSkill: string;
  personalBackground: string;
}

/**
 * API 요청용 온보딩 폼 타입
 * @description degreeLocation은 UI에서만 사용하고 API에는 전송하지 않음
 */
export type OnboardingFormRequest = Omit<OnboardingForm, 'degreeLocation'>;

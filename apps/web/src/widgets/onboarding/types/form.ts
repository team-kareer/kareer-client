// API Request 타입
export interface OnboardingForm {
  name: string;
  birthDate: string; // "YYYY-MM-DD"
  country: string;
  languageLevel: string; // "LEVEL_1"
  degree: string; // "DOMESTIC_ASSOCIATE"
  visaType: string; // "D2"
  expectedGraduationDate: string; // "YYYY-MM-DD"
  visaStartDate: string; // "YYYY-MM-DD"
  visaExpiredAt: string; // "YYYY-MM-DD"
  visaPoint: number;
  primaryMajor: string;
  secondaryMajor: string;
  targetJob: string;
  targetJobSkill: string;
  personalBackground: string;
}

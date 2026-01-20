import type { OnboardingForm } from './types';

/**
 * 로컬 스토리지 온보딩 폼 데이터 저장 키
 * @constant
 */
export const STORAGE_KEY = 'onboarding-form-data';

/**
 * 온보딩 폼 기본값
 * @constant
 */
export const DEFAULT_ONBOARDING_FORM: OnboardingForm = {
  name: '',
  birthDate: '',
  country: '',
  languageLevel: '',
  degreeLocation: 'south-korea',
  degree: '',
  visaType: '',
  expectedGraduationDate: '',
  visaStartDate: '',
  visaExpiredAt: '',
  visaPoint: 0,
  primaryMajor: '',
  secondaryMajor: '',
  targetJob: '',
  targetJobSkill: '',
  personalBackground: '',
};

/**
 * 온보딩 퍼널 step 단계
 * @constant
 */
export const FUNNEL_STEPS = [
  'PersonalInformation',
  'VisaInformation',
  'TargetRole',
  'Background',
] as const;

/**
 * 온보딩 퍼널 step title
 * @constant
 */
export const STEP_TITLES = [
  'Personal Information',
  'Visa Information',
  'Target Role',
  'Background',
];

/**
 * 각 단계별 필수 입력 필드 배열
 * */
export const STEP_REQUIRED_FIELDS: Array<Array<keyof OnboardingForm>> = [
  ['name', 'birthDate', 'country', 'languageLevel', 'degree'],
  ['visaType', 'expectedGraduationDate', 'visaStartDate', 'visaExpiredAt'],
  ['primaryMajor', 'targetJob'],
  ['personalBackground'],
];

/**
 * 비자 타입별 필수 입력 필드 매핑
 * @description D-2, D-10 비자 타입에 따라 필드 요구
 */
export const VISA_TYPE_REQUIRED_FIELDS: Record<
  'D-2' | 'D-10' | 'default',
  Array<keyof OnboardingForm>
> = {
  'D-2': [
    'visaType',
    'expectedGraduationDate',
    'visaStartDate',
    'visaExpiredAt',
  ],
  'D-10': ['visaType', 'visaPoint', 'visaStartDate', 'visaExpiredAt'],
  default: ['visaType', 'visaStartDate', 'visaExpiredAt'],
};

/**
 * 입력 필드 최대 길이
 * @constant
 */
export const FIELD_MAX_LENGTHS = {
  NAME: 30,
  PERSONAL_BACKGROUND: 1000,
} as const;

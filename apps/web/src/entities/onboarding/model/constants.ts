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
  countryCode: '',
  universityCode: '',
  englishLevel: '',
  fieldsOfInterests: [],
  languageLevel: '',
  degreeLocation: 'south-korea',
  degree: '',
  visaType: '',
  expectedGraduationDate: '',
  visaStartDate: '',
  visaExpiredAt: '',
  primaryMajorCode: '',
  secondaryMajor: '',
  targetJob: '',
  targetJobSkill: '',
  personalBackground: '',
  university: '',
};

/**
 * 온보딩 퍼널 step 단계
 * @constant
 */
export const FUNNEL_STEPS = [
  'Identity & Visa verification',
  'Education',
  'Language Skills',
  'Career Preferences',
  'Background',
] as const;

/**
 * 각 단계별 필수 입력 필드 배열
 * */
export const STEP_REQUIRED_FIELDS: Array<Array<keyof OnboardingForm>> = [
  [
    'name',
    'countryCode',
    'birthDate',
    'visaType',
    'visaStartDate',
    'visaExpiredAt',
  ],
  ['universityCode', 'primaryMajorCode', 'degree', 'expectedGraduationDate'],
  ['languageLevel', 'englishLevel'],
  ['fieldsOfInterests', 'targetJob'],
  ['personalBackground'],
];

/**
 * 비자 관련 필수 입력 필드 매핑
 */
export const VISA_REQUIRED_FIELDS: Array<keyof OnboardingForm> = [
  'visaType',
  'visaStartDate',
  'visaExpiredAt',
] as const;

/**
 * 입력 필드 최대 길이
 * @constant
 */
export const FIELD_MAX_LENGTHS = {
  NAME: 30,
  PERSONAL_BACKGROUND: 1000,
} as const;

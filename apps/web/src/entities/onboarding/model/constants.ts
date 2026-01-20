import type { OnboardingForm } from './types';

export const STORAGE_KEY = 'onboarding-form-data';

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

export const FUNNEL_STEPS = [
  'PersonalInformation',
  'VisaInformation',
  'TargetRole',
  'Background',
] as const;

export const STEP_TITLES = [
  'Personal Information',
  'Visa Information',
  'Target Role',
  'Background',
];

export const STEP_REQUIRED_FIELDS: Array<Array<keyof OnboardingForm>> = [
  ['name', 'birthDate', 'country', 'languageLevel', 'degree'],
  ['visaType', 'expectedGraduationDate', 'visaStartDate', 'visaExpiredAt'],
  ['primaryMajor', 'targetJob'],
  ['personalBackground'],
];

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

export const FIELD_MAX_LENGTHS = {
  NAME: 30,
  PERSONAL_BACKGROUND: 1000,
} as const;

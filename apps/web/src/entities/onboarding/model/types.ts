import { paths } from '@shared/types/schema';

export type OnboardingFormRequest =
  paths['/api/v2/members/onboard']['post']['requestBody']['content']['application/json'];

export type OnboardingForm = Omit<
  OnboardingFormRequest,
  'languageLevel' | 'englishLevel' | 'degree' | 'visaType'
> & {
  languageLevel: OnboardingFormRequest['languageLevel'] | '';
  englishLevel: OnboardingFormRequest['englishLevel'] | '';
  degree: string;
  visaType: 'D-2' | 'D-10' | '';
  degreeLocation: string;
};

export type GetMajorListResponse =
  paths['/api/v1/members/onboard/majors']['get']['responses']['200']['content']['*/*'];

export type GetCountryListResponse =
  paths['/api/v1/members/onboard/countries']['get']['responses']['200']['content']['*/*'];

export type GetFieldListResponse =
  paths['/api/v1/members/onboard/fields']['get']['responses']['200']['content']['*/*'];
export type GetUniversityListResponse =
  paths['/api/v1/members/onboard/universities']['get']['responses']['200']['content']['*/*'];

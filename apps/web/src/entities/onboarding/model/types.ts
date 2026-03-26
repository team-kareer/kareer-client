import { paths } from '@shared/types/schema';

export type OnboardingFormRequest =
  paths['/api/v2/members/onboard']['post']['requestBody']['content']['application/json'];

export type OnboardingForm = Omit<
  OnboardingFormRequest,
  'country' | 'languageLevel' | 'degree' | 'visaType' | 'englishLevel'
> & {
  country: OnboardingFormRequest['country'] | '';
  languageLevel: OnboardingFormRequest['languageLevel'] | '';
  degree: string;
  visaType: 'D-2' | 'D-10' | '';
  degreeLocation: string;
  university: string;
  englishLevel: OnboardingFormRequest['englishLevel'] | '';
};

export type GetMajorListResponse =
  paths['/api/v1/members/onboard/majors']['get']['responses']['200']['content']['*/*'];

export type GetCountryListResponse =
  paths['/api/v1/members/onboard/countries']['get']['responses']['200']['content']['*/*'];

export type GetFieldListResponse =
  paths['/api/v1/members/onboard/fields']['get']['responses']['200']['content']['*/*'];

import { paths } from '@shared/types/schema';

export type OnboardingFormRequest =
  paths['/api/v1/members/onboard']['post']['requestBody']['content']['application/json'];

export type OnboardingForm = Omit<
  OnboardingFormRequest,
  'country' | 'languageLevel' | 'degree' | 'visaType'
> & {
  country: OnboardingFormRequest['country'] | '';
  languageLevel: OnboardingFormRequest['languageLevel'] | '';
  degree: OnboardingFormRequest['degree'] | '';
  visaType: OnboardingFormRequest['visaType'] | '';
  degreeLocation: string;
};

export type GetMajorListResponse =
  paths['/api/v1/members/onboard/majors']['get']['responses']['200']['content']['*/*'];

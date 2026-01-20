import { paths } from '@shared/types/schema';

export type OnboardingFormRequest =
  paths['/api/v1/members/onboard']['post']['requestBody']['content']['application/json'];

export type OnboardingForm = OnboardingFormRequest & {
  degreeLocation: string;
};

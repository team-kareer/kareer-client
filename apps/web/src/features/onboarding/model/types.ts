import { paths } from '@shared/types/schema';

export type PostOnboardingForm =
  paths['/api/v1/members/onboard']['post']['requestBody']['content']['application/json'];

export type PostAiRoadMapResponse =
  paths['/api/v1/members/roadmap']['post']['responses']['200']['content']['*/*'];

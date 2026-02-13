import { paths } from '@shared/types/schema';

export type PostOnboardingForm =
  paths['/api/v1/members/onboard']['post']['requestBody']['content']['application/json'];

export type PostAiRoadMapResponse =
  paths['/api/v1/members/roadmap']['post']['responses']['200']['content']['*/*'];

export type VisaType = 'D-2' | 'D-10';

export type VisaValidationContext = {
  issuanceDate: string;
  expirationDate: string;
  expectedGraduationDate: string;
};

export type ValidateDateOptions = {
  allowFuture?: boolean;
  allowPast?: boolean;
};

export type ValidateTextOptions = {
  allowNumber?: boolean;
  allowBasicSpecialCharacters?: boolean;
};

import { paths } from '@shared/types/schema';

export type PostOnboardingForm =
  paths['/api/v2/members/onboard']['post']['requestBody']['content']['application/json'];

export type PostAiRoadMapResponse =
  paths['/api/v1/members/roadmap']['post']['responses']['200']['content']['*/*'];

export type PostOcrVisaResponse =
  paths['/api/v1/members/onboard/ocr/visa']['post']['responses']['200']['content']['*/*'];

export type PostOcrPassportResponse =
  paths['/api/v1/members/onboard/ocr/passport']['post']['responses']['200']['content']['*/*'];

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

export type UploadProgress = {
  done: number;
  total: number;
};

// export interface FileUploadParams {
//   file: File;
//   onProgress: (progress: UploadProgress) => void;
// }

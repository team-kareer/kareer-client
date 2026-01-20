// export interface OnboardingForm {
//   name: string;
//   birthDate: string;
//   country: string;
//   languageLevel: string;
//   degreeLocation: string;
//   degree: string;
//   visaType: string;
//   expectedGraduationDate: string;
//   visaStartDate: string;
//   visaExpiredAt: string;
//   visaPoint: number;
//   primaryMajor: string;
//   secondaryMajor: string;
//   targetJob: string;
//   targetJobSkill: string;
//   personalBackground: string;
// }

import { paths } from '@shared/types/schema';

export type OnboardingFormRequest =
  paths['/api/v1/members/onboard']['post']['requestBody']['content']['application/json'];

export type OnboardingForm = OnboardingFormRequest & {
  degreeLocation: string;
};

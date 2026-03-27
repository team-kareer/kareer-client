import { type VisaType } from '@features/onboarding';

import { validateExpirationDate } from './validateExpirationDate';

export const validateIdentityVisaExpirationDate = (
  value: string,
  visaType: VisaType | undefined,
  visaStartDate?: string,
) => {
  if (!value || !visaType) {
    return true;
  }

  return validateExpirationDate(value, visaStartDate || '', '', visaType);
};

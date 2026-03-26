import { type ValidateDateOptions } from '@features/onboarding/model';
import { validateDate } from '@features/onboarding/model/validation';

export const validateGraduationDate = (
  value: string,
  options: ValidateDateOptions,
) => {
  if (!value) {
    return 'Enter the graduation date';
  }
  return validateDate(value, options);
};

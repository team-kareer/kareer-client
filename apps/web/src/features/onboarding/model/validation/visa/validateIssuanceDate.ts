import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type VisaType } from '@features/onboarding';
import { validateDate } from '@features/onboarding/model/validation';

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

const validateD2Issuance = (
  issuance: Date,
  expectedGraduationDate?: string,
) => {
  if (expectedGraduationDate && DATE_REGEX.test(expectedGraduationDate)) {
    const graduation = new Date(expectedGraduationDate);
    if (issuance >= graduation) {
      return VALIDATION_MESSAGE.VISA.D2_ISSUANCE_AFTER_GRADUATION;
    }
  }
  return true;
};

export const validateIssuanceDate = (
  issuanceDate: string,
  visaType: VisaType | undefined,
  expectedGraduationDate: string | undefined,
) => {
  if (!issuanceDate) {
    return true;
  }

  const dateValidation = validateDate(issuanceDate, false, true);
  if (dateValidation !== true) {
    return dateValidation;
  }

  const issuance = new Date(issuanceDate);

  if (visaType === 'D-2') {
    return validateD2Issuance(issuance, expectedGraduationDate);
  }
  return true;
};

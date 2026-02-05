import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type VisaType } from '@features/onboarding';
import { validateDate } from '@features/onboarding/model/validation';

const D10_ALLOWED_MONTHS = [6, 12, 18, 24, 30, 36];
const D2_YEAR_LIMIT = 2;

const validateD2Expiration = (
  expiration: Date,
  issuance: Date,
  expectedGraduationDate?: string,
) => {
  const limit = new Date(issuance);
  limit.setFullYear(limit.getFullYear() + D2_YEAR_LIMIT);
  if (expiration > limit) {
    return VALIDATION_MESSAGE.VISA.D2_EXCEEDS_TWO_YEARS;
  }
  if (expectedGraduationDate) {
    const graduationDateValidation = validateDate(
      expectedGraduationDate,
      true,
      true,
    );
    if (graduationDateValidation === true) {
      const graduation = new Date(expectedGraduationDate);
      if (expiration < graduation) {
        return VALIDATION_MESSAGE.VISA.D2_EXPIRATION_BEFORE_GRADUATION;
      }
    }
  }
  return true;
};

const validateD10Expiration = (expiration: Date, issuance: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (expiration < today) {
    return VALIDATION_MESSAGE.VISA.D10_EXPIRATION_IN_PAST;
  }
  const allowedDates = D10_ALLOWED_MONTHS.map((months) => {
    const date = new Date(issuance);
    date.setMonth(date.getMonth() + months);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  });

  if (!allowedDates.includes(expiration.getTime())) {
    return VALIDATION_MESSAGE.VISA.D10_INVALID_DURATION;
  }
};

export const validateExpirationDate = (
  expirationDate: string,
  issuanceDate: string,
  expectedGraduationDate: string,
  visaType: VisaType,
) => {
  if (!issuanceDate) {
    return true;
  }

  const issuanceDateValidation = validateDate(issuanceDate, true, true);
  if (issuanceDateValidation !== true) {
    return issuanceDateValidation;
  }

  const expirationDateValidation = validateDate(expirationDate, true, true);
  if (expirationDateValidation !== true) {
    return expirationDateValidation;
  }

  const expiration = new Date(expirationDate);
  const issuance = new Date(issuanceDate);
  switch (visaType) {
    case 'D-2':
      return validateD2Expiration(expiration, issuance, expectedGraduationDate);
    case 'D-10':
      return validateD10Expiration(expiration, issuance);
    default:
      return true;
  }
};

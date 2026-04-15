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
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const limit = new Date(issuance);
  limit.setFullYear(limit.getFullYear() + D2_YEAR_LIMIT);

  if (expiration < today) {
    return VALIDATION_MESSAGE.VISA.D2_EXPIRATION_IN_PAST;
  }

  if (expiration > limit) {
    return VALIDATION_MESSAGE.VISA.D2_EXCEEDS_TWO_YEARS;
  }

  if (expectedGraduationDate) {
    const graduationDateValidation = validateDate(expectedGraduationDate, {
      allowFuture: true,
      allowPast: true,
    });
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

  const isSameDay = expiration.getDate() === issuance.getDate();

  if (expiration < today) {
    return VALIDATION_MESSAGE.VISA.D10_EXPIRATION_IN_PAST;
  }
  const diffMonths =
    (expiration.getFullYear() - issuance.getFullYear()) * 12 +
    (expiration.getMonth() - issuance.getMonth());

  if (!D10_ALLOWED_MONTHS.includes(diffMonths) || !isSameDay) {
    return VALIDATION_MESSAGE.VISA.D10_INVALID_DURATION;
  }
  return true;
};

export const validateExpirationDate = (
  expirationDate: string,
  issuanceDate: string,
  expectedGraduationDate: string,
  visaType: VisaType,
) => {
  if (!expirationDate) {
    return true;
  }

  if (!issuanceDate) {
    return true;
  }

  const issuanceDateValidation = validateDate(issuanceDate, {
    allowFuture: true,
    allowPast: true,
  });
  if (issuanceDateValidation !== true) {
    return issuanceDateValidation;
  }

  const expirationDateValidation = validateDate(expirationDate, {
    allowFuture: true,
    allowPast: true,
  });
  if (expirationDateValidation !== true) {
    return expirationDateValidation;
  }

  const expiration = new Date(expirationDate);
  const issuance = new Date(issuanceDate);

  if (expiration <= issuance) {
    return VALIDATION_MESSAGE.DATE.MUST_BE_AFTER_ISSUANCE;
  }

  switch (visaType) {
    case 'D-2':
      return validateD2Expiration(expiration, issuance, expectedGraduationDate);
    case 'D-10':
      return validateD10Expiration(expiration, issuance);
    default:
      return true;
  }
};

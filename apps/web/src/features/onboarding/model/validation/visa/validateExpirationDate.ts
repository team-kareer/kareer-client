import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type VisaType } from '@features/onboarding';

const D10_ALLOWED_MONTHS = [6, 12, 18, 24, 30, 36];
const D2_YEAR_LIMIT = 2;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

// 발급일 이후인지 체크
const isAfterIssuance = (expiration: Date, issuance: Date) => {
  if (expiration <= issuance) {
    return VALIDATION_MESSAGE.DATE.MUST_BE_AFTER_ISSUANCE;
  }
  return true;
};

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
  if (expectedGraduationDate && DATE_REGEX.test(expectedGraduationDate)) {
    const graduation = new Date(expectedGraduationDate);
    if (expiration < graduation) {
      return VALIDATION_MESSAGE.VISA.D2_EXPIRATION_BEFORE_GRADUATION;
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
  expectedGraduationDate: string | undefined,
  visaType: VisaType,
) => {
  if (!issuanceDate) {
    return true;
  }
  if (!DATE_REGEX.test(issuanceDate) || !DATE_REGEX.test(expirationDate)) {
    return true;
  }

  const expiration = new Date(expirationDate);
  const issuance = new Date(issuanceDate);

  const afterIssuance = isAfterIssuance(expiration, issuance);
  if (afterIssuance !== true) {
    return afterIssuance;
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

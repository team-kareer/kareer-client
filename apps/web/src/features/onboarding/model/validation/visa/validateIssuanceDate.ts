import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type VisaType } from '@features/onboarding';

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

const isAfterToday = (issuance: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (issuance > today) {
    return VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED;
  }
  return true;
};

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

  const issuance = new Date(issuanceDate);

  const afterToday = isAfterToday(issuance);
  if (afterToday !== true) {
    return afterToday;
  }
  if (visaType === 'D-2') {
    return validateD2Issuance(issuance, expectedGraduationDate);
  }
  return true;
};

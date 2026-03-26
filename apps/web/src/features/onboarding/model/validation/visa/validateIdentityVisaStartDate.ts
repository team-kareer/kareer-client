import { VALIDATION_MESSAGE } from '@widgets/onboarding';

import { validateDate } from '../common/validateDate';

const INVALID_VISA_DATE_MESSAGE = 'Please enter a valid date';

export const validateIdentityVisaStartDate = (
  value: string,
  visaExpirationDate?: string,
) => {
  if (!value) {
    return 'Enter the visa start date';
  }

  const result = validateDate(value, { allowPast: true });

  if (
    result === VALIDATION_MESSAGE.DATE.INVALID_FORMAT ||
    result === VALIDATION_MESSAGE.DATE.INVALID_DATE ||
    result === VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED
  ) {
    return INVALID_VISA_DATE_MESSAGE;
  }

  if (visaExpirationDate) {
    const expirationDateValidation = validateDate(visaExpirationDate, {
      allowFuture: true,
      allowPast: true,
    });

    if (expirationDateValidation === true) {
      const startDate = new Date(value);
      const expirationDate = new Date(visaExpirationDate);

      if (startDate > expirationDate) {
        return VALIDATION_MESSAGE.VISA.START_DATE_AFTER_EXPIRATION;
      }
    }
  }

  return result;
};

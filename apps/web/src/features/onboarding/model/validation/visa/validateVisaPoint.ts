import { VALIDATION_MESSAGE } from '@widgets/onboarding';

import { DIGITS_ONLY_REGEX } from '../common/regex';

const D10_MIN_VISA_POINT = 60;
const D10_MAX_VISA_POINT = 190;

export const validateVisaPoint = (value: string) => {
  const isValid =
    !!value &&
    DIGITS_ONLY_REGEX.test(value) &&
    Number(value) > D10_MIN_VISA_POINT &&
    Number(value) < D10_MAX_VISA_POINT;

  return isValid || VALIDATION_MESSAGE.NUMBER.INVALID;
};

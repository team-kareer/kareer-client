import { VALIDATION_MESSAGE } from '@widgets/onboarding';

const D10_MIN_VISA_POINT = 60;
const D10_MAX_VISA_POINT = 190;

export const validateVisaPoint = (value: string) => {
  const isValid =
    !!value &&
    /^\d+$/.test(value) &&
    Number(value) > D10_MIN_VISA_POINT &&
    Number(value) < D10_MAX_VISA_POINT;

  return isValid || VALIDATION_MESSAGE.NUMBER.INVALID;
};

import { VALIDATION_MESSAGE } from '@widgets/onboarding';

export const validateNumber = (value: string) => {
  if (!value) return VALIDATION_MESSAGE.NUMEBR.INVALID;
  if (!/^\d+$/.test(value)) return VALIDATION_MESSAGE.NUMEBR.INVALID;
  return true;
};

export const validateDate = (value: string) => {
  if (!value) return VALIDATION_MESSAGE.DATE.INVALID;
  const regex = /^\d{4}\.\d{2}\.\d{2}$/;
  if (!regex.test(value)) return VALIDATION_MESSAGE.DATE.INVALID;
  return true;
};

export const validateName = (value: string) => {
  if (!value) return VALIDATION_MESSAGE.NAME.EMPTY;
  return true;
};

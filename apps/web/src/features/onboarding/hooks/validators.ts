import { VALIDATION_MESSAGE } from '@widgets/onboarding';

export const validateNumber = (value: string) => {
  if (!value) return VALIDATION_MESSAGE.NUMEBR.INVALID;
  if (!/^\d+$/.test(value)) return VALIDATION_MESSAGE.NUMEBR.INVALID;
  return true;
};

export const validateDate = (value: string) => {
  if (!value) return VALIDATION_MESSAGE.DATE.INVALID;

  if (!/^[\d.]+$/.test(value)) return VALIDATION_MESSAGE.DATE.INVALID;

  const regex = /^\d{4}\.\d{2}\.\d{2}$/;
  if (!regex.test(value)) {
    const partialPattern = /^(\d{0,4})(\.\d{0,2})?(\.\d{0,2})?$/;
    if (partialPattern.test(value)) {
      return true;
    }
    return VALIDATION_MESSAGE.DATE.INVALID;
  }
  const dateParts = value.split('.');
  const year = parseInt(dateParts[0] || '', 10);
  if (isNaN(year) || year > 2026) return VALIDATION_MESSAGE.DATE.INVALID;

  return true;
};

export const validateName = (value: string) => {
  if (!value) return VALIDATION_MESSAGE.NAME.EMPTY;
  return true;
};

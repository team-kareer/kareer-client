import { VALIDATION_MESSAGE } from '@widgets/onboarding';

export const validateText = (value: string) => {
  if (value.trim().length === 0) {
    return VALIDATION_MESSAGE.NAME.EMPTY;
  }

  const allowanceKeywords = /^[\p{L}\s]+$/u;
  if (!allowanceKeywords.test(value)) {
    return VALIDATION_MESSAGE.NAME.SPECIAL_CHARACTERS;
  }
  return true;
};

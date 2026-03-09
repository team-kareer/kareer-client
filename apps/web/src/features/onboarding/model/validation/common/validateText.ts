import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type ValidateTextOptions } from '@features/onboarding';

import { BASIC_SPECIAL, LETTER, NEW_LINE, NUMBER, SPACE } from './regex';

export const validateText = (
  value: string | undefined,
  options: ValidateTextOptions = {},
) => {
  const { allowNumber = false, allowBasicSpecialCharacters = false } = options;

  if (!value || value.trim().length === 0) {
    return VALIDATION_MESSAGE.NAME.EMPTY;
  }

  // 기본 패턴 설정
  let patternRegex = LETTER + SPACE + NEW_LINE;

  if (allowNumber) {
    patternRegex += NUMBER;
  }
  if (allowBasicSpecialCharacters) {
    patternRegex += BASIC_SPECIAL;
  }

  const regex = new RegExp(`^[${patternRegex}]+$`, 'u');
  if (!regex.test(value)) {
    return VALIDATION_MESSAGE.NAME.SPECIAL_CHARACTERS;
  }
  return true;
};

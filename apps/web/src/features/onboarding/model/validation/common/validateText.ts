import { VALIDATION_MESSAGE } from '@widgets/onboarding';
import { type ValidateTextOptions } from '@features/onboarding';

export const validateText = (
  value: string | undefined,
  options: ValidateTextOptions = {},
) => {
  const { allowNumber = false, allowBasicSpecialCharacters = false } = options;

  if (!value || value.trim().length === 0) {
    return VALIDATION_MESSAGE.NAME.EMPTY;
  }

  const LETTER = '\\p{L}';
  const SPACE = ' ';
  const NEW_LINE = '\n';
  const NUMBER = '0-9';
  const BASIC_SPECIAL = '_/,:;"\'\\\\!?.-';

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

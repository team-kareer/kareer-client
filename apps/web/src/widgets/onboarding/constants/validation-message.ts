/**
 * 폼 검증 시 사용되는 에러 메시지 상수
 * @constant
 * @property NUMEBR - 숫자 검증 관련
 * @property DATE - 날짜 검증 관련
 * @property VISA - 비자 검증 관련
 * @property NAME - 이름 검증 관련
 */
export const VALIDATION_MESSAGE = {
  NUMEBR: {
    INVALID: 'Please enter a valid number',
  },
  DATE: {
    INVALID_FORMAT: 'Please use the format YYYY-MM-DD.',
    FUTURE_NOT_ALLOWED: 'Future dates are not allowed.',
    MUST_BE_AFTER_ISSUANCE: 'The date must be after the visa issuance date.',
  },
  VISA: {
    D2_EXCEEDS_ONE_YEAR:
      'D-2 visa must be valid for at most one year from the issuance date.',
    D10_LESS_THAN_SIX_MONTHS:
      'D-10 visa must be valid for at least six months from the issuance date.',
  },
  NAME: {
    EMPTY: "Your name can't be empty.",
    SPECIAL_CHARACTERS: 'Please use standard letters only.',
  },
} as const;

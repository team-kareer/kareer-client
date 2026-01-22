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
    INVALID_DATE: 'Invalid date. Please enter a valid calendar date.',
    FUTURE_NOT_ALLOWED: 'Future dates are not allowed.',
    PAST_NOT_ALLOWED:
      'Please enter a future date for your expected graduation.',
    MUST_BE_AFTER_ISSUANCE: 'The date must be after the visa issuance date.',
  },
  VISA: {
    D2_EXCEEDS_TWO_YEARS:
      'D-2 visa must be valid for at least two year from the issuance date.',
    D10_LESS_THAN_SIX_MONTHS:
      'Invalid expiration date. The D-10 visa must be set in 6-month intervals.',
    D10_EXPIRATION_IN_PAST:
      'Please select a valid D-10 visa expiration date that is not in the past.',
    D2_ISSUANCE_AFTER_GRADUATION:
      'Please enter a graduation date that is later than your visa issuance date.',
  },
  NAME: {
    EMPTY: "Your name can't be empty.",
    SPECIAL_CHARACTERS: 'Please use standard letters only.',
  },
} as const;

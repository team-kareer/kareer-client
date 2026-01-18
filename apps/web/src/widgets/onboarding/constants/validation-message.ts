export const VALIDATION_MESSAGE = {
  NUMEBR: {
    INVALID: 'Please enter a valid number',
  },
  DATE: {
    INVALID_FORMAT: 'Please use the format YYYY-MM-DD.',
    FUTURE_NOT_ALLOWED: 'Future dates are not allowed.',
  },
  NAME: {
    EMPTY: "Your name can't be empty.",
    SPECIAL_CHARACTERS: 'Please use standard letters only.',
  },
} as const;

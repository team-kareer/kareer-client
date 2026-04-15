import i18n from '@shared/i18n/i18n';

/**
 * 폼 검증 시 사용되는 에러 메시지 상수
 * @constant
 * @property NUMEBR - 숫자 검증 관련
 * @property DATE - 날짜 검증 관련
 * @property VISA - 비자 검증 관련
 * @property NAME - 이름 검증 관련
 */
export const VALIDATION_MESSAGE = {
  NUMBER: {
    get INVALID() {
      return i18n.t('validation.number.invalid', { ns: 'onboarding' });
    },
  },
  DATE: {
    get INVALID_FORMAT() {
      return i18n.t('validation.date.invalidFormat', { ns: 'onboarding' });
    },
    get INVALID_DATE() {
      return i18n.t('validation.date.invalidDate', { ns: 'onboarding' });
    },
    get FUTURE_NOT_ALLOWED() {
      return i18n.t('validation.date.futureNotAllowed', {
        ns: 'onboarding',
      });
    },
    get PAST_NOT_ALLOWED() {
      return i18n.t('validation.date.pastNotAllowed', { ns: 'onboarding' });
    },
    get MUST_BE_AFTER_ISSUANCE() {
      return i18n.t('validation.date.mustBeAfterIssuance', {
        ns: 'onboarding',
      });
    },
    get INVALID_VISA_DATE_MESSAGE() {
      return i18n.t('validation.date.invalidVisaDate', {
        ns: 'onboarding',
      });
    },
  },
  VISA: {
    get D2_EXPIRATION_IN_PAST() {
      return i18n.t('validation.visa.d2ExpirationInPast', {
        ns: 'onboarding',
      });
    },
    get D2_EXCEEDS_TWO_YEARS() {
      return i18n.t('validation.visa.d2ExceedsTwoYears', {
        ns: 'onboarding',
      });
    },
    get D2_EXPIRATION_BEFORE_GRADUATION() {
      return i18n.t('validation.visa.d2ExpirationBeforeGraduation', {
        ns: 'onboarding',
      });
    },
    get D10_INVALID_DURATION() {
      return i18n.t('validation.visa.d10InvalidDuration', {
        ns: 'onboarding',
      });
    },
    get D10_EXPIRATION_IN_PAST() {
      return i18n.t('validation.visa.d10ExpirationInPast', {
        ns: 'onboarding',
      });
    },
    get D2_ISSUANCE_AFTER_GRADUATION() {
      return i18n.t('validation.visa.d2IssuanceAfterGraduation', {
        ns: 'onboarding',
      });
    },
    get START_DATE_AFTER_EXPIRATION() {
      return i18n.t('validation.visa.startDateAfterExpiration', {
        ns: 'onboarding',
      });
    },
    get FUTURE_ISSUANCE_DATE() {
      return i18n.t('validation.visa.futureIssuanceDate', {
        ns: 'onboarding',
      });
    },
  },
  NAME: {
    get EMPTY() {
      return i18n.t('validation.name.empty', { ns: 'onboarding' });
    },
    get SPECIAL_CHARACTERS() {
      return i18n.t('validation.name.specialCharacters', {
        ns: 'onboarding',
      });
    },
    get MAX_LENGTH() {
      return i18n.t('validation.name.maxLength', {
        ns: 'onboarding',
      });
    },
  },
} as const;

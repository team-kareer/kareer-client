import { VALIDATION_MESSAGE } from '@widgets/onboarding';

export const validateNumber = (value: string) => {
  if (!value) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  if (!/^\d+$/.test(value)) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  if (Number(value) <= 60 || Number(value) > 190) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  return true;
};

export const validateDate = (value: string, allowFuture = false) => {
  if (!value) {
    return true;
  }

  // 숫자와 점만 허용
  if (!/^[\d-]+$/.test(value)) {
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  // 완전한 형식 체크 (YYYY-MM-DD)
  const regex = /^\d{4}\-\d{2}\-\d{2}$/;
  if (!regex.test(value)) {
    // 부분 형식 체크 (입력 중일 때는 통과)
    const partialPattern = /^(\d{0,4})(\-\d{0,2})?(\-\d{0,2})?$/;
    if (partialPattern.test(value)) {
      return true; // 입력 중이면 통과
    }
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  // 날짜 파싱 및 미래 날짜 체크
  const dateParts = value.split('-');
  const year = parseInt(dateParts[0] || '', 10);
  const month = parseInt(dateParts[1] || '', 10);
  const day = parseInt(dateParts[2] || '', 10);

  // 날짜 유효성 검사
  const inputDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 날짜가 유효한지 체크 (예: 2024.13.32 같은 경우)
  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getDate() !== day
  ) {
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  // 미래 날짜 체크 (allowFuture가 false일 때만)
  if (!allowFuture && inputDate > today) {
    return VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED;
  }

  return true;
};

export const validateName = (value: string) => {
  // 공백
  if (value.trim().length === 0) {
    return VALIDATION_MESSAGE.NAME.EMPTY;
  }

  // 특수문자 제한
  const restrictedChars = /[()@#$%!]/;
  if (restrictedChars.test(value)) {
    return VALIDATION_MESSAGE.NAME.SPECIAL_CHARACTERS;
  }

  return true;
};

export const validateVisaExpirationDate = (
  expirationDate: string,
  visaType: string | undefined,
  issuanceDate: string | undefined,
) => {
  // 발급일이 없으면 통과 (발급일 입력 후 재검증됨)
  if (!issuanceDate) {
    return true;
  }

  // 날짜 형식 체크
  const dateRegex = /^\d{4}\-\d{2}\-\d{2}$/;
  if (!dateRegex.test(expirationDate) || !dateRegex.test(issuanceDate)) {
    return true; // 형식 체크는 validateDate에서 처리
  }

  // 날짜 파싱
  const expiration = new Date(expirationDate);
  const issuance = new Date(issuanceDate);

  // 발급일 이후인지 체크
  if (expiration <= issuance) {
    return VALIDATION_MESSAGE.DATE.MUST_BE_AFTER_ISSUANCE;
  }

  // 비자 타입별 검증
  if (visaType === 'D-2') {
    // D-2: 발급일로부터 2년을 초과하면 에러
    const oneYearLater = new Date(issuance);
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 2);

    if (expiration > oneYearLater) {
      return VALIDATION_MESSAGE.VISA.D2_EXCEEDS_ONE_YEAR;
    }
  } else if (visaType === 'D-10') {
    // D-10: 발급일로부터 6개월 미만이면 에러
    const sixMonthsLater = new Date(issuance);
    sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

    if (expiration < sixMonthsLater) {
      return VALIDATION_MESSAGE.VISA.D10_LESS_THAN_SIX_MONTHS;
    }
  }

  return true;
};

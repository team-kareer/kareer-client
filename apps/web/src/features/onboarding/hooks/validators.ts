import { VALIDATION_MESSAGE } from '@widgets/onboarding';

const D10_MIN_VISA_POINT = 60;
const D10_MAX_VISA_POINT = 190;

/**
 * 비자 포인트 숫자 값 검증
 * @description 숫자 형식이며 60 초과 190 이하인지 검증
 */
export const validateNumber = (value: string) => {
  if (!value) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  if (!/^\d+$/.test(value)) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  if (
    Number(value) <= D10_MIN_VISA_POINT ||
    Number(value) > D10_MAX_VISA_POINT
  ) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  return true;
};

/**
 * 날짜 형식을 검증하는 함수
 * @param value - 검증할 날짜 문자열
 * @param [allowFuture=false] - 미래 날짜 허용 여부
 * @description YYYY-MM-DD 형식 검증 및 유효한 날짜인지 확인, false면 미래 날짜 거부
 */
export const validateDate = (value: string, allowFuture = false) => {
  if (!value) {
    return true;
  }

  // 숫자와 점만 허용
  if (!/^[\d-]+$/.test(value)) {
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  // 완전한 형식 체크 (YYYY-MM-DD)
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(value)) {
    // 부분 형식 체크 (입력 중일 때는 통과)
    const partialPattern = /^(\d{0,4})(-\d{0,2})?(-\d{0,2})?$/;
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

/**
 * 이름 값을 검증하는 함수
 * @param value - 검증할 이름 문자열
 * @returns 검증 통과 시 true, 실패 시 에러 메시지 반환
 * @description 공백 있는지 체크하고 특수문자 사용 여부 검증
 */
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

/**
 * 비자 만료일을 검증하는 함수
 * @param expirationDate - 검증할 만료일
 * @param visaType - 비자 타입
 * @param issuanceDate - 비자 발급일
 * @returns 검증 통과 시 true, 실패 시 에러 메시지 반환
 * @description 발급일 이후인지 확인하고, 비자 타입별 규칙 검증 (D-2: 발급일로부터 2년 이내, D-10: 발급일로부터 6개월 이상)
 */
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
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
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

  // 비자 타입별 검증 (UI 값으로 비교)
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

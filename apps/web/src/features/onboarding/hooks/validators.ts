import { VALIDATION_MESSAGE } from '@widgets/onboarding';

const D10_MIN_VISA_POINT = 60;
const D10_MAX_VISA_POINT = 190;

/**
 * Autocomplete 옵션 검증 함수
 * @param value - 검증할 값
 * @param options - 허용된 옵션 배열
 * @returns 검증 통과 시 true, 실패 시 에러 메시지 반환
 * @description 선택된 값이 옵션 목록에 있는지 확인
 */
export const validateAutocompleteOption = (
  value: string | undefined,
  options: string[],
): true | string => {
  if (!value) {
    return true; // 빈 값은 required 규칙에서 처리
  }
  if (!options.includes(value)) {
    return 'Please select a valid option from the list.';
  }
  return true;
};

/**
 * 비자 포인트 숫자 값 검증
 * @description 숫자 형식이며 60 이상 190 이하인지 검증
 */
export const validateNumber = (value: string) => {
  if (!value) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  if (!/^\d+$/.test(value)) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  if (
    Number(value) < D10_MIN_VISA_POINT ||
    Number(value) > D10_MAX_VISA_POINT
  ) {
    return VALIDATION_MESSAGE.NUMEBR.INVALID;
  }
  return true;
};

/**
 * 날짜 형식을 검증하는 함수
 * @param value - 검증할 날짜 문자열
 * @param 미래 날짜 허용 여부
 * @description YYYY-MM-DD 형식 검증 및 유효한 날짜인지 확인, false면 미래 날짜 거부
 */
export const validateDate = (
  value: string,
  allowFuture = false,
  allowPast = false,
) => {
  if (!value) {
    return true;
  }

  // 숫자와 하이픈만 허용
  if (!/^[\d-]+$/.test(value)) {
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  // 완전한 형식 체크 (YYYY-MM-DD) - 반드시 2자리 숫자
  const completeFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  const hasCompleteFormat = completeFormatRegex.test(value);

  // 완전한 형식이 아니면 부분 형식 체크
  if (!hasCompleteFormat) {
    // 하이픈으로 구분된 3부분이 모두 있는지 체크 (한 자리 숫자 포함)
    const threePartsPattern = /^(\d+)-(\d+)-(\d+)$/;
    const threePartsMatch = value.match(threePartsPattern);

    if (threePartsMatch) {
      // 완전한 형식이지만 월이나 일이 2자리가 아니면 에러
      const yearPart = threePartsMatch[1] ?? '';
      const monthPart = threePartsMatch[2] ?? '';
      const dayPart = threePartsMatch[3] ?? '';
      if (
        yearPart.length !== 4 ||
        monthPart.length !== 2 ||
        dayPart.length !== 2
      ) {
        return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
      }
    } else {
      // 부분 형식 체크 (입력 중일 때는 통과)
      const partialPattern = /^(\d{0,4})(-\d{0,2})?(-\d{0,2})?$/;
      if (partialPattern.test(value)) {
        return true; // 입력 중이면 통과
      }
      return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
    }
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

  // 날짜가 유효한지 체크 (예: 2023-02-29, 2023-13-01 같은 경우)
  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getDate() !== day
  ) {
    return VALIDATION_MESSAGE.DATE.INVALID_DATE;
  }

  // 미래 날짜 체크 (allowFuture가 false일 때만)
  if (!allowFuture && inputDate > today) {
    return VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED;
  }

  // 과거 날짜 체크 (allowPast가 false일 때만)
  if (!allowPast && inputDate < today) {
    return VALIDATION_MESSAGE.DATE.PAST_NOT_ALLOWED;
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
  const restrictedChars = /[()@#$%!*&^_=+`~'"-<>,;.:\\/|{}[\]?]/;
  if (restrictedChars.test(value)) {
    return VALIDATION_MESSAGE.NAME.SPECIAL_CHARACTERS;
  }

  return true;
};

/**
 * 비자 발급일을 검증하는 함수
 * @param issuanceDate - 검증할 발급일
 * @param visaType - 비자 타입
 * @param expectedGraduationDate - 졸업 예정일 (D-2인 경우)
 * @returns 검증 통과 시 true, 실패 시 에러 메시지 반환
 * @description D-2 비자 타입일 경우, 발급일이 졸업 예정일보다 미래인지 확인
 */
export const validateVisaIssuanceDate = (
  issuanceDate: string,
  visaType: string | undefined,
  expectedGraduationDate: string | undefined,
) => {
  // 날짜 형식 체크
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(issuanceDate)) {
    return true; // 형식 체크는 validateDate에서 처리
  }

  // 오늘 날짜 (시간 부분 제거)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 날짜 파싱
  const issuance = new Date(issuanceDate);
  issuance.setHours(0, 0, 0, 0);

  // D-2 비자 타입: 졸업예정일 없이 미래 날짜 입력 시 에러
  if (visaType === 'D-2') {
    // 졸업 예정일이 없고, 발급일이 현재 날짜 기준 미래면 에러
    if (!expectedGraduationDate && issuance > today) {
      return VALIDATION_MESSAGE.VISA.FUTURE_ISSUANCE_DATE;
    }

    // 졸업 예정일이 있는 경우 기존 검증
    if (expectedGraduationDate) {
      if (!dateRegex.test(expectedGraduationDate)) {
        return true; // 형식 체크는 validateDate에서 처리
      }

      const graduation = new Date(expectedGraduationDate);

      // 발급일이 졸업 예정일보다 미래이면 에러
      if (issuance >= graduation) {
        return VALIDATION_MESSAGE.VISA.D2_ISSUANCE_AFTER_GRADUATION;
      }
    }
  }

  // D-10 비자 타입: 발급일이 현재 날짜 기준 미래면 에러
  if (visaType === 'D-10' && issuance > today) {
    return VALIDATION_MESSAGE.VISA.FUTURE_ISSUANCE_DATE;
  }

  return true;
};

/**
 * 비자 만료일을 검증하는 함수
 * @param expirationDate - 검증할 만료일
 * @param visaType - 비자 타입
 * @param issuanceDate - 비자 발급일
 * @returns 검증 통과 시 true, 실패 시 에러 메시지 반환
 * @description 발급일 이후인지 확인하고, 비자 타입별 규칙 검증 (D-2: 발급일로부터 2년 이내, D-10: 발급일로부터 딱 6개월이 아닌 경우) ex-> 2025-01-01 ~ 2025-06-01
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
      return VALIDATION_MESSAGE.VISA.D2_EXCEEDS_TWO_YEARS;
    }
  } else if (visaType === 'D-10') {
    // 오늘 날짜 체크 (시간 부분 제거)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expirationDateOnly = new Date(expiration);
    expirationDateOnly.setHours(0, 0, 0, 0);

    // 만료일이 오늘보다 과거이면 에러
    if (expirationDateOnly < today) {
      return VALIDATION_MESSAGE.VISA.D10_EXPIRATION_IN_PAST;
    }

    // 발급일로부터 6개월 단위가 아니면 에러
    // ex-> 2025-01-01 ~ 2025-06-01
    const allowedMonths = [6, 12, 18, 24, 30, 36];

    const allowedDates = allowedMonths.map((months) => {
      const date = new Date(issuance);
      date.setMonth(date.getMonth() + months);
      date.setHours(0, 0, 0, 0);
      return date.getTime();
    });

    if (!allowedDates.includes(expirationDateOnly.getTime())) {
      return VALIDATION_MESSAGE.VISA.D10_LESS_THAN_SIX_MONTHS;
    }
  }

  return true;
};

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
export const validateVisaPoint = (value: string) => {
  const isValid =
    !!value &&
    /^\d+$/.test(value) &&
    Number(value) >= D10_MIN_VISA_POINT &&
    Number(value) <= D10_MAX_VISA_POINT;

  return isValid || VALIDATION_MESSAGE.NUMEBR.INVALID;
};

/**
 * 날짜 형식을 검증하는 함수
 * @param value - 검증할 날짜 문자열
 * @param 미래 날짜 허용 여부
 * @description YYYY-MM-DD 형식 검증 및 유효한 날짜인지 확인, false면 미래 날짜 거부
 */
// 단계 나누기 : 입력중 -> 형식 완성 -> 날짜 유효성 -> 미래 과거 규칙
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

  const completeFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  const hasCompleteFormat = completeFormatRegex.test(value);

  // 완전한 형식 체크
  if (!hasCompleteFormat) {
    return VALIDATION_MESSAGE.DATE.INVALID_FORMAT;
  }

  const [year, month, day] = value.split('-');
  const yearNumber = Number(year);
  const monthNumber = Number(month);
  const dayNumber = Number(day);

  const inputDate = new Date(yearNumber, monthNumber - 1, dayNumber);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (
    inputDate.getFullYear() !== yearNumber ||
    inputDate.getMonth() !== monthNumber - 1 ||
    inputDate.getDate() !== dayNumber
  ) {
    return VALIDATION_MESSAGE.DATE.INVALID_DATE;
  }

  if (!allowFuture && inputDate > today) {
    return VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED;
  } else if (!allowPast && inputDate < today) {
    return VALIDATION_MESSAGE.DATE.PAST_NOT_ALLOWED;
  }

  return true;
};

/**
 * 텍스트 필드 값을 검증하는 함수
 * @param value - 검증할 텍스트 필드
 * @description 공백 체크 후 허용 정규식 키워드 검증 -> 이모티콘, 특수문자
 */
export const validateTextField = (value: string) => {
  if (value.trim().length === 0) {
    return VALIDATION_MESSAGE.NAME.EMPTY;
  }

  // 허용 키워드 정규식
  const allowanceKeywords = /^[\p{L}\s]+$/u;
  if (!allowanceKeywords.test(value)) {
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
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const issuance = new Date(issuanceDate);
  issuance.setHours(0, 0, 0, 0);

  // D-2, D-10 공통 : 발급일이 현재 날짜 기준 미래면 에러
  if (issuance > today) {
    return VALIDATION_MESSAGE.DATE.FUTURE_NOT_ALLOWED;
  }
  if (visaType === 'D-2') {
    if (expectedGraduationDate) {
      if (!dateRegex.test(expectedGraduationDate)) {
        return true;
      }
      const graduation = new Date(expectedGraduationDate);

      // 발급일이 졸업 예정일보다 미래이면 에러
      if (issuance >= graduation) {
        return VALIDATION_MESSAGE.VISA.D2_ISSUANCE_AFTER_GRADUATION;
      }
    }
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

import { COMPLETE_DATE_FORMAT } from './constants';

type DateParts = [year: number, month: number, day: number];

/**
 * YYYY-MM-DD 형식의 문자열을 연-월-일로 분리
 * @param value YYYY-MM-DD 형식의 문자열
 * @returns [year, month, day] 날짜 배열
 */
const parseDateParts = (value: string): DateParts => {
  const [year, month, day] = value.split('-').map(Number) as DateParts;

  return [year, month, day];
};

/**
 * 날짜 문자열을 로컬 Date로 변환
 * @param value 변환할 날짜 문자열
 * @returns 로컬 기준 Date 객체
 */
export const toLocalDate = (value: string): Date => {
  const [year, month, day] = parseDateParts(value);

  return new Date(year, month - 1, day);
};

/**
 * 실제 존재하는 날짜인지 확인
 * @param value YYYY-MM-DD 형식의 문자열
 * @returns 실제 존재 여부
 */
export const isRealDate = (value: string): boolean => {
  if (!COMPLETE_DATE_FORMAT.test(value)) {
    return false;
  }

  const [year, month, day] = parseDateParts(value);
  const date = toLocalDate(value);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
};

/**
 * 오늘 날짜를 시간 정보 없이 로컬 Date로 반환
 * @returns 로컬 자정 기준의 오늘 날짜
 */
export const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today;
};

import { z } from 'zod';

import {
  BASIC_SPECIAL,
  COMPLETE_DATE_FORMAT,
  LETTER,
  NEW_LINE,
  NUMBER,
  SPACE,
} from './constants';
import type { DateSchemaOptions, Option, TextSchemaOptions } from './types';

type DateParts = [year: number, month: number, day: number];

/**
 * YYYY-MM-DD 형식의 날짜 문자열을 연/월/일 숫자 구성값으로 변환
 * 날짜 검증 & 로컬 Date 생성할때 반복되는 Spit('-')를 한곳에서 처리
 *
 * @param value 검증을 통과한 날짜 문자열
 * @returns year/month/day
 */
const parseDateParts = (value: string): DateParts => {
  const [year, month, day] = value.split('-').map(Number) as [
    number,
    number,
    number,
  ];
  return [year, month, day];
};

/**
 * 공백 문자를 제외한 입력 내용이 있는지 확인
 * @param value 검사할 문자열
 * @returns 공백만 있거나 빈 문자열이면 true
 */
const isBlank = (value: string) => value.trim().length === 0;

/**
 * YYYY-MM-DD 형식의 날짜 문자열이 실제 존재하는 날짜인지 확인
 * 문자열을 연-월-일로 분리해 로컬 Date를 생성 후 일치하는지 비교
 * @param value 형식 검증을 통과한 날짜 문자열
 * @returns 실제 존재하는 날짜이면 true
 */
const isRealDate = (value: string): boolean => {
  const [year, month, day] = parseDateParts(value);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  );
};

/**
 * YYYY-MM-DD 문자열을 Date 객체로 변환
 * @param value 형식 검증을 통과한 날짜 문자열
 * @returns 로컬 날짜를 나타내는 Date 객체
 */
const toLocalDate = (value: string): Date => {
  const [year, month, day] = parseDateParts(value);
  return new Date(year, month - 1, day);
};

/**
 * 텍스트 입력값 검증
 * @param options - 오류 메시지, 최대 길이, 숫자 및 기본 특수문자 허용 여부
 * @description
 * - 공백만 있는 값
 * - 최대 길이
 * - 허용되지 않은 문자
 * - 입력 문자열은 변환하지 않고 검사에만 trim 적용함
 * @returns 공통 텍스트 검증용 Zod 스키마
 */
export const createTextSchema = ({
  messages,
  maxLength,
  allowNumber = false,
  allowBasicSpecialCharacters = false,
}: TextSchemaOptions) => {
  let allowedCharacters = LETTER + SPACE + NEW_LINE;

  if (allowNumber) {
    allowedCharacters += NUMBER;
  }
  if (allowBasicSpecialCharacters) {
    allowedCharacters += BASIC_SPECIAL;
  }

  const allowedCharacterPattern = new RegExp(`^[${allowedCharacters}]+$`, 'u');

  return z.string().superRefine((value, context) => {
    if (isBlank(value)) {
      context.addIssue({ code: 'custom', message: messages.empty });
      return;
    }

    if (maxLength !== undefined && value.length > maxLength) {
      context.addIssue({
        code: 'custom',
        message: messages.maxLength ?? messages.invalid,
      });
      return;
    }

    if (!allowedCharacterPattern.test(value)) {
      context.addIssue({ code: 'custom', message: messages.invalid });
    }
  });
};

/**
 * 날짜 문자열 검증
 * @param options - 오류 메시지, 과거 & 미래 날짜 허용 여부
 * @description
 * - YYYY-MM-DD 형식
 * - 실제 존재하는 날짜인지 여부
 * - 금일 기준으로 과거&미래 허용 범위 검증
 * - 빈 값의 필수 여부는 각 스텝 스키마에서 별도로 검증 진행
 * @returns 날짜 문자열 검증용 Zod 스키마
 */
export const createDateSchema = ({
  messages,
  allowFuture = false,
  allowPast = false,
}: DateSchemaOptions) =>
  z.string().superRefine((value, context) => {
    if (!value) {
      return;
    }

    if (!COMPLETE_DATE_FORMAT.test(value)) {
      context.addIssue({ code: 'custom', message: messages.invalidFormat });
      return;
    }

    if (!isRealDate(value)) {
      context.addIssue({ code: 'custom', message: messages.invalidDate });
      return;
    }

    const inputDate = toLocalDate(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!allowFuture && inputDate > today) {
      context.addIssue({
        code: 'custom',
        message: messages.futureNotAllowed,
      });
      return;
    }

    if (!allowPast && inputDate < today) {
      context.addIssue({ code: 'custom', message: messages.pastNotAllowed });
    }
  });

/**
 * Autocomplete 옵션 검증
 * @param options - code를 기준으로 대조할 옵션 목록
 * @description
 * - 빈 값은 허용하고 값이 있으면 전달받은 옵션과 일치하는지 검증
 * @returns 옵션 코드 검증용 Zod 스키마
 */
export const createOptionSchema = (options: Option[]) =>
  z
    .string()
    .refine(
      (value) => !value || options.some((option) => option.code === value),
      { message: '' },
    );

import { z } from 'zod';

import {
  BASIC_SPECIAL,
  COMPLETE_DATE_FORMAT,
  LETTER,
  NEW_LINE,
  NUMBER,
  SPACE,
} from './constants';
import { getToday, isRealDate, toLocalDate } from './date';
import type {
  DateSchemaOptions,
  FixedOptionSchemaOptions,
  OptionSchemaOptions,
  TextSchemaOptions,
} from './types';

/**
 * 공백 문자를 제외한 입력 내용이 있는지 확인
 * @param value 검사할 문자열
 * @returns 공백만 있거나 빈 문자열이면 true
 */
const isBlank = (value: string) => value.trim().length === 0;

/**
 * 텍스트 입력값 검증
 * @param options - 오류 메시지, 최대 길이, 숫자 및 기본 특수문자, 빈 문자열 허용 여부
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
  allowEmpty = false,
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
    if (allowEmpty && value === '') {
      return;
    }

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
 * - 빈 값
 * - YYYY-MM-DD 형식
 * - 실제 존재하는 날짜인지 여부
 * - 금일 기준으로 과거&미래 허용 범위 검증
 * @returns 날짜 문자열 검증용 Zod 스키마
 */
export const createDateSchema = ({
  messages,
  allowFuture = false,
  allowPast = false,
}: DateSchemaOptions) =>
  z.string().superRefine((value, context) => {
    if (!value) {
      context.addIssue({ code: 'custom', message: messages.required });
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
    const today = getToday();

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
 * - 빈 값
 * - 전달받은 옵션의 code와 일치하는지 여부
 * @returns 옵션 코드 검증용 Zod 스키마
 */
export const createOptionSchema = ({
  options,
  messages,
}: OptionSchemaOptions) =>
  z.string().superRefine((value, context) => {
    if (!value) {
      context.addIssue({ code: 'custom', message: messages.empty });
      return;
    }

    if (!options.some((option) => option.code === value)) {
      context.addIssue({ code: 'custom', message: messages.invalid });
    }
  });

/**
 * 고정된 옵션 코드 검증
 * @param options - 허용할 목록
 * @param messages - 오류 메시지
 */
export const createFixedOptionSchema = <const T extends readonly string[]>({
  options,
  messages,
}: FixedOptionSchemaOptions<T>) =>
  z.enum(options, {
    error: (issue) => (issue.input === '' ? messages.empty : messages.invalid),
  });

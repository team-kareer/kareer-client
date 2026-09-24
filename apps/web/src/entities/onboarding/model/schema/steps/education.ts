import { z } from 'zod';

import {
  OUTSIDE_KOREA_DEGREE_OPTIONS,
  SOUTH_KOREA_DEGREE_OPTIONS,
  VISA_TYPE_OPTIONS,
} from '../../options';
import {
  createDateSchema,
  createOptionSchema,
  createTextSchema,
} from '../common';
import { isRealDate, toLocalDate } from '../date';
import type {
  DateValidationMessages,
  Option,
  ValidationMessages,
} from '../types';

const DEGREE_LOCATIONS = ['south-korea', 'outside-korea'] as const;
const DEGREE_LOCATION_OPTIONS = DEGREE_LOCATIONS.map((code) => ({ code }));
const DEGREE_OPTIONS = [
  ...new Set([...SOUTH_KOREA_DEGREE_OPTIONS, ...OUTSIDE_KOREA_DEGREE_OPTIONS]),
].map((code) => ({ code }));

export type EducationSchemaOptions = {
  universities: Option[];
  majors: Option[];
  messages: {
    universityCode: ValidationMessages;
    primaryMajorCode: ValidationMessages;
    secondaryMajor: ValidationMessages;
    degreeLocation: ValidationMessages;
    degree: ValidationMessages & {
      invalidForLocation: string;
    };
    visaType: ValidationMessages;
    expectedGraduationDate: DateValidationMessages;
  };
};

/**
 * 학위 취득 지역에 맞는 학위 목록 반환
 * @param degreeLocation - 한국 / 해외 학위
 * @returns 해당 지역에서 선택할 수 있는 학위 목록
 */
const getDegreeOptions = (degreeLocation: string) =>
  degreeLocation === 'south-korea'
    ? SOUTH_KOREA_DEGREE_OPTIONS
    : OUTSIDE_KOREA_DEGREE_OPTIONS;

/**
 * 오늘 날짜를 시간 정보 없이 로컬 Date로 반환
 * @returns 로컬 자정 기준의 오늘 날짜
 */
const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today;
};

export const createEducationSchema = ({
  universities,
  majors,
  messages,
}: EducationSchemaOptions) =>
  z
    .object({
      universityCode: createOptionSchema({
        options: universities,
        messages: messages.universityCode,
      }),
      primaryMajorCode: createOptionSchema({
        options: majors,
        messages: messages.primaryMajorCode,
      }),
      secondaryMajor: createTextSchema({
        messages: messages.secondaryMajor,
        allowEmpty: true,
      }),
      degreeLocation: createOptionSchema({
        options: DEGREE_LOCATION_OPTIONS,
        messages: messages.degreeLocation,
      }),
      degree: createOptionSchema({
        options: DEGREE_OPTIONS,
        messages: messages.degree,
      }),
      visaType: createOptionSchema({
        options: VISA_TYPE_OPTIONS.map((code) => ({ code })),
        messages: messages.visaType,
      }),
      expectedGraduationDate: createDateSchema({
        messages: messages.expectedGraduationDate,
        allowFuture: true,
        allowPast: true,
      }),
    })
    .superRefine((value, context) => {
      if (
        DEGREE_LOCATIONS.includes(
          value.degreeLocation as (typeof DEGREE_LOCATIONS)[number],
        )
      ) {
        const degreeOptions = getDegreeOptions(value.degreeLocation);

        if (!degreeOptions.includes(value.degree)) {
          context.addIssue({
            code: 'custom',
            path: ['degree'],
            message: messages.degree.invalidForLocation,
          });
        }
      }

      if (!isRealDate(value.expectedGraduationDate)) {
        return;
      }

      const expectedGraduationDate = toLocalDate(value.expectedGraduationDate);
      const today = getToday();

      if (value.visaType === 'D-2' && expectedGraduationDate < today) {
        context.addIssue({
          code: 'custom',
          path: ['expectedGraduationDate'],
          message: messages.expectedGraduationDate.pastNotAllowed,
        });
      }

      if (value.visaType === 'D-10' && expectedGraduationDate > today) {
        context.addIssue({
          code: 'custom',
          path: ['expectedGraduationDate'],
          message: messages.expectedGraduationDate.futureNotAllowed,
        });
      }
    });

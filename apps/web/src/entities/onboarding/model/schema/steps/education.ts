import { z } from 'zod';

import { SOUTH_KOREA_DEGREE_OPTIONS, VISA_TYPE_OPTIONS } from '../../options';
import {
  createDateSchema,
  createFixedOptionSchema,
  createOptionSchema,
  createTextSchema,
} from '../common';
import { getToday, isRealDate, toLocalDate } from '../date';
import type {
  DateValidationMessages,
  Option,
  ValidationMessages,
} from '../types';

const DEGREE_LOCATIONS = ['south-korea', 'outside-korea'] as const;

export type EducationSchemaOptions = {
  universities: Option[];
  majors: Option[];
  messages: {
    universityCode: ValidationMessages;
    primaryMajorCode: ValidationMessages;
    secondaryMajor: ValidationMessages;
    degreeLocation: ValidationMessages;
    degree: ValidationMessages;
    visaType: ValidationMessages;
    expectedGraduationDate: DateValidationMessages;
  };
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
      degreeLocation: createFixedOptionSchema({
        options: DEGREE_LOCATIONS,
        messages: messages.degreeLocation,
      }),
      degree: createFixedOptionSchema({
        options: SOUTH_KOREA_DEGREE_OPTIONS,
        messages: messages.degree,
      }),
      visaType: createFixedOptionSchema({
        options: VISA_TYPE_OPTIONS,
        messages: messages.visaType,
      }),
      expectedGraduationDate: createDateSchema({
        messages: messages.expectedGraduationDate,
        allowFuture: true,
        allowPast: true,
      }),
    })
    .superRefine((value, context) => {
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

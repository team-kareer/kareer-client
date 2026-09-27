import { z } from 'zod';

import { VISA_TYPE_OPTIONS } from '@entities/onboarding/model/options';
import {
  createDateSchema,
  createFixedOptionSchema,
  createOptionSchema,
  createTextSchema,
} from '@entities/onboarding/model/schema/common';
import { isRealDate, toLocalDate } from '@entities/onboarding/model/schema/date';
import type {
  DateValidationMessages,
  Option,
  ValidationMessages,
} from '@entities/onboarding/model/schema/types';

const D10_ALLOWED_MONTHS = [6, 12, 18, 24, 30, 36];

export type IdentityVisaSchemaOptions = {
  countries: Option[];
  messages: {
    name: ValidationMessages;
    countryCode: ValidationMessages;
    birthDate: DateValidationMessages;
    visaType: ValidationMessages;
    visaStartDate: DateValidationMessages & {
      afterExpiration: string;
    };
    visaExpiredAt: DateValidationMessages & {
      beforeOrSameStart: string;
      d2ExceedsTwoYears: string;
      d10InvalidDuration: string;
    };
  };
};

/**
 * 두 날짜 사이의 달력상 월 차이를 계산합니다.
 *
 * @param startDate - 기준 시작일
 * @param endDate - 비교할 종료일
 * @returns 종료일에서 시작일을 뺀 월 차이
 */
const getMonthDifference = (startDate: Date, endDate: Date) =>
  (endDate.getFullYear() - startDate.getFullYear()) * 12 +
  endDate.getMonth() -
  startDate.getMonth();

export const createIdentityVisaSchema = ({
  countries,
  messages,
}: IdentityVisaSchemaOptions) =>
  z
    .object({
      name: createTextSchema({
        messages: messages.name,
        maxLength: 30,
      }),
      countryCode: createOptionSchema({
        options: countries,
        messages: messages.countryCode,
      }),
      birthDate: createDateSchema({
        messages: messages.birthDate,
        allowPast: true,
      }),
      visaType: createFixedOptionSchema({
        options: VISA_TYPE_OPTIONS,
        messages: messages.visaType,
      }),
      visaStartDate: createDateSchema({
        messages: messages.visaStartDate,
        allowPast: true,
      }),
      visaExpiredAt: createDateSchema({
        messages: messages.visaExpiredAt,
        allowFuture: true,
      }),
    })
    .superRefine((value, context) => {
      if (
        !isRealDate(value.visaStartDate) ||
        !isRealDate(value.visaExpiredAt)
      ) {
        return;
      }

      const startDate = toLocalDate(value.visaStartDate);
      const expirationDate = toLocalDate(value.visaExpiredAt);

      if (startDate > expirationDate) {
        context.addIssue({
          code: 'custom',
          path: ['visaStartDate'],
          message: messages.visaStartDate.afterExpiration,
        });
      }

      if (expirationDate <= startDate) {
        context.addIssue({
          code: 'custom',
          path: ['visaExpiredAt'],
          message: messages.visaExpiredAt.beforeOrSameStart,
        });
        return;
      }

      if (value.visaType === 'D-2') {
        const maximumExpirationDate = new Date(startDate);
        maximumExpirationDate.setFullYear(
          maximumExpirationDate.getFullYear() + 2,
        );

        if (expirationDate > maximumExpirationDate) {
          context.addIssue({
            code: 'custom',
            path: ['visaExpiredAt'],
            message: messages.visaExpiredAt.d2ExceedsTwoYears,
          });
        }
      }

      if (value.visaType === 'D-10') {
        const isSameDay = startDate.getDate() === expirationDate.getDate();
        const monthDifference = getMonthDifference(startDate, expirationDate);

        if (!isSameDay || !D10_ALLOWED_MONTHS.includes(monthDifference)) {
          context.addIssue({
            code: 'custom',
            path: ['visaExpiredAt'],
            message: messages.visaExpiredAt.d10InvalidDuration,
          });
        }
      }
    });

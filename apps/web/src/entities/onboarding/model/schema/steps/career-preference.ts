import { z } from 'zod';

import { TARGET_JOB_OPTIONS } from '../../options';
import { createOptionSchema } from '../common';
import type { ValidationMessages } from '../types';

const TARGET_JOB_OPTION_CODES = TARGET_JOB_OPTIONS.map((code) => ({
  code,
}));

export type CareerPreferenceSchemaOptions = {
  messages: {
    fieldsOfInterests: {
      required: string;
      maxSelected: string;
      emptyCode: string;
    };
    targetJob: ValidationMessages;
  };
};

export const createCareerPreferenceSchema = ({
  messages,
}: CareerPreferenceSchemaOptions) =>
  z.object({
    fieldsOfInterests: z
      .array(z.string())
      .min(1, { message: messages.fieldsOfInterests.required })
      .max(5, { message: messages.fieldsOfInterests.maxSelected })
      .superRefine((fields, context) => {
        if (fields.some((field) => !field.trim())) {
          context.addIssue({
            code: 'custom',
            message: messages.fieldsOfInterests.emptyCode,
          });
        }
      }),
    targetJob: createOptionSchema({
      options: TARGET_JOB_OPTION_CODES,
      messages: messages.targetJob,
    }),
    targetJobSkill: z.string(),
  });

import { z } from 'zod';

import { TARGET_JOB_OPTIONS } from '../../options';
import type { ValidationMessages } from '../types';

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
    targetJob: z.enum(TARGET_JOB_OPTIONS, {
      error: (issue) =>
        issue.input === ''
          ? messages.targetJob.empty
          : messages.targetJob.invalid,
    }),
    targetJobSkill: z.string(),
  });

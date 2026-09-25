import { z } from 'zod';

import { createTextSchema } from '../common';
import type { ValidationMessages } from '../types';

export type BackgroundSchemaOptions = {
  messages: {
    personalBackground: ValidationMessages;
  };
};

export const createBackgroundSchema = ({ messages }: BackgroundSchemaOptions) =>
  z.object({
    personalBackground: createTextSchema({
      messages: messages.personalBackground,
      maxLength: 1000,
      allowNumber: true,
      allowBasicSpecialCharacters: true,
    }),
    preparationStatuses: z.array(z.string()),
  });

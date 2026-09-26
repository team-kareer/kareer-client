import { z } from 'zod';

import {
  ENGLISH_PROFICIENCY_OPTIONS,
  LANGUAGE_LEVEL_OPTIONS,
} from '../../options';
import type { ValidationMessages } from '../types';

export type LanguageSkillsSchemaOptions = {
  messages: {
    languageLevel: ValidationMessages;
    englishLevel: ValidationMessages;
  };
};

export const createLanguageSkillsSchema = ({
  messages,
}: LanguageSkillsSchemaOptions) =>
  z.object({
    languageLevel: z.enum(LANGUAGE_LEVEL_OPTIONS, {
      error: (issue) =>
        issue.input === ''
          ? messages.languageLevel.empty
          : messages.languageLevel.invalid,
    }),
    englishLevel: z.enum(
      ENGLISH_PROFICIENCY_OPTIONS.map((option) => option.code),
      {
        error: (issue) =>
          issue.input === ''
            ? messages.englishLevel.empty
            : messages.englishLevel.invalid,
      },
    ),
  });

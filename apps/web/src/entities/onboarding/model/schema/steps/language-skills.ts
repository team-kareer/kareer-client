import { z } from 'zod';

import {
  ENGLISH_PROFICIENCY_OPTIONS,
  LANGUAGE_LEVEL_OPTIONS,
} from '../../options';
import { createFixedOptionSchema } from '../common';
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
    languageLevel: createFixedOptionSchema({
      options: LANGUAGE_LEVEL_OPTIONS,
      messages: messages.languageLevel,
    }),
    englishLevel: createFixedOptionSchema({
      options: ENGLISH_PROFICIENCY_OPTIONS.map((option) => option.code),
      messages: messages.englishLevel,
    }),
  });

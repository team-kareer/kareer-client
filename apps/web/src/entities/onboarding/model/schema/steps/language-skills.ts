import { z } from 'zod';

import {
  ENGLISH_PROFICIENCY_OPTIONS,
  LANGUAGE_LEVEL_OPTIONS,
} from '../../options';
import { createOptionSchema } from '../common';
import type { ValidationMessages } from '../types';

const LANGUAGE_LEVEL_OPTION_CODES = LANGUAGE_LEVEL_OPTIONS.map((code) => ({
  code,
}));

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
    languageLevel: createOptionSchema({
      options: LANGUAGE_LEVEL_OPTION_CODES,
      messages: messages.languageLevel,
    }),
    englishLevel: createOptionSchema({
      options: ENGLISH_PROFICIENCY_OPTIONS,
      messages: messages.englishLevel,
    }),
  });

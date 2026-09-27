export type ValidationMessages = {
  empty: string;
  invalid: string;
  maxLength?: string;
};

export type DateValidationMessages = {
  required: string;
  invalidFormat: string;
  invalidDate: string;
  futureNotAllowed: string;
  pastNotAllowed: string;
};

export type TextSchemaOptions = {
  messages: ValidationMessages;
  maxLength?: number;
  allowNumber?: boolean;
  allowBasicSpecialCharacters?: boolean;
  allowEmpty?: boolean;
};

export type DateSchemaOptions = {
  messages: DateValidationMessages;
  allowFuture?: boolean;
  allowPast?: boolean;
};

export type Option = {
  code?: string;
};

export type OptionSchemaOptions = {
  options: Option[];
  messages: Pick<ValidationMessages, 'empty' | 'invalid'>;
};

export type FixedOptionSchemaOptions<T extends readonly string[]> = {
  options: T;
  messages: OptionSchemaOptions['messages'];
};

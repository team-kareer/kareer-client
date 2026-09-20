export type ValidationMessages = {
  empty: string;
  invalid: string;
  maxLength?: string;
};

export type DateValidationMessages = {
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
};

export type DateSchemaOptions = {
  messages: DateValidationMessages;
  allowFuture?: boolean;
  allowPast?: boolean;
};

export type Option = {
  code?: string;
};

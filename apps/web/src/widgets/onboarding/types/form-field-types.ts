import { ReactElement } from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export type FormBaseFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = {
  label?: string;
  name: K;
};

export type FormFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = FormBaseFieldProps<T, K> & {
  rules: RegisterOptions<T, K>;
  showErrorMessage?: boolean;
  children: (
    field: ControllerRenderProps<T, K>,
    fieldState: ControllerFieldState,
  ) => ReactElement;
};

export type FormInputFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = Omit<FormFieldProps<T, K>, 'children'> & {
  placeholder: string;
  maxLength?: number;
};

export type FormAutoCompleteFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = Omit<FormFieldProps<T, K>, 'children'> & {
  placeholder: string;
  options: string[];
};

export type FormTextareaFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = Omit<FormFieldProps<T, K>, 'children'> & {
  placeholder: string;
  showCount: boolean;
  displayMaxLength: number;
};

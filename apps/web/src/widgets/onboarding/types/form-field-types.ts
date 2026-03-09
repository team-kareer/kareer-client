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

import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export type FormFieldProps<T extends FieldValues, K extends FieldPath<T>> = {
  label: string;
  name: K;
  rules: RegisterOptions<T, K>;
  children: (
    field: ControllerRenderProps<T, K>,
    fieldState: ControllerFieldState,
  ) => React.ReactElement;
};

export type FormInputFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = FormFieldProps<T, K> & {
  placeholder: string;
  maxLength?: number;
};

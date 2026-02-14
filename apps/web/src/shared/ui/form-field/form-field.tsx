import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import * as styles from './form-field.css';

type FormFieldProps<T extends FieldValues, K extends FieldPath<T>> = {
  label: string;
  name: K;
  rules: RegisterOptions<T, K>;
  children: (
    field: ControllerRenderProps<T, K>,
    fieldState: ControllerFieldState,
  ) => React.ReactElement;
};

export const FormField = <T extends FieldValues, K extends FieldPath<T>>({
  label,
  name,
  rules,
  children,
}: FormFieldProps<T, K>) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <Controller
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            {children(field, fieldState)}
            <p className={styles.errorMessage}>
              {fieldState.error?.message || ''}
            </p>
          </>
        )}
      />
    </div>
  );
};

import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import { FormFieldProps } from './form-field-types';

import * as styles from './form-field.css';

const NON_BREAKING_SPACE = '\u00A0';

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
              {fieldState.error?.message || NON_BREAKING_SPACE}
            </p>
          </>
        )}
      />
    </div>
  );
};

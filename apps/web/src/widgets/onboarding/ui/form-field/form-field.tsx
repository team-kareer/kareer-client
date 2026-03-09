import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import type { FormFieldProps } from '@widgets/onboarding';

import * as styles from './form-field.css';

const NON_BREAKING_SPACE = '\u00A0';

export const FormField = <T extends FieldValues, K extends FieldPath<T>>({
  label,
  name,
  rules,
  showErrorMessage = true,
  children,
}: FormFieldProps<T, K>) => {
  return (
    <div>
      {label && <p className={styles.label}>{label}</p>}
      <Controller
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            {children(field, fieldState)}
            {showErrorMessage && (
              <p className={styles.errorMessage}>
                {fieldState.error?.message || NON_BREAKING_SPACE}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

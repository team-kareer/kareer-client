import { TextField } from '@kds/ui';
import { FieldPath, FieldValues } from 'react-hook-form';

import type { FormFieldProps } from '@widgets/onboarding';
import { FormField } from '@widgets/onboarding';

import { useTextCount } from './hooks/use-text-count';

import * as styles from './form-textarea-field.css';

type FormTextareaFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = Omit<FormFieldProps<T, K>, 'children'> & {
  placeholder: string;
  showCount: boolean;
  displayMaxLength: number;
  maxLength: number;
};

const FormTextareaField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  showCount,
  displayMaxLength,
  maxLength,
}: FormTextareaFieldProps<T, K>) => {
  return (
    <FormField name={name} rules={rules} label={label} showErrorMessage={false}>
      {(field) => {
        const value = field.value || '';
        const displayLimit = displayMaxLength ?? maxLength ?? 0;
        const { textCount, isOverMax } = useTextCount(value, maxLength);
        const hasError = isOverMax;

        return (
          <div className={styles.textFieldContainer}>
            <TextField
              {...field}
              value={value}
              onChange={field.onChange}
              isError={hasError}
              placeholder={placeholder}
            />
            {showCount && (
              <span className={styles.textCountRecipe({ error: hasError })}>
                {textCount}/{displayLimit}
              </span>
            )}
          </div>
        );
      }}
    </FormField>
  );
};

export default FormTextareaField;

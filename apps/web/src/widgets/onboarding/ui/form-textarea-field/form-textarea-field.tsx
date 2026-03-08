import { FieldPath, FieldValues } from 'react-hook-form';

import { FormField } from '@widgets/onboarding';
import { TextField } from '@shared/ui';

import { FormTextareaFieldProps } from '../../types/form-field-types';

const FormTextareaField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  showCount,
  displayMaxLength,
}: FormTextareaFieldProps<T, K>) => {
  return (
    <FormField name={name} rules={rules} label={label} showErrorMessage={false}>
      {(field, fieldState) => {
        return (
          <TextField
            {...field}
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
            isError={!!fieldState.error}
            placeholder={placeholder}
            showCount={showCount}
            displayMaxLength={displayMaxLength}
          />
        );
      }}
    </FormField>
  );
};

export default FormTextareaField;

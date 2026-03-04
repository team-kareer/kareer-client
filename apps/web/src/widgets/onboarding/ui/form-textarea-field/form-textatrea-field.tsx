import { FieldPath, FieldValues } from 'react-hook-form';

import { FormField } from '@widgets/onboarding';
import { TextField } from '@shared/ui';

import { FormTextareaFieldProps } from '../../types/form-field-types';

const FormTextareaField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
}: FormTextareaFieldProps<T, K>) => {
  return (
    <FormField name={name} label={label} rules={rules}>
      {(field, fieldState) => (
        <TextField
          {...field}
          isError={!!fieldState.error}
          placeholder={placeholder}
        />
      )}
    </FormField>
  );
};

export default FormTextareaField;

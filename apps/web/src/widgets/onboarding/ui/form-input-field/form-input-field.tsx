import { Input } from '@kds/ui';
import { FieldPath, FieldValues } from 'react-hook-form';

import { FormField } from '@widgets/onboarding';

import { FormInputFieldProps } from '../../types/form-field-types';

const FormInputField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  maxLength,
}: FormInputFieldProps<T, K>) => {
  return (
    <FormField name={name} label={label} rules={rules}>
      {(field, fieldState) => (
        <Input
          {...field}
          status={fieldState.error ? 'error' : 'default'}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}
    </FormField>
  );
};

export default FormInputField;

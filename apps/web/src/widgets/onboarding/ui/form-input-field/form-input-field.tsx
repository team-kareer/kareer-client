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
  type = 'text',
}: FormInputFieldProps<T, K>) => {
  return (
    <FormField name={name} label={label} rules={rules}>
      {(field, fieldState) => {
        const isNumber = type === 'number';
        const value = isNumber ? String(field.value ?? '') : field.value;
        const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
          field.onChange(isNumber ? Number(e.target.value) : e.target.value);
        };
        return (
          <Input
            {...field}
            value={value}
            onChange={handleChangeValue}
            status={fieldState.error ? 'error' : 'default'}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        );
      }}
    </FormField>
  );
};

export default FormInputField;

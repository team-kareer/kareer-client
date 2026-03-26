import { useState } from 'react';
import { Autocomplete } from '@kds/ui';
import { FieldPath, FieldValues } from 'react-hook-form';

import type { FormFieldProps } from '@widgets/onboarding';
import { FormField } from '@widgets/onboarding';

type FormAutoCompleteFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = Omit<FormFieldProps<T, K>, 'children'> & {
  placeholder: string;
  options: string[];
  onSelect?: (value: string) => void;
  icon?: 'chevron' | 'search';
};

const FormAutocompleteField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  options,
  onSelect,
  icon,
}: FormAutoCompleteFieldProps<T, K>) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <FormField name={name} label={label} rules={rules}>
      {(field) => (
        <Autocomplete
          icon={icon}
          {...field}
          placeholder={placeholder}
          options={options}
          value={onSelect ? inputValue : field.value || ''}
          onChange={(value) => {
            if (onSelect) {
              onSelect(value);
              setInputValue('');
            } else {
              field.onChange(value);
            }
          }}
        />
      )}
    </FormField>
  );
};

export default FormAutocompleteField;

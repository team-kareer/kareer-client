import { Autocomplete } from '@kds/ui';
import { FieldPath, FieldValues } from 'react-hook-form';

import { FormField } from '@widgets/onboarding';

import { FormAutoCompleteFieldProps } from '../../types/form-field-types';

const FormAutocompleteField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  options,
}: FormAutoCompleteFieldProps<T, K>) => {
  return (
    <FormField name={name} label={label} rules={rules}>
      {(field) => (
        <Autocomplete
          {...field}
          placeholder={placeholder}
          options={options}
          onChange={(value) => field.onChange(value)}
          value={field.value || ''}
        />
      )}
    </FormField>
  );
};

export default FormAutocompleteField;

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
};

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
          onChange={field.onChange}
          value={field.value || ''}
        />
      )}
    </FormField>
  );
};

export default FormAutocompleteField;

import { TextField } from '@kds/ui';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import type { FormFieldProps } from '@widgets/onboarding';
import { FormField } from '@widgets/onboarding';
import WithTextCount from '@shared/ui/field-with-counter/field-with-text-count';

type FormTextareaFieldProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> = Omit<FormFieldProps<T, K>, 'children'> & {
  placeholder: string;
  maxLength: number;
};

interface FormTextareaFieldInnerProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> {
  field: ControllerRenderProps<T, K>;
  fieldState: ControllerFieldState;
  placeholder: string;
  maxLength: number;
}

const FormTextareaFieldInner = <T extends FieldValues, K extends FieldPath<T>>({
  field,
  fieldState,
  placeholder,
  maxLength,
}: FormTextareaFieldInnerProps<T, K>) => {
  const value = field.value ?? '';

  return (
    <WithTextCount value={value} maxLength={maxLength}>
      {(isOverMax) => (
        <TextField
          {...field}
          value={value}
          isError={isOverMax || !!fieldState.error}
          placeholder={placeholder}
        />
      )}
    </WithTextCount>
  );
};

const FormTextareaField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  maxLength,
}: FormTextareaFieldProps<T, K>) => {
  return (
    <FormField name={name} rules={rules} label={label}>
      {(field, fieldState) => (
        <FormTextareaFieldInner
          field={field}
          fieldState={fieldState}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      )}
    </FormField>
  );
};

export default FormTextareaField;

import { Input } from '@kds/ui';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import type { FormFieldProps } from '@widgets/onboarding';
import { FormField } from '@widgets/onboarding';
import { WithTextCount } from '@shared/ui/field-with-counter/field-with-text-count';

type FormInputFieldProps<T extends FieldValues, K extends FieldPath<T>> = Omit<
  FormFieldProps<T, K>,
  'children'
> & {
  placeholder: string;
  maxLength?: number;
  showCount?: boolean;
  type?: 'text' | 'number';
};

interface FormInputFieldInnerProps<
  T extends FieldValues,
  K extends FieldPath<T>,
> {
  field: ControllerRenderProps<T, K>;
  fieldState: ControllerFieldState;
  placeholder: string;
  maxLength?: number;
  showCount: boolean;
  type: 'text' | 'number';
}

const FormInputFieldInner = <T extends FieldValues, K extends FieldPath<T>>({
  field,
  fieldState,
  placeholder,
  maxLength,
  showCount,
  type,
}: FormInputFieldInnerProps<T, K>) => {
  const isNumber = type === 'number';
  const value = field.value ?? '';

  return (
    <WithTextCount value={value} maxLength={maxLength} showCount={showCount}>
      {(isOverMax) => (
        <Input
          {...field}
          value={value}
          onChange={(e) =>
            field.onChange(isNumber ? Number(e.target.value) : e.target.value)
          }
          status={fieldState.error || isOverMax ? 'error' : 'default'}
          placeholder={placeholder}
        />
      )}
    </WithTextCount>
  );
};

const FormInputField = <T extends FieldValues, K extends FieldPath<T>>({
  name,
  label,
  rules,
  placeholder,
  maxLength,
  showCount = false,
  type = 'text',
}: FormInputFieldProps<T, K>) => {
  return (
    <FormField name={name} label={label} rules={rules}>
      {(field, fieldState) => (
        <FormInputFieldInner
          field={field}
          fieldState={fieldState}
          placeholder={placeholder}
          maxLength={maxLength}
          showCount={showCount}
          type={type}
        />
      )}
    </FormField>
  );
};

export default FormInputField;

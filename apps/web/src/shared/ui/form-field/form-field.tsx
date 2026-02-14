import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

type FormFieldProps<T extends FieldValues, K extends FieldPath<T>> = {
  label: string;
  name: K;
  rules: RegisterOptions<T, K>;
  children: (
    field: ControllerRenderProps<T, K>,
    fieldState: ControllerFieldState,
  ) => React.ReactElement;
};

export const FormField = <T extends FieldValues, K extends FieldPath<T>>({
  label,
  name,
  rules,
  children,
}: FormFieldProps<T, K>) => {
  return (
    <div>
      <p>{label}</p>
      <Controller
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            {children(field, fieldState)}
            <p>{fieldState.error?.message || ''}</p>
          </>
        )}
      />
    </div>
  );
};

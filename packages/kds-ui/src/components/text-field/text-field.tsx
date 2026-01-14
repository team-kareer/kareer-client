import { ComponentProps } from 'react';

import {
  textCountRecipe,
  textFieldContainer,
  textFieldRecipe,
} from './text-field.css';

interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  error?: boolean;
  maxLength: number;
}

export const TextField = ({
  error = false,
  maxLength,
  value = '',
  ...textareaProps
}: TextFieldProps) => {
  const textValue = typeof value === 'string' ? value : String(value || '');
  const textCount = textValue.length;

  const isError = error || textCount > maxLength;

  return (
    <div className={textFieldContainer()}>
      <textarea
        className={textFieldRecipe({ error: isError })}
        maxLength={maxLength}
        value={value}
        {...textareaProps}
      />
      <div className={textCountRecipe({ error: isError })}>
        {textCount}/{maxLength}
      </div>
    </div>
  );
};

TextField.displayName = 'TextField';
export default TextField;

import { ComponentProps, forwardRef } from 'react';

import {
  textCountRecipe,
  textFieldContainer,
  textFieldRecipe,
} from './text-field.css';

interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  error?: boolean;
  textCount: number;
  maxLength?: number;
}

export const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ error = false, textCount, maxLength, ...textareaProps }, ref) => {
    const isError =
      error ||
      (textCount !== undefined &&
        maxLength !== undefined &&
        textCount > maxLength);

    return (
      <div className={textFieldContainer()}>
        <textarea
          ref={ref}
          className={textFieldRecipe({ error: isError })}
          {...textareaProps}
        />
        <div className={textCountRecipe({ error: isError })}>
          {textCount}/{maxLength}
        </div>
      </div>
    );
  },
);

TextField.displayName = 'TextField';
export default TextField;

import { ComponentProps } from 'react';

import * as styles from './text-field.css';
interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  isError?: boolean;
  maxLength: number;
  value: string;
  showCount?: boolean;
}

export const TextField = ({
  isError = false,
  maxLength,
  value = '',
  showCount = true,
  ...textareaProps
}: TextFieldProps) => {
  const textCount = value.length;

  const lengthError = isError || textCount > maxLength;

  return (
    <div className={styles.textFieldContainer}>
      <textarea
        className={styles.textFieldRecipe({ error: lengthError })}
        maxLength={maxLength}
        value={value}
        {...textareaProps}
      />
      {showCount && maxLength && (
        <div className={styles.textCountRecipe({ error: lengthError })}>
          {textCount}/{maxLength}
        </div>
      )}
    </div>
  );
};

TextField.displayName = 'TextField';
export default TextField;

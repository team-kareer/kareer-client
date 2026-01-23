import { ComponentProps } from 'react';

import * as styles from './text-field.css';
interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  isError?: boolean;
  maxLength?: number;
  value: string;
  showCount?: boolean;
  displayMaxLength?: number;
}

export const TextField = ({
  isError = false,
  maxLength,
  value = '',
  showCount = true,
  displayMaxLength,
  ...textareaProps
}: TextFieldProps) => {
  const textCount = value.length;
  const displayLimit = displayMaxLength ?? maxLength ?? 0;

  const lengthError = isError || (maxLength ? textCount > maxLength : false);

  return (
    <div className={styles.textFieldContainer}>
      <textarea
        className={styles.textFieldRecipe({ error: lengthError })}
        value={value}
        {...textareaProps}
      />
      {showCount && displayLimit > 0 && (
        <div className={styles.textCountRecipe({ error: lengthError })}>
          {textCount}/{displayLimit}
        </div>
      )}
    </div>
  );
};

TextField.displayName = 'TextField';
export default TextField;

import { ComponentProps } from 'react';

import { useTextCount } from './hooks/use-text-count';

import * as styles from './text-field.css';
interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  isError?: boolean;
  maxLength?: number;
  value: string;
  displayMaxLength?: number;
}

export const TextField = ({
  isError = false,
  maxLength,
  value = '',
  displayMaxLength,
  ...textareaProps
}: TextFieldProps) => {
  const displayLimit = displayMaxLength ?? maxLength ?? 0;

  const { textCount, isOverMax } = useTextCount(value, maxLength);

  const lengthError = isError || isOverMax;

  return (
    <div className={styles.textFieldContainer}>
      <textarea
        className={styles.textFieldRecipe({ error: lengthError })}
        value={value}
        {...textareaProps}
      />
      <div className={styles.textCountRecipe({ error: lengthError })}>
        {textCount}/{displayLimit}
      </div>
    </div>
  );
};

export default TextField;

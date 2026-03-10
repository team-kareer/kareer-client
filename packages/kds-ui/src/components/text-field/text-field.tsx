import { ComponentProps } from 'react';

import * as styles from './text-field.css';

interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  isError?: boolean;
}

export const TextField = ({
  isError = false,
  ...textareaProps
}: TextFieldProps) => {
  return (
    <textarea
      className={styles.textFieldRecipe({ error: isError })}
      {...textareaProps}
    />
  );
};

export default TextField;

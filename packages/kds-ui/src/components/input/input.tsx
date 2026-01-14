import { ComponentProps } from 'react';

import * as styles from './input-text.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'className'> {
  error?: boolean;
}

const Input = ({ error = false, ...props }: InputProps) => {
  return <input className={styles.inputBox({ error })} {...props} />;
};

export default Input;

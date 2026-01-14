import { ComponentProps } from 'react';
import { XCircleIcon } from '@kds/icons';

import * as styles from './input.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'className'> {
  error?: boolean;
}

const Input = ({ error = false, ...props }: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input className={styles.inputBox({ error })} {...props} />
      {error && (
        <div className={styles.icon}>
          <XCircleIcon width={19} height={19} />
        </div>
      )}
    </div>
  );
};

export default Input;

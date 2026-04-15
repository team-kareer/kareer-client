import { ComponentProps } from 'react';
import { SuccessCircleIcon } from '@kds/icons';

import * as styles from './input.css';

interface InputProps extends Omit<ComponentProps<'input'>, 'className'> {
  status?: 'default' | 'error' | 'success';
}

const Input = ({ status = 'default', ...props }: InputProps) => {
  return (
    <div className={styles.inputWrapper({ status })}>
      <input className={styles.inputBox} {...props} />
      {status === 'success' && (
        <div className={styles.icon}>
          <SuccessCircleIcon width={19} height={19} />
        </div>
      )}
    </div>
  );
};

export default Input;

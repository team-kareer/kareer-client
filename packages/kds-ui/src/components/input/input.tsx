import { ComponentProps } from 'react';
import { SuccessCircleIcon, XCircleIcon } from '@kds/icons';

import * as styles from './input.css';

export type InputStatus = 'default' | 'error' | 'success' | 'readOnly';

interface InputProps extends Omit<ComponentProps<'input'>, 'className'> {
  status?: InputStatus;
}

const STATUS_ICONS = {
  default: null,
  readOnly: null,
  error: <XCircleIcon width={19} height={19} />,
  success: <SuccessCircleIcon width={19} height={19} />,
};

const Input = ({ status = 'default', ...props }: InputProps) => {
  const resolvedStatus = props.readOnly ? 'readOnly' : status;
  const statusIcon = STATUS_ICONS[resolvedStatus];
  return (
    <div className={styles.inputWrapper({ status: resolvedStatus })}>
      <input className={styles.inputBox} {...props} />{' '}
      {statusIcon && <div className={styles.icon}>{statusIcon}</div>}
    </div>
  );
};

export default Input;

import { TodoCheckIcon, TodoIcon } from '@kds/icons';
import type { ButtonHTMLAttributes } from 'react';

import * as styles from './checkbox.css';

interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
}

const Checkbox = ({ isChecked, ...props }: CheckboxProps) => {
  const todoIcon = isChecked ? (
    <TodoCheckIcon width={24} height={24} />
  ) : (
    <TodoIcon width={24} height={24} />
  );

  return (
    <button
      className={styles.icon}
      role="checkbox"
      aria-checked={isChecked}
      {...props}
    >
      {todoIcon}
    </button>
  );
};

export default Checkbox;

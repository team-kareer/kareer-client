import { HTMLAttributes, ReactNode } from 'react';
import { Tag } from '@kds/ui';

import * as styles from './icon-wrapper.css';

interface IconWrapperProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label?: string;
  isActive?: boolean;
}

const IconWrapper = ({ icon, label, isActive, ...props }: IconWrapperProps) => {
  return (
    <button className={styles.wrapper({ isActive })} {...props}>
      <a className={styles.icon}>{icon}</a>
      {label && (
        <span className={styles.tag}>
          <Tag color="navigation">{label}</Tag>
        </span>
      )}
    </button>
  );
};

export default IconWrapper;

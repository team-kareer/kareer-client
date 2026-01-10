import { HTMLAttributes, ReactNode } from 'react';

import * as styles from './icon-wrapper.css';

interface IconWrapperProps extends HTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  isActive?: boolean;
}

const IconWrapper = ({ icon, isActive, ...props }: IconWrapperProps) => {
  return (
    <button className={styles.wrapper({ isActive })} {...props}>
      {icon}
    </button>
  );
};

export default IconWrapper;

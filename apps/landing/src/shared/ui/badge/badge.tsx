import { ReactNode } from 'react';

import * as styles from './badge.css';

interface BadgeProps {
  icon?: ReactNode;
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}

const Badge = ({ icon, children, tone = 'light', className }: BadgeProps) => (
  <div className={`${styles.badge({ tone })} ${className || ''}`}>
    {icon}
    {children}
  </div>
);

export default Badge;

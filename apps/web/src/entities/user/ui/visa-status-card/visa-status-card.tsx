import { ReactNode } from 'react';
import { CalendarIcon, CheckCircleIcon } from '@kds/icons';

import * as styles from './visa-status-card.css';

interface VisaStatusCardProps {
  icon: ReactNode;
  statusName: string;
  title: string;
  date: string;
  isActive?: boolean;
}

export const VisaStatusCard = ({
  icon,
  statusName,
  title,
  date,
  isActive = false,
}: VisaStatusCardProps) => {
  return (
    <article className={styles.container}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.textContent}>
        <div className={styles.header}>
          {isActive && <CheckCircleIcon width={14} height={14} />}
          <span className={styles.statusName({ isActive })}>{statusName}</span>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.date}>
          <CalendarIcon width={14} height={14} />
          <span>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default VisaStatusCard;

import { CalendarIcon, CheckCircleIcon } from '@kds/icons';

import * as styles from './visa-status-card.css';

interface VisaStatusCardProps {
  statusName: string;
  title: string;
  date: string;
  isActive?: boolean;
}

const VisaStatusCard = ({
  statusName,
  title,
  date,
  isActive = false,
}: VisaStatusCardProps) => {
  const Icon = isActive ? CheckCircleIcon : CalendarIcon;

  return (
    <article className={styles.container}>
      <div className={styles.top}>
        <div className={styles.header}>
          <Icon width={14} height={14} className={styles.icon} />
          <span className={styles.statusName({ isActive })}>{statusName}</span>
        </div>
        <span className={styles.date}>{date}</span>
      </div>
      <p className={styles.title}>{title}</p>
    </article>
  );
};

export default VisaStatusCard;

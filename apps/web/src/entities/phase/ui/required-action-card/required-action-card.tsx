import { Tag } from '@kds/ui';

import * as styles from './required-action-card.css';

interface RequiredActionCardProps {
  title: string;
  dueDate: string;
}

const RequiredActionCard = ({ title, dueDate }: RequiredActionCardProps) => {
  return (
    <article className={styles.container}>
      <Tag color={'pastel_purple'} children="Visa" />
      <article className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dueDate}>{dueDate}</p>
      </article>
    </article>
  );
};

export default RequiredActionCard;

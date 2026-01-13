import { ComponentProps } from 'react';
import { Tag } from '@kds/ui';

import * as styles from './required-action-card.css';

interface RequiredActionCardProps {
  tagColor: ComponentProps<typeof Tag>['color'];
  tagLabel: 'Visa' | 'Career';
  title: string;
  dueDate: string;
}

const RequiredActionCard = ({
  tagColor,
  tagLabel,
  title,
  dueDate,
}: RequiredActionCardProps) => {
  return (
    <article className={styles.container}>
      <Tag color={tagColor}>{tagLabel}</Tag>
      <article className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dueDate}>{dueDate}</p>
      </article>
    </article>
  );
};

export default RequiredActionCard;

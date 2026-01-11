import { ReactNode } from 'react';

import { CalendarIcon } from '@kds/icons';

import * as styles from './action-required-card.css';

interface ActionRequiredCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
  onClick?: () => void;
  children?: ReactNode;
}

export const ActionRequiredCard = ({
  title,
  subTitle,
  dueDate,
  onClick,
  children,
}: ActionRequiredCardProps) => {
  const handleCardClick = () => {
    console.log('카드 클릭됨');
    if (onClick) {
      onClick();
    }
  };

  return (
    <article
      className={styles.container}
      onClick={handleCardClick}
      role="button"
    >
      <div className={styles.contentWrapper}>
        <p className={styles.titleStyle}>{title}</p>
        <p className={styles.subTitleStyle}>{subTitle}</p>
        <time className={styles.dueDateStyle} dateTime={dueDate}>
          <CalendarIcon width={14} height={14} color={'currentColor'} />
          {dueDate}
        </time>
      </div>
      {children}
    </article>
  );
};

import { ReactNode } from 'react';
import { CalendarIcon } from '@kds/icons';

import * as styles from './action-required-card.css';

interface ActionRequiredCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export const ActionRequiredCard = ({
  title,
  subTitle,
  dueDate,
  onClick,
  disabled = false,
  children,
}: ActionRequiredCardProps) => {
  const handleCardClick = () => {
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <article
      className={disabled ? styles.disabledContainer : styles.container}
      onClick={handleCardClick}
      role="button"
    >
      <div className={styles.contentWrapper}>
        <p className={disabled ? styles.disabledTitleStyle : styles.titleStyle}>
          {title}
        </p>
        <p
          className={
            disabled ? styles.disabledSubTitleStyle : styles.subTitleStyle
          }
        >
          {subTitle}
        </p>
        {!disabled && (
          <time className={styles.dueDateStyle} dateTime={dueDate}>
            <CalendarIcon width={14} height={14} color={'currentColor'} />
            {dueDate}
          </time>
        )}
      </div>
      {!disabled && children}
    </article>
  );
};

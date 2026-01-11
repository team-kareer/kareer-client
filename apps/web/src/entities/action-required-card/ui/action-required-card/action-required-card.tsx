import { CalendarIcon } from '@kds/icons';

import ActionTodoButton from '@features/action-todo/ui/action-todo-button/action-todo-button';

import * as styles from './action-required-card.css';

interface ActionRequiredCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
}

export const ActionRequiredCard = ({
  title,
  subTitle,
  dueDate,
}: ActionRequiredCardProps) => {
  return (
    <button className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.titleStyle}>{title}</p>
        <p className={styles.subTitleStyle}>{subTitle}</p>
        <time className={styles.dueDateStyle} dateTime={dueDate}>
          <CalendarIcon width={14} height={14} color={'currentColor'} />
          {dueDate}
        </time>
      </div>
      <ActionTodoButton text="To-Do" />
    </button>
  );
};

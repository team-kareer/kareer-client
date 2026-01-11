import { CalendarIcon } from '@kds/icons';
import ActionTodoButton from '@features/action-todo/ui/action-todo-button/action-todo-button';
import * as styles from './action-required-card.css';

interface ActionRequiredCardProps {
  title: string;
  subTitle: string;
  date: string;
}

export const ActionRequiredCard = ({
  title,
  subTitle,
  date,
}: ActionRequiredCardProps) => {
  return (
    <button className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleStyle}>{title}</div>
        <div className={styles.subTitleStyle}>{subTitle}</div>
        <div className={styles.dateStyle}>
          <CalendarIcon width={14} height={14} color={'currentColor'} />
          {date}
        </div>
      </div>
      <ActionTodoButton text="To-Do" />
    </button>
  );
};

import { CalendarIcon } from '@kds/icons';
import ActionTodoButton from '@features/action-todo/ui/action-todo-button/action-todo-button';
import { Action } from '../../types/types';
import * as styles from './action-required-card.css';

interface ActionRequiredCardProps {
  action: Action;
}

export const ActionRequiredCard = ({ action }: ActionRequiredCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleStyle}>{action.title}</div>
        <div className={styles.subTitleStyle}>{action.subTitle}</div>
        <div className={styles.dateStyle}>
          <CalendarIcon width={14} height={14} color={'currentColor'} />
          {action.date}
        </div>
      </div>
      <ActionTodoButton text="To-Do" />
    </div>
  );
};

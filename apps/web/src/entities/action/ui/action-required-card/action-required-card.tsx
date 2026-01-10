import * as styles from './action-required-card.css';
import { Action } from '../../types/types';
import ActionTodoButton from '@features/action-todo/ui/action-todo-button/action-todo-button';

interface ActionRequiredCardProps {
  action: Action;
}

export const ActionRequiredCard = ({ action }: ActionRequiredCardProps) => {
  return (
    <div className={styles.actionRequiredCard}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleStyle}>{action.title}</div>
        <div className={styles.subTitleStyle}>{action.subTitle}</div>
        <div className={styles.dateStyle}>{action.date}</div>
      </div>
      <ActionTodoButton text="TODO" />
    </div>
  );
};

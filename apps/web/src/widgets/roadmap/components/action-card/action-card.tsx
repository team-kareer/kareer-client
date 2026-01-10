import * as styles from '@entities/action-required-card/ui/action-required-card/action-required-card.css';
import { ActionTodoButton } from '@features/action-todo';
import { ActionRequiredCard, Action } from '@entities/action-required-card';

interface ActionCardProps {
  action: Action;
}

export const ActionCard = ({ action }: ActionCardProps) => {
  return (
    <div className={styles.actionRequiredCard}>
      <ActionRequiredCard action={action} />
      <ActionTodoButton text="TODO" />
    </div>
  );
};

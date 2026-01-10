import * as styles from '@entities/action-required-card/ui/action-required-card/action-required-card.css';
import { ActionRequiredCard } from '@entities/action-required-card/ui/action-required-card/action-required-card';
import { ActionTodoButton } from '@features/action-todo';
import { Action } from '@entities/action-required-card/types/types';

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

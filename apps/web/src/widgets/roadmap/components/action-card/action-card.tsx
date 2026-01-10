import { ActionTodoButton } from '@features/action-todo';
import { ActionRequiredCard, Action } from '@entities/action-required-card';
import * as cardStyles from './action-card.css';

interface ActionCardProps {
  action: Action;
}

export const ActionCard = ({ action }: ActionCardProps) => {
  return (
    <div className={cardStyles.container}>
      <ActionRequiredCard action={action} />
      <ActionTodoButton text="TODO" />
    </div>
  );
};

import { ActionRequiredCard } from '@entities/action-required-card/ui/action-required-card/action-required-card';
import { ActionTodoButton } from '@features/action-todo/ui/action-todo-button/action-todo-button';

interface ActionCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
}

export const ActionCard = ({ title, subTitle, dueDate }: ActionCardProps) => {
  return (
    <ActionRequiredCard title={title} subTitle={subTitle} dueDate={dueDate}>
      <ActionTodoButton text="To-Do" />
    </ActionRequiredCard>
  );
};

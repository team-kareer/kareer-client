import { ActionTodoButton } from '@features/ui/action-todo-button/action-todo-button';
import { ActionRequiredCard } from '@entities/ui/action-required-card/action-required-card';

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

import { ActionTodoButton } from '@features/ui/action-todo-button/action-todo-button';
import { ActionRequiredCard } from '@entities/ui/action-required-card/action-required-card';

interface ActionCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
  disabled?: boolean;
}

export const ActionCard = ({
  title,
  subTitle,
  dueDate,
  disabled = false,
}: ActionCardProps) => {
  return (
    <ActionRequiredCard
      title={title}
      subTitle={subTitle}
      dueDate={dueDate}
      disabled={disabled}
    >
      <ActionTodoButton text="To-Do" />
    </ActionRequiredCard>
  );
};

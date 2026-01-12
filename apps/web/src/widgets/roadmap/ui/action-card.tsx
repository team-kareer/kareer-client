import { ActionTodoButton } from '@features/phase';
import { ActionRequiredCard } from '@entities/phase';

interface ActionCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
  disabled?: boolean;
}

const ActionCard = ({
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

export default ActionCard;

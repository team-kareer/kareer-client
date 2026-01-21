import { ActionTodoButton } from '@features/todo';
import { ActionRequiredCard } from '@entities/phase';

interface ActionCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
  disabled?: boolean;
  onClick: () => void;
}

const ActionCard = ({
  title,
  subTitle,
  dueDate,
  onClick,
  disabled = false,
}: ActionCardProps) => {
  return (
    <ActionRequiredCard
      title={title}
      subTitle={subTitle}
      dueDate={dueDate}
      disabled={disabled}
    >
      <ActionTodoButton text="To-Do" onClick={onClick} />
    </ActionRequiredCard>
  );
};

export default ActionCard;

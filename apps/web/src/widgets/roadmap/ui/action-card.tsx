import { ActionTodoButton } from '@features/todo';
import { ActionRequiredCard } from '@entities/phase';

interface ActionCardProps {
  title: string;
  subTitle: string;
  dueDate: string;
  disabled?: boolean;
  onSelect?: () => void;
  onTodoClick?: () => void;
  isButtonDisabled?: boolean;
}

const ActionCard = ({
  title,
  subTitle,
  dueDate,
  onSelect,
  onTodoClick,
  disabled = false,
  isButtonDisabled = false,
}: ActionCardProps) => {
  return (
    <ActionRequiredCard
      title={title}
      subTitle={subTitle}
      dueDate={dueDate}
      disabled={disabled}
      onClick={onSelect}
    >
      <ActionTodoButton
        text="To-Do"
        onClick={onTodoClick}
        isDisabled={isButtonDisabled}
      />
    </ActionRequiredCard>
  );
};

export default ActionCard;

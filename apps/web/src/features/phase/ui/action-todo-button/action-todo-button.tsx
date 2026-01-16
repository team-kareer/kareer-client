import { MouseEvent } from 'react';
import { PlusIcon } from '@kds/icons';
import { Button } from '@kds/ui';

interface ActionTodoButtonProps {
  text: string;
  onClick?: () => void;
}

const ActionTodoButton = ({ text, onClick }: ActionTodoButtonProps) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button preset="small_outlined" onClick={handleButtonClick}>
      <PlusIcon width={16} height={16} />
      {text}
    </Button>
  );
};

export default ActionTodoButton;

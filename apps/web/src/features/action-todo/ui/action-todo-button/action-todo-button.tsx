import { MouseEvent } from 'react';

import { PlusIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { color } from '@kds/ui/styles';

interface ActionTodoButtonProps {
  text: string;
  onClick?: () => void;
}

export const ActionTodoButton = ({ text, onClick }: ActionTodoButtonProps) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button preset="small_outlined" onClick={handleButtonClick}>
      <PlusIcon width={16} height={16} color={color.primary[500]} />
      {text}
    </Button>
  );
};

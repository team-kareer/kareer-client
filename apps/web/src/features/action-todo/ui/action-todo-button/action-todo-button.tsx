import { MouseEvent } from 'react';
import { PlusIcon } from '@kds/icons';
import { color } from '@kds/ui/styles';

import { actionTodoButton } from './action-todo-button.css';

interface ActionTodoButtonProps {
  text: string;
  onClick?: () => void;
}

const ActionTodoButton = ({ text, onClick }: ActionTodoButtonProps) => {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Todo 버튼 클릭됨');
    e.stopPropagation();
    console.log('stopPropagation() 호출됨');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={actionTodoButton} onClick={handleButtonClick}>
      <PlusIcon width={16} height={16} color={color.primary[500]} />
      {text}
    </button>
  );
};

export default ActionTodoButton;

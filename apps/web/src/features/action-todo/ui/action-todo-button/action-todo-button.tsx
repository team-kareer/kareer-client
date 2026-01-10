import { MouseEvent } from 'react';
import { actionTodoButton } from './action-todo-button.css';

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
    <button className={actionTodoButton} onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default ActionTodoButton;

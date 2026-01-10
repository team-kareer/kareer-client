import { actionTodoButton } from './action-todo-button.css';

interface ActionTodoButtonProps {
  text: string;
}

const ActionTodoButton = ({ text }: ActionTodoButtonProps) => {
  return <button className={actionTodoButton}>{text}</button>;
};

export default ActionTodoButton;

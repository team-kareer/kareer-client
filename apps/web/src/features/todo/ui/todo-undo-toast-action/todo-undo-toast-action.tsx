import * as styles from './todo-undo-toast-action.css';

interface TodoUndoToastActionProps {
  label: string;
  onUndo: () => void;
}

const TodoUndoToastAction = ({ label, onUndo }: TodoUndoToastActionProps) => {
  return (
    <button type="button" className={styles.button} onClick={onUndo}>
      {label}
    </button>
  );
};

export default TodoUndoToastAction;

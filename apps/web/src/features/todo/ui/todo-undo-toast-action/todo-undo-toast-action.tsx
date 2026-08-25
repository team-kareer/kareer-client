import { Button } from '@kds/ui';

interface TodoUndoToastActionProps {
  label: string;
  onUndo: () => void;
}

const TodoUndoToastAction = ({ label, onUndo }: TodoUndoToastActionProps) => {
  return (
    <Button preset="text_inverse" type="button" onClick={onUndo}>
      {label}
    </Button>
  );
};

export default TodoUndoToastAction;

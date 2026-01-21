import { Checkbox } from '@kds/ui';

import * as styles from './todo-item.css';

type TodoItemSize = 'sm' | 'lg';

interface TodoItemProps {
  title: string;
  description: string;
  size: TodoItemSize;
  isChecked: boolean;
  onToggle: () => void;
}

const TodoItem = ({
  title,
  description,
  size,
  isChecked,
  onToggle,
}: TodoItemProps) => {
  const showDescription = size === 'lg' || !isChecked;

  return (
    <li className={styles.container}>
      <Checkbox isChecked={isChecked} onClick={onToggle} />
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        {showDescription && <p className={styles.description}>{description}</p>}
      </div>
    </li>
  );
};

export default TodoItem;

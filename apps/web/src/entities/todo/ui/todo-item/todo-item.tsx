import { TodoCheckIcon, TodoIcon } from '@kds/icons';

import * as styles from './todo-item.css';

type TodoItemSize = 'sm' | 'lg';

interface TodoItemProps {
  title: string;
  description: string;
  size: TodoItemSize;
  isChecked: boolean;
}

const TodoItem = ({ title, description, size, isChecked }: TodoItemProps) => {
  const showDescription = size === 'lg' || !isChecked;
  const todoIcon = isChecked ? (
    <TodoCheckIcon width={24} height={24} />
  ) : (
    <TodoIcon width={24} height={24} />
  );

  return (
    <article className={styles.container}>
      {todoIcon}
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        {showDescription && <p className={styles.description}>{description}</p>}
      </div>
    </article>
  );
};

export default TodoItem;

import { ReactNode } from 'react';

import * as styles from './todo-item.css';

type TodoItemSize = 'sm' | 'lg';

interface TodoItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  size: TodoItemSize;
  checked: boolean;
}

const TodoItem = ({
  icon,
  title,
  description,
  size,
  checked,
}: TodoItemProps) => {
  const showDescription = size !== 'sm' || !checked;

  return (
    <article className={styles.container}>
      {icon}
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        {showDescription && <p className={styles.description}>{description}</p>}
      </div>
    </article>
  );
};

export default TodoItem;

import { ReactNode } from 'react';

import * as styles from './todo-item.css';

interface TodoItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const TodoItem = ({ icon, title, description }: TodoItemProps) => {
  return (
    <article className={styles.container}>
      {icon}
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default TodoItem;

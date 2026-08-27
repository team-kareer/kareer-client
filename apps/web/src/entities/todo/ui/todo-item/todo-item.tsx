import { Checkbox } from '@kds/ui';
import type { MouseEvent, ReactNode } from 'react';

import * as styles from './todo-item.css';

type TodoItemSize = 'sm' | 'lg';

interface TodoItemProps {
  title: string;
  description: string;
  size: TodoItemSize;
  isChecked: boolean;
  onToggle: () => void;
  action?: ReactNode;
}

const TodoItem = ({
  title,
  description,
  size,
  isChecked,
  onToggle,
  action,
}: TodoItemProps) => {
  const showDescription = size === 'lg' || !isChecked;

  const showFullTitleIfClamped = (event: MouseEvent<HTMLParagraphElement>) => {
    const titleElement = event.currentTarget;

    titleElement.title =
      titleElement.scrollHeight > titleElement.clientHeight ? title : '';
  };

  return (
    <li className={styles.container}>
      <Checkbox isChecked={isChecked} onClick={onToggle} />
      <div className={styles.contentWrapper}>
        <p className={styles.title} onMouseEnter={showFullTitleIfClamped}>
          {title}
        </p>
        {showDescription && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </li>
  );
};

export default TodoItem;

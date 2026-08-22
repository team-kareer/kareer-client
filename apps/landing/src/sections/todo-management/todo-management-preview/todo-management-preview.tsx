import { TodoCheckIcon, TodoIcon } from '@kds/icons';

import { TODO_ITEMS } from '@shared/constants';

import * as styles from './todo-management-preview.css';

const TodoManagementPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <span className={styles.tab({ active: true })}>Visa</span>
        <span className={styles.tab({ active: false })}>Career</span>
      </div>

      <div>
        {TODO_ITEMS.map(({ id, label, due, completed, urgent }) => (
          <div key={id} className={styles.todoItem}>
            {completed ? (
              <TodoCheckIcon
                width={20}
                height={20}
                className={styles.checkbox}
              />
            ) : (
              <TodoIcon width={20} height={20} className={styles.checkbox} />
            )}
            <span className={styles.todoName({ completed })}>{label}</span>
            <span className={styles.dueDate({ urgent })}>{due}</span>
          </div>
        ))}
      </div>

      <div className={styles.completedBar}>
        <span className={styles.completedCheck}>✓</span>
        <span className={styles.completedLabel}>Completed</span>
        <span className={styles.completedCount}>2</span>
      </div>
    </div>
  );
};

export default TodoManagementPreview;

import { TodoCheckIcon, TodoIcon } from '@kds/icons';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <TodoItem
        icon={<TodoCheckIcon width={24} height={24} />}
        title="Write your todo here"
        description="Due in XX days"
      />

      <TodoItem
        icon={<TodoIcon width={24} height={24} />}
        title="Write your todo here"
        description="Due in XX days"
      />
    </div>
  );
};

export default DashboardPage;

import { TodoCheckIcon, TodoIcon } from '@kds/icons';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <TodoItem
        icon={<TodoCheckIcon width={24} height={24} />}
        title="Write your todo here"
        description="Due in XX days"
        size="lg"
        checked={true}
      />

      <TodoItem
        icon={<TodoIcon width={24} height={24} />}
        title="Write your todo here"
        description="Due in XX days"
        size="lg"
        checked={false}
      />

      <TodoItem
        icon={<TodoIcon width={24} height={24} />}
        title="Write your todo here"
        description="Due in XX days"
        size="sm"
        checked={false}
      />

      <TodoItem
        icon={<TodoCheckIcon width={24} height={24} />}
        title="Write your todo here"
        description="Due in XX days"
        size="sm"
        checked={true}
      />
    </div>
  );
};

export default DashboardPage;

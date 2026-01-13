import TodoItem from '@entities/todo/ui/todo-item/todo-item';

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <TodoItem
        title="Write your todo here"
        description="Due in XX days"
        size="lg"
        isChecked={true}
      />

      <TodoItem
        title="Write your todo here"
        description="Due in XX days"
        size="lg"
        isChecked={false}
      />

      <TodoItem
        title="Write your todo here"
        description="Due in XX days"
        size="sm"
        isChecked={false}
      />

      <TodoItem
        title="Write your todo here"
        description="Due in XX days"
        size="sm"
        isChecked={true}
      />
    </div>
  );
};

export default DashboardPage;

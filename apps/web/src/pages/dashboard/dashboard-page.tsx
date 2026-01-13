import { useState } from 'react';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';

const DashboardPage = () => {
  const [lgChecked, setLgChecked] = useState(false);
  const [smChecked, setSmChecked] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '1.6rem' }}>
      <TodoItem
        title="Write your todo here"
        description="Due in XX days"
        size="lg"
        isChecked={lgChecked}
        onClick={() => setLgChecked((prev) => !prev)}
      />

      <TodoItem
        title="Write your todo here"
        description="Due in XX days"
        size="sm"
        isChecked={smChecked}
        onClick={() => setSmChecked((prev) => !prev)}
      />
    </div>
  );
};

export default DashboardPage;

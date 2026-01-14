import { useState } from 'react';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';

const DashboardPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <TodoItem
        title="하이"
        description="하이하이하이"
        size="sm"
        isChecked={isChecked}
        onToggle={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
};

export default DashboardPage;

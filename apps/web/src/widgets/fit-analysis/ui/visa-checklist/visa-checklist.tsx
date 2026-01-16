import { useEffect, useState } from 'react';

import TodoItem from '@entities/todo/ui/todo-item/todo-item';
import { VisaStatusBox } from '@shared/ui';

import * as styles from './visa-checklist.css';

interface ChecklistData {
  id: number;
  title: string;
  subTitle: string;
}

interface VisaChecklistProps {
  isCurrentVisa: boolean;
  curTab: string;
  checklistData: readonly ChecklistData[];
}

const VisaChecklist = ({
  isCurrentVisa,
  curTab,
  checklistData,
}: VisaChecklistProps) => {
  const STORAGE_KEY = `checked_ids_${curTab}`;
  const [checkedIds, setCheckedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const totalCount = checklistData.length;
  const checkedCount = checkedIds.length;

  const handleToggle = (id: number) => {
    if (checkedIds.includes(id)) {
      setCheckedIds((prev) => prev.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
  }, [checkedIds, STORAGE_KEY]);

  return (
    <>
      <VisaStatusBox
        isCurrent={isCurrentVisa}
        goal={curTab}
        total={totalCount}
        done={checkedCount}
      />
      <section className={styles.container}>
        <header className={styles.header}>
          <h3 className={styles.title}>Basic Requirements</h3>
          <span className={styles.subTitle}>Check List</span>
        </header>
        <ul className={styles.checklist}>
          {checklistData.map((item) => (
            <TodoItem
              key={item.title}
              title={item.title}
              description={item.subTitle}
              size="lg"
              isChecked={checkedIds.includes(item.id)}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default VisaChecklist;

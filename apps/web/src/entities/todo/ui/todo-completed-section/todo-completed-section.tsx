import { ArrowDownIcon, ArrowUpIcon, CheckCircleIcon } from '@kds/icons';
import type { ReactNode } from 'react';

import * as styles from './todo-completed-section.css';

interface TodoCompletedSectionProps {
  count: number;
  label: string;
  isOpen: boolean;
  onToggleOpen: () => void;
  children: ReactNode;
}

const TodoCompletedSection = ({
  count,
  label,
  isOpen,
  onToggleOpen,
  children,
}: TodoCompletedSectionProps) => {
  const ChevronIcon = isOpen ? ArrowUpIcon : ArrowDownIcon;

  return (
    <section className={styles.container}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={onToggleOpen}
      >
        <CheckCircleIcon width={24} height={24} className={styles.checkIcon} />
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>{count}</span>
        <ChevronIcon width={24} height={24} className={styles.chevron} />
      </button>
      {isOpen && children}
    </section>
  );
};

export default TodoCompletedSection;

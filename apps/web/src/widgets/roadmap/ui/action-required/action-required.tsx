import ActionCard from '@widgets/roadmap/ui/action-card';

import { Tag } from '@kds/ui';

import * as styles from './action-required.css';

const TITLE = 'Action Required';

interface ActionRequiredItem {
  type: 'Visa' | 'Career' | 'Done';
  title: string;
  subTitle: string;
  dueDate: string;
}

const ACTION_REQUIRED_ITEMS: ActionRequiredItem[] = [
  {
    type: 'Visa',
    title: 'Prepare internship log',
    subTitle: 'Document all work exprience during internship period',
    dueDate: '2026-01-13',
  },
  {
    type: 'Career',
    title: 'Prepare internship log',
    subTitle: 'Document all work exprience during internship period',
    dueDate: '2026-01-13',
  },
  {
    type: 'Done',
    title: 'Prepare internship log',
    subTitle: 'Document all work exprience during internship period',
    dueDate: '2026-01-13',
  },
  {
    type: 'Career',
    title: 'Prepare internship log',
    subTitle: 'Document all work exprience during internship period',
    dueDate: '2026-01-13',
  },
];

const TAG_COLOR_PALETTE = {
  Visa: 'pastel_purple',
  Career: 'pastel_skyblue',
  Done: 'disabled_gray',
} as const;

const ActionRequired = () => {
  // 타입별로 그룹화
  const groupedItems = ACTION_REQUIRED_ITEMS.reduce(
    (acc, item) => {
      const type = item.type;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(item);
      return acc;
    },
    {} as Record<string, ActionRequiredItem[]>,
  );

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>{TITLE}</p>
        <p className={styles.itemCount}>{ACTION_REQUIRED_ITEMS.length} items</p>
      </header>
      <div className={styles.contentWrapper}>
        {Object.entries(groupedItems).map(([type, items]) => (
          <section key={type} className={styles.section}>
            <div className={styles.sectionHeader}>
              <Tag
                color={
                  TAG_COLOR_PALETTE[type as keyof typeof TAG_COLOR_PALETTE]
                }
              >
                {type}
              </Tag>
              <span
                className={`${styles.sectionItemCount}, ${styles.itemCountVariants[type as keyof typeof styles.itemCountVariants]}`}
              >
                {items.length}
              </span>
            </div>
            <div className={styles.sectionContent}>
              {items.map((item, index) => (
                <ActionCard
                  key={`${type}-${index}`}
                  title={item.title}
                  subTitle={item.subTitle}
                  dueDate={item.dueDate}
                  disabled={type === 'Done'}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default ActionRequired;

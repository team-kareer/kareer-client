import ActionCard from '@widgets/roadmap/ui/action-card';

import { Tag } from '@kds/ui';

import * as styles from './action-required.css';

const TITLE = 'Action Required';

const ACTION_REQUIRED_ITEMS = [
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
] as const;

// interface ActionRequiredItem {
//   type: 'Visa' | 'Career' | 'Done';
//   title: string;
//   subTitle: string;
//   dueDate: string;
// }

const TAG_COLOR_MAP = {
  Visa: 'pastel_purple',
  Career: 'pastel_skyblue',
  Done: 'disabled_gray',
} as const;

const ActionRequired = () => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>{TITLE}</p>
        <p className={styles.itemCount}>{ACTION_REQUIRED_ITEMS.length} items</p>
      </div>
      <div className={styles.contentWrapper}>
        {ACTION_REQUIRED_ITEMS.map((item) => (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <Tag color={TAG_COLOR_MAP[item.type]}>{item.type}</Tag>
            </div>
            <div className={styles.sectionContent}>
              <ActionCard
                key={item.type}
                title={item.title}
                subTitle={item.subTitle}
                dueDate={item.dueDate}
                disabled={item.type === 'Done'}
              />
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default ActionRequired;

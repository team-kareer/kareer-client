import { Tag } from '@kds/ui';

import ActionCard from '@widgets/roadmap/ui/action-card';

import * as styles from './action-required.css';

const TITLE = 'Action Required';

interface ActionRequiredItem {
  title: string;
  subTitle: string;
  dueDate: string;
}

interface ActionRequiredGroup {
  count: number;
  list: ActionRequiredItem[];
}

interface ActionRequiredData {
  Visa: ActionRequiredGroup;
  Career: ActionRequiredGroup;
  Done: ActionRequiredGroup;
  totalCount: number;
}

interface ActionRequiredProps {
  data: ActionRequiredData;
}

const TAG_COLOR_PALETTE = {
  Visa: 'pastel_purple',
  Career: 'pastel_skyblue',
  Done: 'disabled_gray',
} as const;

const ActionRequired = ({ data }: ActionRequiredProps) => {
  const types: Array<keyof typeof TAG_COLOR_PALETTE> = [
    'Visa',
    'Career',
    'Done',
  ];

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>{TITLE}</p>
        <p className={styles.headerItemCount}>{data.totalCount} items</p>
      </header>
      {types.map((type) => {
        const group = data[type];

        return (
          <section key={type} className={styles.section}>
            <div className={styles.sectionType}>
              <Tag color={TAG_COLOR_PALETTE[type]}>{type}</Tag>
              <span
                className={`${styles.typeItemCount} ${styles.typeItemCountVariants[type]}`}
              >
                {group.count}
              </span>
            </div>
            {group.list.map((item, index) => (
              <ActionCard
                key={`${type}-${index}`}
                title={item.title}
                subTitle={item.subTitle}
                dueDate={item.dueDate}
                disabled={type === 'Done'}
              />
            ))}
          </section>
        );
      })}
    </section>
  );
};

export default ActionRequired;

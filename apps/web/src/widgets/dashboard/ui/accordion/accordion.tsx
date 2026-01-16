import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';

import { RequiredActionCard } from '@entities/phase';
import { useAccordion } from '@shared/hooks/useAccordion';

import * as styles from './accordion.css';

interface ActionRequiredAccordion {
  counts: number;
}

interface mock {
  tagType: 'Visa' | 'Career';
  title: string;
  dueDate: string;
}

const ActionRequiredAccordion = ({ counts }: ActionRequiredAccordion) => {
  // 추후 api 응답 값으로 변경
  const mockData: mock[] = [
    {
      tagType: 'Visa',
      title: 'Prepare OPT application documents',
      dueDate: 'Jan 25, 2026',
    },
    {
      tagType: 'Visa',
      title: 'Prepare OPT application documents',
      dueDate: 'Jan 25, 2026',
    },
    {
      tagType: 'Visa',
      title: 'Prepare OPT application documents',
      dueDate: 'Jan 25, 2026',
    },
    {
      tagType: 'Career',
      title: 'Prepare OPT application documents',
      dueDate: 'Jan 25, 2026',
    },
    {
      tagType: 'Career',
      title: 'Prepare OPT application documents',
      dueDate: 'Jan 25, 2026',
    },
  ];
  const { isOpen, shouldRender, toggle } = useAccordion();
  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;

  return (
    // accordionItem
    <section className={styles.container}>
      {/* accordionTrigger */}
      <header className={styles.header} onClick={toggle}>
        <div className={styles.left_section}>
          <h3 className={styles.text({ textTone: 'gray' })}>Action Required</h3>
          <span className={styles.text({ textTone: 'primary' })}>{counts}</span>
        </div>
        <Chevron width={16} height={16} className={styles.icon} />
      </header>

      {/* accordionContent */}
      <div className={styles.wrapper({ isOpen: isOpen })}>
        <div className={styles.inner}>
          {shouldRender && (
            <div className={styles.content}>
              {mockData.map((data, idx) => (
                <RequiredActionCard
                  key={`${data.tagType}-${idx}`}
                  tagType={data.tagType}
                  title={data.title}
                  dueDate={data.dueDate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ActionRequiredAccordion;

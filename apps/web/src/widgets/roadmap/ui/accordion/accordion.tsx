import { Button, Tag } from '@kds/ui';

import { useAccordion } from '@shared/hooks/useAccordion';

import ActionRequired from '../action-required/action-required';
import AIGuide from '../ai-guide/ai-guide';

import * as styles from './accordion.css';

interface PhaseListAccordionItemProps {
  phase: number;
  title: string;
  subTitle: string;
  dueDate: string;
}

const mockData = {
  Visa: {
    count: 1,
    list: [
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
    ],
  },
  Career: {
    count: 2,
    list: [
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
    ],
  },
  Done: {
    count: 1,
    list: [
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
    ],
  },
  totalCount: 4,
};

const PhaseListAccordionItem = ({
  phase,
  title,
  subTitle,
  dueDate,
}: PhaseListAccordionItemProps) => {
  // 추후 api 응답 값으로 변경
  const { isOpen, shouldRender, toggle } = useAccordion();
  const tagStyle = isOpen ? 'pastel_blue' : 'disabled_gray';
  const buttonText = isOpen ? 'Show less' : 'Show all';

  return (
    // accordionItem
    <section className={styles.container}>
      {/* accordionTrigger */}
      <header className={styles.header}>
        <div className={styles.left_section}>
          <Tag color={tagStyle}>Phase {phase}</Tag>
          <div className={styles.column}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.grayText}>{subTitle}</p>
          </div>
        </div>
        <div className={styles.right_section}>
          <span className={styles.grayText}>{dueDate}</span>
          <Button preset="text_ghost" onClick={toggle}>
            {buttonText}
          </Button>
        </div>
      </header>

      {/* accordionContent */}
      <div className={styles.wrapper({ isOpen: isOpen })}>
        <div className={styles.inner}>
          <div className={styles.line} />
          {shouldRender && (
            <div className={styles.content}>
              <ActionRequired data={mockData} />
              <AIGuide
                importance="This is placeholder text for Required Action section."
                guideline="This is placeholder text for Required Action section."
                commonMistakes="This is placeholder text for Required Action section."
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhaseListAccordionItem;

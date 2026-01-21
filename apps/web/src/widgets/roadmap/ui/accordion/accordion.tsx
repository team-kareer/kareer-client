import { useState } from 'react';
import { Button, Tag } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import { ActionRequired, AIGuide } from '@widgets/roadmap';
import { PHASE_OPTIONS } from '@entities/phase/queries/queries';
import { useAccordion } from '@shared/hooks/useAccordion';

import * as styles from './accordion.css';

interface PhaseListAccordionItemProps {
  phase: number;
  title: string;
  subTitle: string;
  dueDate: string;
  phaseActionId: number;
}

const mockData = {
  Visa: {
    count: 1,
    list: [
      {
        title: 'Prepare internship log',
        description: 'Document all work experience during internship period',
        deadline: '2026-01-13',
        phaseActionId: 36,
      },
    ],
  },
  Career: {
    count: 2,
    list: [
      {
        title: 'Prepare internship log',
        description: 'Document all work experience during internship period',
        deadline: '2026-01-13',
        phaseActionId: 2,
      },
      {
        title: 'Prepare internship log',
        description: 'Document all work experience during internship period',
        deadline: '2026-01-13',
        phaseActionId: 3,
      },
    ],
  },
  Done: {
    count: 1,
    list: [
      {
        title: 'Prepare internship log',
        description: 'Document all work experience during internship period',
        deadline: '2026-01-13',
        phaseActionId: 4,
      },
    ],
  },
  totalCount: 4,
};

const Accordion = ({
  phase,
  title,
  subTitle,
  dueDate,
  phaseActionId,
}: PhaseListAccordionItemProps) => {
  // 추후 api 응답 값으로 변경
  const { isOpen, shouldRender, toggle } = useAccordion();
  const tagStyle = isOpen ? 'pastel_blue' : 'disabled_gray';
  const buttonText = isOpen ? 'Show less' : 'Show all';
  const [selectedPhaseActionId, setSelectedPhaseActionId] =
    useState<number>(phaseActionId);

  const { data } = useQuery({
    ...PHASE_OPTIONS.GET_AI_GUIDE({
      phaseActionId: selectedPhaseActionId,
    }),
  });

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
              <ActionRequired
                data={mockData}
                onSelect={(id) => setSelectedPhaseActionId(id)}
              />
              <AIGuide
                importance={data?.importance ?? ''}
                guideline={data?.guidelines ?? []}
                commonMistakes={data?.mistakes ?? []}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

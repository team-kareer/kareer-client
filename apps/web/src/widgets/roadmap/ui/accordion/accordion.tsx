import { useState } from 'react';
import { Button, Tag } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import { ActionRequired, AIGuide } from '@widgets/roadmap';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { useAccordion } from '@shared/hooks/useAccordion';

import * as styles from './accordion.css';

interface PhaseListAccordionItemProps {
  phaseId: number;
  phase: number;
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string;
}

const Accordion = ({
  phaseId,
  phase,
  title,
  subTitle,
  startDate,
  endDate,
}: PhaseListAccordionItemProps) => {
  const { data } = useQuery({
    ...PHASE_QUERY_OPTIONS.GET_PAHSE_ITEM_ROADMAP(phaseId),
  });
  const { isOpen, shouldRender, toggle } = useAccordion();
  const tagStyle = isOpen ? 'pastel_blue' : 'disabled_gray';
  const buttonText = isOpen ? 'Show less' : 'Show all';
  const [selectedPhaseActionId, setSelectedPhaseActionId] = useState<
    number | undefined
  >(undefined);

  const initialPhaseActionId = Object.values(data?.actions ?? {})
    .flatMap((group) => group.items ?? [])
    .find((item) => item.phaseActionId != null)?.phaseActionId;
  const phaseActionId = selectedPhaseActionId ?? initialPhaseActionId;

  const { data: aiGuideData } = useQuery({
    ...PHASE_QUERY_OPTIONS.GET_AI_GUIDE({
      phaseActionId: phaseActionId ?? 0,
    }),
    enabled: phaseActionId != null,
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
          <span className={styles.grayText}>
            {startDate} - {endDate}
          </span>
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
              {data && (
                <ActionRequired
                  totalCnt={data.totalCount}
                  actions={data.actions}
                  onSelect={(id) => setSelectedPhaseActionId(id)}
                />
              )}
              <AIGuide
                importance={aiGuideData?.importance ?? ''}
                guideline={aiGuideData?.guidelines ?? []}
                commonMistakes={aiGuideData?.mistakes ?? []}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

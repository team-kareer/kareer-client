import { useEffect, useRef } from 'react';
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
  clickedPhase: number;
}

const Accordion = ({
  phaseId,
  phase,
  title,
  subTitle,
  startDate,
  endDate,
  clickedPhase,
}: PhaseListAccordionItemProps) => {
  const { data } = useQuery({
    ...PHASE_QUERY_OPTIONS.GET_PAHSE_ITEM_ROADMAP(phaseId),
  });
  const { isOpen, shouldRender, toggle, open, close } = useAccordion();
  const tagStyle = isOpen ? 'pastel_blue' : 'disabled_gray';
  const buttonText = isOpen ? 'Show less' : 'Show all';
  const prevClickedPhaseRef = useRef(clickedPhase);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prevClickedPhaseRef.current === clickedPhase) {
      return;
    }

    if (clickedPhase === phase) {
      if (!isOpen) {
        open();
      }
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 251);
    } else {
      if (isOpen) {
        close();
      }
    }
    prevClickedPhaseRef.current = clickedPhase;
  }, [clickedPhase, isOpen, close, open, phase]);

  return (
    // accordionItem
    <section ref={containerRef} className={styles.container}>
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
                />
              )}
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

export default Accordion;

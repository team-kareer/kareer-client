import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';
import { useQuery } from '@tanstack/react-query';

import { RequiredActionCard } from '@entities/phase';
import { RequiredActionType } from '@entities/phase/model';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { useAccordion } from '@shared/hooks/useAccordion';
import { components } from '@shared/types/schema';

import * as styles from './accordion.css';

type Action = components['schemas']['HomePhaseActionResponse'];

interface ActionRequiredAccordion {
  phaseId: number;
}

const ActionRequiredAccordion = ({ phaseId }: ActionRequiredAccordion) => {
  const { data } = useQuery({
    ...PHASE_QUERY_OPTIONS.GET_PHASE_ITEM_HOME(phaseId),
  });

  const { isOpen, shouldRender, toggle } = useAccordion();
  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;

  return (
    // accordionItem
    <section className={styles.container}>
      {/* accordionTrigger */}
      <header className={styles.header} onClick={toggle}>
        <div className={styles.left_section}>
          <h3 className={styles.text({ textTone: 'gray' })}>Action Required</h3>
          <span className={styles.text({ textTone: 'primary' })}>
            {data?.count}
          </span>
        </div>
        <Chevron width={16} height={16} className={styles.icon} />
      </header>

      {/* accordionContent */}
      <div className={styles.wrapper({ isOpen: isOpen })}>
        <div className={styles.inner}>
          {shouldRender && (
            <div className={styles.content}>
              {data?.actions?.map((action: Action) => (
                <RequiredActionCard
                  key={`${action.phaseActionId}`}
                  tagType={(action.type as RequiredActionType) ?? 'Career'}
                  title={action.title ?? ''}
                  dueDate={action.deadline ?? ''}
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

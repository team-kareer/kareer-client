import { ArrowDownIcon, ArrowUpIcon } from '@kds/icons';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { RequiredActionCard } from '@entities/phase';
import { RequiredActionType } from '@entities/phase/model';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { useAccordion } from '@shared/hooks/useAccordion';
import { ROUTE_PATH } from '@shared/router';
import { components } from '@shared/types/schema';

import * as styles from './accordion.css';

type Action = components['schemas']['HomePhaseActionResponse'];

interface ActionRequiredAccordion {
  phaseId: number;
}

const ActionRequiredAccordion = ({ phaseId }: ActionRequiredAccordion) => {
  const navigate = useNavigate();
  const { data } = useQuery({
    ...PHASE_QUERY_OPTIONS.GET_PHASE_ITEM_HOME(phaseId),
  });

  const { isOpen, shouldRender, toggle } = useAccordion();
  const Chevron = isOpen ? ArrowUpIcon : ArrowDownIcon;
  const isDone = data?.count === 0;

  const onClick = () => {
    navigate(ROUTE_PATH.ROADMAP);
  };

  return (
    // accordionItem
    <section className={styles.container}>
      {/* accordionTrigger */}
      <header
        className={styles.header({ isDone: isDone })}
        onClick={isDone ? undefined : toggle}
      >
        <div className={styles.left_section}>
          <h3 className={styles.text({ textTone: 'gray' })}>Action Required</h3>
          <span className={styles.text({ textTone: 'primary' })}>
            {isDone ? 'All Done!' : data?.count}
          </span>
        </div>
        {!isDone && <Chevron width={16} height={16} className={styles.icon} />}
      </header>

      {/* accordionContent */}
      <div className={styles.wrapper({ isOpen: isOpen, isDone: isDone })}>
        <div className={styles.inner}>
          {shouldRender && (
            <div className={styles.content({ isDone: isDone })}>
              {data?.actions?.map((action: Action) => (
                <RequiredActionCard
                  key={`${action.phaseActionId}`}
                  tagType={(action.type as RequiredActionType) ?? 'Career'}
                  title={action.title ?? ''}
                  dueDate={action.deadline ?? ''}
                  onClick={onClick}
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

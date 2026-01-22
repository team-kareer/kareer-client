import { useQuery } from '@tanstack/react-query';

import { Accordion } from '@widgets/roadmap';
import { Phase } from '@entities/phase/model';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';

import * as styles from './accordion-list.css';

const AccordionList = () => {
  // 추후 api 응답 값으로 변경
  const { data } = useQuery({ ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST() });
  return (
    <section className={styles.container}>
      {data?.phases?.map((phase: Phase) => (
        <Accordion
          key={phase.phaseId}
          phaseId={phase.phaseId ?? 0}
          phase={phase.sequence ?? 0}
          title={phase.goal ?? ''}
          subTitle={phase.description ?? ''}
          startDate={phase.startDate ?? ''}
          endDate={phase.endDate ?? ''}
        />
      ))}
    </section>
  );
};

export default AccordionList;

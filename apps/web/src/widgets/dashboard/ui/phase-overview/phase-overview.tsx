import { useState } from 'react';
import { LogoIcon } from '@kds/icons';
import { useQuery } from '@tanstack/react-query';

import { ActionRequiredAccordion } from '@widgets/dashboard/ui';
import { CareerRoadmapStep } from '@entities/phase';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { CareerRoadmap } from '@shared/ui';

const PhaseOverview = () => {
  const { data } = useQuery({ ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST() });

  const [clickedPhase, setClickedPhase] = useState(1);
  return (
    <CareerRoadmap
      goal={data?.phases?.[2]?.goal ?? ''}
      actions={
        <ActionRequiredAccordion
          counts={data?.phases?.[clickedPhase]?.worksCount ?? 0}
        />
      }
    >
      {data?.phases?.map(({ goal, startDate, endDate, sequence }) => {
        const isActive = clickedPhase === sequence;

        return (
          <CareerRoadmapStep
            key={goal}
            title={goal ?? ''}
            period={`${startDate} - ${endDate}`}
            phase={Number(sequence)}
            onClick={() => setClickedPhase(Number(sequence))}
            isActive={isActive}
            bottom={isActive && <LogoIcon width={60} height={60} />}
          />
        );
      })}
    </CareerRoadmap>
  );
};

export default PhaseOverview;

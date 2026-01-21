import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CareerRoadmapStep, CareerRoadmapStepInfo } from '@entities/phase';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { CareerRoadmap } from '@shared/ui';

const PhaseOverview = () => {
  const { data } = useQuery({ ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST() });

  const [clickedPhase, setClickedPhase] = useState(0);
  return (
    <CareerRoadmap goal={data?.phases?.[2]?.goal ?? ''}>
      {data?.phases?.map((phase, idx) => {
        const isActive = clickedPhase === idx;

        return (
          <CareerRoadmapStep
            key={phase.goal}
            title={phase.goal ?? ''}
            period={`${phase.startDate} - ${phase.endDate}`}
            phase={phase.sequence ?? 0}
            onClick={() => setClickedPhase(idx)}
            isActive={isActive}
            bottom={
              <CareerRoadmapStepInfo
                status={phase.phaseStatus ?? ''}
                label={phase.workStatus ?? ''}
                worksCount={phase.worksCount ?? 0}
                isActive={isActive}
              />
            }
          />
        );
      })}
    </CareerRoadmap>
  );
};

export default PhaseOverview;

import { useState } from 'react';
import { LogoIcon } from '@kds/icons';
import { useQuery } from '@tanstack/react-query';

import { ActionRequiredAccordion } from '@widgets/dashboard/ui';
import { CareerRoadmapStep } from '@entities/phase';
import type { Phase } from '@entities/phase/model';
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
          phaseId={data?.phases?.[clickedPhase - 1]?.phaseId ?? 0}
        />
      }
    >
      {data?.phases?.map((phase: Phase) => {
        const isActive = clickedPhase === phase.sequence;

        return (
          <CareerRoadmapStep
            key={phase.goal}
            title={phase.goal ?? ''}
            period={`${phase.startDate} - ${phase.endDate}`}
            phase={Number(phase.sequence)}
            onClick={() => setClickedPhase(Number(phase.sequence))}
            isActive={isActive}
            bottom={isActive && <LogoIcon width={60} height={60} />}
          />
        );
      })}
    </CareerRoadmap>
  );
};

export default PhaseOverview;

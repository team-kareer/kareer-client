import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { CareerRoadmapStep, CareerRoadmapStepInfo } from '@entities/phase';
import type { Phase } from '@entities/phase/model';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { CareerRoadmap } from '@shared/ui';

interface PhaseOverviewProps {
  clickedPhase: number;
  setClickedPhase: (value: number) => void;
}

const PhaseOverview = ({
  clickedPhase,
  setClickedPhase,
}: PhaseOverviewProps) => {
  const { data } = useQuery({ ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST() });
  const cur_phase = data?.phases?.find(
    (phase) => phase.phaseStatus === 'Current',
  );

  useEffect(() => {
    if (cur_phase?.sequence) {
      setClickedPhase(cur_phase.sequence);
    }
  }, [cur_phase, setClickedPhase]);

  return (
    <CareerRoadmap goal={data?.phases?.[2]?.goal ?? ''}>
      {data?.phases?.map((phase: Phase) => {
        const isActive = clickedPhase === phase.sequence;

        return (
          <CareerRoadmapStep
            key={phase.goal}
            title={phase.goal ?? ''}
            period={`${phase.startDate} - ${phase.endDate}`}
            phase={phase.sequence ?? 0}
            onClick={() => setClickedPhase(phase.sequence ?? 0)}
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

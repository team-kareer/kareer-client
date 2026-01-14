import { useState } from 'react';

import { CareerRoadmapStep, CareerRoadmapStepInfo } from '@entities/phase';
import { CareerRoadmap } from '@shared/ui';

const CareerRoadmapDetail = () => {
  // api response 값으로 변경 예정
  const mockData = {
    phases: [
      {
        phaseId: 'Long',
        phaseStatus: 'Past',
        sequence: 1,
        goal: 'Verify Requirement',
        workStatus: 'Incompleted works',
        worksCount: 2,
        startDate: 'Sep. 25', // 2025-11-01
        endDate: 'Nov. 25', // 2025-11-01
      },
      {
        phaseId: 'Long',
        phaseStatus: 'Current',
        sequence: 2,
        goal: 'Build Experience',
        workStatus: 'Remained works',
        worksCount: 2,
        startDate: 'Sep. 25', // 2025-11-01
        endDate: 'Nov. 25', // 2025-11-01
      },
      {
        phaseId: 'Long',
        phaseStatus: 'Future',
        sequence: 3,
        goal: 'D-10 Transition',
        workStatus: 'Scheduled works',
        worksCount: 8,
        startDate: 'Sep. 25', // 2025-11-01
        endDate: 'Nov. 25', // 2025-11-01
      },
    ],
  };

  const [clickedPhase, setClickedPhase] = useState(0);
  return (
    <CareerRoadmap goal={mockData.phases[2]?.goal ?? ''}>
      {mockData.phases.map((phase, idx) => {
        const isActive = clickedPhase === idx;

        return (
          <CareerRoadmapStep
            key={phase.goal}
            title={phase.goal}
            period={`${phase.startDate} - ${phase.endDate}`}
            phase={phase.sequence}
            onClick={() => setClickedPhase(idx)}
            isActive={isActive}
            bottom={
              <CareerRoadmapStepInfo
                status={phase.phaseStatus}
                label={phase.workStatus}
                worksCount={phase.worksCount}
                isActive={isActive}
              />
            }
          />
        );
      })}
    </CareerRoadmap>
  );
};

export default CareerRoadmapDetail;

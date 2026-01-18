import { useState } from 'react';
import { LogoIcon } from '@kds/icons';

import { CareerRoadmapStep } from '@entities/phase';
import { CareerRoadmap } from '@shared/ui';

const PhaseOverview = () => {
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
        startDate: '2025-11-01',
        endDate: '2025-11-01',
      },
      {
        phaseId: 'Long',
        phaseStatus: 'Current',
        sequence: 2,
        goal: 'Build Experience',
        workStatus: 'Remained works',
        worksCount: 2,
        startDate: '2025-09-25',
        endDate: '2025-11-25',
      },
      {
        phaseId: 'Long',
        phaseStatus: 'Future',
        sequence: 3,
        goal: 'D-10 Transition',
        workStatus: 'Scheduled works',
        worksCount: 8,
        startDate: '2025-09-25',
        endDate: '2025-11-25',
      },
    ],
  };

  const [clickedPhase, setClickedPhase] = useState(0);
  return (
    <CareerRoadmap
      goal={mockData.phases[2]?.goal ?? ''}
      actions={<div>actions</div>}
    >
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
            bottom={isActive && <LogoIcon width={60} height={60} />}
          />
        );
      })}
    </CareerRoadmap>
  );
};

export default PhaseOverview;

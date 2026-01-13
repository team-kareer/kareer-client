import { useState } from 'react';

import { CareerRoadmapStep, CareerRoadmapStepInfo } from '@entities/phase';

const DashboardPage = () => {
  const [clickedPhase, setClickedPhase] = useState(0);

  return (
    <div>
      <CareerRoadmapStep
        title="OPT Preparation"
        period="Sep. 25 - Nov. 25"
        phase={0}
        onClick={() => setClickedPhase(0)}
        isActive={clickedPhase === 0}
        bottom={
          <CareerRoadmapStepInfo
            status="Past"
            label="Incompleted works"
            workscount={2}
            isActive={clickedPhase === 0}
          />
        }
      />
      <CareerRoadmapStep
        title="OPT Preparation"
        period="Sep. 25 - Nov. 25"
        phase={1}
        onClick={() => setClickedPhase(1)}
        isActive={clickedPhase === 1}
        bottom={
          <CareerRoadmapStepInfo
            status="Current"
            label="Remained works"
            workscount={2}
            isActive={clickedPhase === 1}
          />
        }
      />
    </div>
  );
};

export default DashboardPage;

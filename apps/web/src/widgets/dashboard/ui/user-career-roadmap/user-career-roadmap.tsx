import { useState } from 'react';
import { AvatarIcon } from '@kds/icons';

import ActionRequiredAccordion from '@widgets/dashboard/ui/accordion/accordion';
import { CareerRoadmapStep } from '@entities/phase';
import { CareerRoadmap } from '@shared/ui';

import * as styles from './user-career-roadmap.css';

const MOCK_DATA = {
  goal: 'E-7 Employment Visa',
  currentPhase: 1,
  actionCounts: 5,
  steps: [
    { phase: 1, title: 'OPT Preparation', period: 'Sep. 25 - Nov. 25' },
    { phase: 2, title: 'D-10 Transition', period: 'Nov. 26 - Jan. 25' },
    { phase: 3, title: 'E-7 Employment', period: 'Jan. 26 - Mar. 25' },
  ],
};

const UserCareerRoadmap = () => {
  const [activePhase, setActivePhase] = useState(MOCK_DATA.currentPhase);

  return (
    <CareerRoadmap
      goal={MOCK_DATA.goal}
      actions={
        <div className={styles.actionListContainer}>
          <ActionRequiredAccordion counts={MOCK_DATA.actionCounts} />
        </div>
      }
    >
      {MOCK_DATA.steps.map((step) => (
        <CareerRoadmapStep
          key={step.phase}
          phase={step.phase}
          title={step.title}
          period={step.period}
          isActive={activePhase === step.phase}
          onClick={() => setActivePhase(step.phase)}
          bottom={
            activePhase === step.phase ? (
              <div className={styles.lottieIcon}>
                <AvatarIcon />
              </div>
            ) : null
          }
        />
      ))}
    </CareerRoadmap>
  );
};

export default UserCareerRoadmap;

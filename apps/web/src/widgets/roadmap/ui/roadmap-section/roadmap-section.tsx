import { useState } from 'react';

import { AccordionList, PhaseOverview } from '@widgets/roadmap';
import { Section } from '@shared/ui';

import * as styles from './roadmap-section.css';

const RoadmapSection = () => {
  const [clicked, setClicked] = useState(0);

  return (
    <div className={styles.container}>
      <Section
        title="Career Roadmap"
        subtitle="Track your progress toward key career milestones"
      >
        <PhaseOverview clickedPhase={clicked} setClickedPhase={setClicked} />
      </Section>
      <Section title="Phase List" subtitle="Check the detailed action plan">
        <AccordionList clickedPhase={clicked} />
      </Section>
    </div>
  );
};

export default RoadmapSection;

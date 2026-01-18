import { AccordionList } from '@widgets/roadmap';
import { Section } from '@shared/ui';

import * as styles from './phase-list-section.css';

const PhaseListSection = () => {
  return (
    <div className={styles.phaseListContainer}>
      <Section title="Phase List" subtitle="Check the detailed action plan">
        <AccordionList />
      </Section>
    </div>
  );
};

export default PhaseListSection;

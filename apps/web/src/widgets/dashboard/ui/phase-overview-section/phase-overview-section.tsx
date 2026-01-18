import { PhaseOverview } from '@widgets/dashboard';
import { Section } from '@shared/ui';

import * as styles from './phase-overview-section.css';

const PhaseOverviewSection = () => {
  return (
    <main className={styles.container}>
      <Section
        title="Career Roadmap"
        subtitle="Track your progress toward key career milestones"
      >
        <PhaseOverview />
      </Section>
    </main>
  );
};

export default PhaseOverviewSection;

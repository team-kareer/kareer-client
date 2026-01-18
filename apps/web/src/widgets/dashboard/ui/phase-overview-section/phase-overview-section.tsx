import { PhaseOverview } from '@widgets/dashboard';
import { Section } from '@shared/ui';

const PhaseOverviewSection = () => {
  return (
    <main>
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

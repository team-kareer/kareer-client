import { PhaseOverview } from '@widgets/roadmap';
import { Section } from '@shared/ui';

const CareerRoadmapSection = () => {
  return (
    <Section
      title="Career Roadmap"
      subtitle="Track your progress toward key career milestones"
    >
      <PhaseOverview />
    </Section>
  );
};

export default CareerRoadmapSection;

import { UserCareerRoadmap } from '@widgets/dashboard/ui';
import { Section } from '@shared/ui';

const UserCareerRoadmapSection = () => {
  return (
    <Section
      title="Career Roadmap"
      subtitle="Track your progress toward key career milestones"
    >
      <UserCareerRoadmap />
    </Section>
  );
};

export default UserCareerRoadmapSection;

import {
  MyBookmarkedJobsSection,
  PhaseOverviewSection,
} from '@widgets/dashboard/ui';
import { RoadmapGenerationGate } from '@widgets/roadmap-generation';

const DashboardPage = () => {
  return (
    <RoadmapGenerationGate>
      <PhaseOverviewSection />
      <MyBookmarkedJobsSection />
    </RoadmapGenerationGate>
  );
};

export default DashboardPage;

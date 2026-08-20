import { RoadmapSection } from '@widgets/roadmap';
import { RoadmapGenerationGate } from '@widgets/roadmap-generation';

const RoadmapPage = () => {
  return (
    <RoadmapGenerationGate>
      <RoadmapSection />
    </RoadmapGenerationGate>
  );
};

export default RoadmapPage;

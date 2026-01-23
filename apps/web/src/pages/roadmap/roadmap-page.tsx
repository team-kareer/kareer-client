import { useQuery } from '@tanstack/react-query';

import { RoadmapSection } from '@widgets/roadmap';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { PageLoader } from '@shared/ui';

const RoadmapPage = () => {
  const { data } = useQuery({ ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST() });
  const hasPhaseData = (data?.phases ?? []).length > 0;

  if (!hasPhaseData) {
    return <PageLoader text="Please wait a bit..." />;
  }

  return (
    <>
      <RoadmapSection />
    </>
  );
};

export default RoadmapPage;

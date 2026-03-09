import { useQuery } from '@tanstack/react-query';

import { MyBookmarkedJobsSection, VisaStatusList } from '@widgets/dashboard/ui';
import { PhaseOverviewSection } from '@widgets/dashboard/ui';
import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries';
import { PageLoader } from '@shared/ui';

const DashboardPage = () => {
  const { data } = useQuery({ ...PHASE_QUERY_OPTIONS.GET_PHASE_LIST() });
  const hasPhaseData = (data?.phases ?? []).length > 0;

  if (!hasPhaseData) {
    return <PageLoader text="Please wait a bit..." />;
  }

  return (
    <>
      <div
        style={{
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        <VisaStatusList />
      </div>
      <PhaseOverviewSection />
      <MyBookmarkedJobsSection />
    </>
  );
};

export default DashboardPage;

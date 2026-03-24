import { useQuery } from '@tanstack/react-query';

import { MyBookmarkedJobsSection } from '@widgets/dashboard/ui';
import { PhaseOverviewSection } from '@widgets/dashboard/ui';
import { LanguageSelector } from '@features/onboarding';
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
      <LanguageSelector />
      <PhaseOverviewSection />
      <MyBookmarkedJobsSection />
    </>
  );
};

export default DashboardPage;

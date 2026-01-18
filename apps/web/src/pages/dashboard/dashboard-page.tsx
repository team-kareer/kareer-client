import { VisaStatusListSection } from '@widgets/dashboard/ui';
import { MyBookmarkedJobsSection } from '@widgets/dashboard/ui';
import PhaseOverviewSection from '@widgets/dashboard/ui/phase-overview-section/phase-overview-section';

const DashboardPage = () => {
  return (
    <>
      <VisaStatusListSection />
      <PhaseOverviewSection />
      <MyBookmarkedJobsSection />
    </>
  );
};

export default DashboardPage;

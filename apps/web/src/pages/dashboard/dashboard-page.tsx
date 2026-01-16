import { MyBookmarkedJobs } from '@widgets/dashboard';
import { JobRecommendationSection } from '@widgets/fit-analysis';

const DashboardPage = () => {
  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: '#F5F6F8',
        gap: '3.2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MyBookmarkedJobs />
      <JobRecommendationSection />
    </div>
  );
};

export default DashboardPage;

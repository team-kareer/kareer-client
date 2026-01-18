import { BookmarkedJobList } from '@features/job';
// import { MOCK_JOBS } from '@shared/mocks/job-mocks';

const DashboardPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <BookmarkedJobList jobs={[]} onScrap={() => {}} />
    </div>
  );
};

export default DashboardPage;

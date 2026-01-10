import { ActionList } from '@widgets/roadmap/components';

const DashboardPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '455px',
        backgroundColor: 'lightgray',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1rem',
      }}
    >
      <ActionList />
    </div>
  );
};

export default DashboardPage;

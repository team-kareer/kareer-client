import { EmptyLayout } from '@shared/ui';

const DashboardPage = () => {
  const handleAdd = () => {
    window.open('/', '_blank');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <EmptyLayout variant="page" onAction={handleAdd} />
      <EmptyLayout variant="section" onAction={handleAdd} />
      <EmptyLayout variant="card" onAction={handleAdd} />
    </div>
  );
};

export default DashboardPage;

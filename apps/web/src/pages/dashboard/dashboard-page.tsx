import { Input } from '@kds/ui';

const DashboardPage = () => {
  const isError = false;
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexDirection: 'column',
        width: '33rem',
      }}
    >
      <Input placeholder="Enter your point" error={!isError} />
      <Input placeholder="Enter your name" error={isError} />
    </div>
  );
};

export default DashboardPage;

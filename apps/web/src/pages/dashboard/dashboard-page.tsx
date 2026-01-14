import { Autocomplete } from '@kds/ui';

const DashboardPage = () => {
  return (
    <div
      style={{
        padding: '2rem',
        width: '400px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: 'lightgray',
      }}
    >
      <Autocomplete />
    </div>
  );
};

export default DashboardPage;

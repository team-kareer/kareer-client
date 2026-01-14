import { Autocomplete } from '@kds/ui';

const DashboardPage = () => {
  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        padding: '2rem',
        width: '400px',
        display: 'flex',
      }}
    >
      <Autocomplete />
    </div>
  );
};

export default DashboardPage;

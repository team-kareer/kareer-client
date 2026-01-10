import { ActionCard } from '@entities/action';

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
      <ActionCard title="Action 1" subTitle="Subtitle 1" date="2026-01-01" />
      <ActionCard title="Action 2" subTitle="Subtitle 2" date="2026-01-02" />
      <ActionCard title="Action 3" subTitle="Subtitle 3" date="2026-01-03" />
    </div>
  );
};

export default DashboardPage;

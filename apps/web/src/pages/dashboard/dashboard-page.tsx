import { ActionRequiredCard } from '@entities/action-required-card/ui/action-required-card/action-required-card';

const DashboardPage = () => {
  const action = {
    title: 'Action Required',
    subTitle: 'This is a sub title',
    date: '2026-01-01',
  };

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
      <ActionRequiredCard
        title={action.title}
        subTitle={action.subTitle}
        date={action.date}
      />
    </div>
  );
};

export default DashboardPage;

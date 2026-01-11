import { ActionCard } from '@widgets/roadmap/components/action-card';

const DashboardPage = () => {
  const action = {
    title: 'Action Required',
    subTitle: 'This is a sub title',
    dueDate: '2026-01-01',
    disabled: true,
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
      <ActionCard
        title={action.title}
        subTitle={action.subTitle}
        dueDate={action.dueDate}
        disabled={true}
      />
      <ActionCard
        title={action.title}
        subTitle={action.subTitle}
        dueDate={action.dueDate}
        disabled={false}
      />
    </div>
  );
};

export default DashboardPage;

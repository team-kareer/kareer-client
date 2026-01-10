import { ActionCard } from '@entities/action';
import { useActions } from '@entities/action/hooks/use-actions';

const DashboardPage = () => {
  const { data: actions = [] } = useActions();

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
      {actions.map((action, index) => {
        return <ActionCard key={index} action={action} />;
      })}
    </div>
  );
};

export default DashboardPage;

import { useActions } from '@entities/action-required-card/queries/use-actions';
import { ActionCard } from './action-card';

export const ActionList = () => {
  const { data: actions = [] } = useActions();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {actions.map((action, index) => (
        <ActionCard key={index} action={action} />
      ))}
    </div>
  );
};

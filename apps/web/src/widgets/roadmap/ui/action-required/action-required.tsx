import { Tag } from '@kds/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ActionCard from '@widgets/roadmap/ui/action-card';
import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { TODO_QUERY_KEY } from '@entities/todo';
import { components } from '@shared/types/schema';

import * as styles from './action-required.css';

const TITLE = 'Action Required';

type ActionRequiredItem = components['schemas']['ActionResponse'];

interface ActionRequiredGroup {
  count: number;
  list: ActionRequiredItem[];
}

interface ActionRequiredData {
  Visa: ActionRequiredGroup;
  Career: ActionRequiredGroup;
  Done: ActionRequiredGroup;
  totalCount: number;
}

interface ActionRequiredProps {
  data: ActionRequiredData;
}

const TAG_COLOR_PALETTE = {
  Visa: 'pastel_purple',
  Career: 'pastel_skyblue',
  Done: 'disabled_gray',
} as const;

const ActionRequired = ({ data }: ActionRequiredProps) => {
  const types: Array<keyof typeof TAG_COLOR_PALETTE> = [
    'Visa',
    'Career',
    'Done',
  ];
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    ...TODO_MUTATION_OPTIONS.POST_TODO(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TODO_QUERY_KEY.TODO_LIST(),
      });
    },
  });

  const handleTodoItem = (phaseActionId?: number) => {
    if (phaseActionId == null) {
      return;
    }
    mutate(phaseActionId);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>{TITLE}</p>
        <p className={styles.headerItemCount}>{data.totalCount} items</p>
      </header>
      {types.map((type) => {
        const group = data[type];

        return (
          <section key={type} className={styles.section}>
            <div className={styles.sectionType}>
              <Tag color={TAG_COLOR_PALETTE[type]}>{type}</Tag>
              <span className={styles.typeItemCount({ color: type })}>
                {group.count}
              </span>
            </div>
            {group.list.map((item, index) => (
              <ActionCard
                key={`${type}-${index}`}
                title={item.title ?? ''}
                subTitle={item.description ?? ''}
                dueDate={item.deadline ?? ''}
                disabled={type === 'Done'}
                onClick={() => handleTodoItem(item.phaseActionId)}
              />
            ))}
          </section>
        );
      })}
    </section>
  );
};

export default ActionRequired;

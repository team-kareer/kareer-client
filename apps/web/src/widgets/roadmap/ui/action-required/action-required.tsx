import { Tag } from '@kds/ui';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import ActionCard from '@widgets/roadmap/ui/action-card';
import { TODO_MUTATION_OPTIONS } from '@features/todo/queries';
import { PHASE_QUERY_KEY } from '@entities/phase/queries';
import { TODO_QUERY_KEY } from '@entities/todo';
import { components } from '@shared/types/schema';

import { formatDate } from '../../../../shared/utils/date-formatter';

import * as styles from './action-required.css';

const TITLE = 'Action Required';

type ActionsObject = {
  [key: string]: components['schemas']['ActionGroupResponse'];
};

type TagType = 'Visa' | 'Career' | 'Done';

interface ActionRequiredProps {
  totalCnt?: number;
  actions?: ActionsObject;
  onSelect?: (phaseActionId: number) => void;
}

const TAG_COLOR_PALETTE = {
  Visa: 'pastel_purple',
  Career: 'pastel_skyblue',
  Done: 'disabled_gray',
} as const;

const isTagType = (key: string): key is TagType => {
  return key in TAG_COLOR_PALETTE;
};

const ActionRequired = ({
  totalCnt = 0,
  actions = {},
  onSelect,
}: ActionRequiredProps) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    ...TODO_MUTATION_OPTIONS.POST_TODO(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TODO_QUERY_KEY.TODO_LIST(),
      });
      queryClient.invalidateQueries({
        queryKey: PHASE_QUERY_KEY.PHASE_ITEM_ROADMAP_ALL(),
      });
    },
  });

  const handleTodoItem = (phaseActionId?: number) => {
    if (phaseActionId == null) {
      return;
    }
    mutate(phaseActionId);
  };

  const handleSelect = (phaseActionId?: number) => {
    if (phaseActionId == null) {
      return;
    }
    onSelect?.(phaseActionId);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>{TITLE}</p>
        <p className={styles.headerItemCount}>{totalCnt} items</p>
      </header>
      {Object.entries(actions).map(([key, value]) => {
        if (!isTagType(key)) {
          return null;
        }

        return (
          <section key={key} className={styles.section}>
            <div className={styles.sectionType}>
              <Tag color={TAG_COLOR_PALETTE[key]}>{key}</Tag>
              <span className={styles.typeItemCount({ color: key })}>
                {value.count}
              </span>
            </div>
            {value.items?.map((item) => (
              <ActionCard
                key={item.phaseActionId}
                title={item.title ?? ''}
                subTitle={item.description ?? ''}
                dueDate={formatDate(item.deadline) ?? ''}
                disabled={key === 'Done'}
                isButtonDisabled={item.added}
                onSelect={() => handleSelect(item.phaseActionId)}
                onTodoClick={() => handleTodoItem(item.phaseActionId)}
              />
            ))}
          </section>
        );
      })}
    </section>
  );
};

export default ActionRequired;

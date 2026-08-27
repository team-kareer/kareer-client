import { Button, Tab, useTabContext } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import {
  type TodoActionsType,
  type TodoDraft,
  type TodoItemHandlers,
  TodoItemList,
  useCreateTodo,
  useDeleteTodo,
  useToggleTodo,
  useUpdateTodo,
} from '@features/todo';
import {
  type ActionItem,
  TODO_QUERY_OPTIONS,
  TodoCompletedSection,
} from '@entities/todo';
import { EmptyLayout } from '@shared/ui';

import { useDueLabel } from './hooks/use-due-label';
import { useTodoPanelMode } from './hooks/use-todo-panel-mode';
import { getSortedTodos } from './utils/get-sorted-todos';

import * as styles from './todo-panel.css';

const TABS = [
  { id: 1, value: 'visa', label: 'tab.visa', actionsType: 'VISA' },
  { id: 2, value: 'career', label: 'tab.career', actionsType: 'CAREER' },
] as const satisfies readonly {
  id: number;
  value: string;
  label: string;
  actionsType: TodoActionsType;
}[];

const TodoPanel = () => {
  const { t } = useTranslation('todo');
  const getDueLabel = useDueLabel();
  const { data } = useQuery({ ...TODO_QUERY_OPTIONS.GET_TODO_LIST() });
  const todos = getSortedTodos({
    visa: data?.visaActionItems ?? [],
    career: data?.careerActionItems ?? [],
  });

  const {
    mode,
    exitMode,
    enterCreateMode,
    enterEditMode,
    setMenuOpen,
    isCompletedOpen,
    toggleCompletedOpen,
    pendingDeleteIds,
    hidePendingDelete,
    revealPendingDelete,
  } = useTodoPanelMode();

  const { toggleTodo } = useToggleTodo();
  const { createTodo, isPending } = useCreateTodo();
  const { updateTodo } = useUpdateTodo();
  const { requestDelete } = useDeleteTodo({
    onHide: hidePendingDelete,
    onReveal: revealPendingDelete,
    renderUndoAction: (onUndo) => (
      <Button preset="text_inverse" type="button" onClick={onUndo}>
        {t('toast.undo')}
      </Button>
    ),
  });

  const isVisible = (item: ActionItem) =>
    !pendingDeleteIds.has(Number(item.actionItemId));

  const isCreating = mode.type === 'creating';
  const editingItemId = mode.type === 'editing' ? mode.actionItemId : null;
  const menuOpenItemId = mode.type === 'menuOpen' ? mode.actionItemId : null;

  const todoItemHandlers: TodoItemHandlers = {
    onToggle: toggleTodo,
    onEditStart: enterEditMode,
    onEditSubmit: (actionItemId, draft) => {
      updateTodo(actionItemId, draft);
      exitMode();
    },
    onDelete: requestDelete,
    onMenuOpenChange: setMenuOpen,
    onCancelEdit: exitMode,
  };

  const handleCreateSubmit = (
    draft: TodoDraft,
    actionsType: TodoActionsType,
  ) => {
    createTodo(draft, actionsType);
    exitMode();
  };

  return (
    <aside className={styles.container}>
      <h3 className={styles.title}>{t('TodoTitle')}</h3>
      <Tab.Container initialValue="visa">
        <Tab.List className={styles.tabList}>
          <TodoTabButtons onTabChange={exitMode} />
        </Tab.List>
        {TABS.map(({ id, value, actionsType }) => {
          const incompleteTodos = todos[value].incomplete.filter(isVisible);
          const completedTodos = todos[value].completed.filter(isVisible);
          const isEmpty =
            incompleteTodos.length === 0 && completedTodos.length === 0;
          const showEmptyLayout = isEmpty && !isCreating && !isPending;

          return (
            <Tab.Panel key={id} tab={value} className={styles.tabPanel}>
              {showEmptyLayout ? (
                <EmptyLayout variant="card" onAction={enterCreateMode} />
              ) : (
                <>
                  <TodoItemList
                    items={incompleteTodos}
                    editingItemId={editingItemId}
                    menuOpenItemId={menuOpenItemId}
                    getDescription={getDueLabel}
                    handlers={todoItemHandlers}
                    onCreateSubmit={
                      isCreating
                        ? (draft) => handleCreateSubmit(draft, actionsType)
                        : undefined
                    }
                  />
                  {completedTodos.length > 0 && (
                    <TodoCompletedSection
                      count={completedTodos.length}
                      label={t('completed.label')}
                      isOpen={isCompletedOpen}
                      onToggleOpen={toggleCompletedOpen}
                    >
                      <TodoItemList
                        items={completedTodos}
                        editingItemId={editingItemId}
                        menuOpenItemId={menuOpenItemId}
                        getDescription={getDueLabel}
                        handlers={todoItemHandlers}
                      />
                    </TodoCompletedSection>
                  )}
                </>
              )}
            </Tab.Panel>
          );
        })}
      </Tab.Container>
    </aside>
  );
};

interface TodoTabButtonsProps {
  onTabChange: () => void;
}

const TodoTabButtons = ({ onTabChange }: TodoTabButtonsProps) => {
  const { t } = useTranslation('todo');
  const { selectedTab, setSelectedTab } = useTabContext();

  const handleTabClick = (value: string) => {
    if (value === selectedTab) {
      return;
    }

    setSelectedTab(value);
    onTabChange();
  };

  return (
    <>
      {TABS.map(({ id, value, label }) => (
        <Button
          key={id}
          preset={selectedTab === value ? 'mini_primary' : 'mini_outlined'}
          onClick={() => handleTabClick(value)}
        >
          {t(label)}
        </Button>
      ))}
    </>
  );
};

export default TodoPanel;

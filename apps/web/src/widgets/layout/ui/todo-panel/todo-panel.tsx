import { Button, Tab, useTabContext } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import {
  type TodoActionsType,
  type TodoDraft,
  TodoItemForm,
  TodoItemMenu,
  TodoUndoToastAction,
  useCreateTodo,
  useDeleteTodo,
  useToggleTodo,
  useUpdateTodo,
} from '@features/todo';
import {
  type ActionItem,
  getDueInDays,
  TODO_QUERY_OPTIONS,
  TodoCompletedSection,
  TodoItem,
} from '@entities/todo';
import { EmptyLayout } from '@shared/ui';

import { useDueLabel } from './hooks/use-due-label';
import { useSortedTodos } from './hooks/use-sorted-todos';
import { useTodoPanelMode } from './hooks/use-todo-panel-mode';

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

const EMPTY_DRAFT: TodoDraft = { title: '', dueInDays: null };

const TodoPanel = () => {
  const { t } = useTranslation('todo');
  const getDueLabel = useDueLabel();
  const { data } = useQuery({ ...TODO_QUERY_OPTIONS.GET_TODO_LIST() });
  const { todos } = useSortedTodos({
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
  const { createTodo, isPending: isCreating } = useCreateTodo();
  const { updateTodo, isPending: isUpdating } = useUpdateTodo();
  const { requestDelete } = useDeleteTodo({
    onHide: hidePendingDelete,
    onReveal: revealPendingDelete,
    renderUndoAction: (onUndo) => (
      <TodoUndoToastAction label={t('toast.undo')} onUndo={onUndo} />
    ),
  });

  const isVisible = (item: ActionItem) =>
    !pendingDeleteIds.has(Number(item.actionItemId));

  const handleCreateSubmit = (
    draft: TodoDraft,
    actionsType: TodoActionsType,
  ) => {
    createTodo(draft, actionsType);
    exitMode();
  };

  const handleEditSubmit = (actionItemId: number, draft: TodoDraft) => {
    updateTodo(actionItemId, draft);
    exitMode();
  };

  const renderTodoItem = (item: ActionItem, isCompletedItem: boolean) => {
    const actionItemId = Number(item.actionItemId);

    if (mode.type === 'editing' && mode.actionItemId === actionItemId) {
      return (
        <TodoItemForm
          key={actionItemId}
          initialDraft={{
            title: item.title ?? '',
            dueInDays: Math.max(1, getDueInDays(item.deadline ?? '') ?? 0),
          }}
          isPending={isUpdating}
          onSubmit={(draft) => handleEditSubmit(actionItemId, draft)}
          onCancel={exitMode}
        />
      );
    }

    const isMenuOpen =
      mode.type === 'menuOpen' && mode.actionItemId === actionItemId;

    return (
      <TodoItem
        key={actionItemId}
        title={item.title ?? ''}
        description={getDueLabel(item.deadline ?? '')}
        size="sm"
        isChecked={item.completed ?? false}
        onToggle={() => toggleTodo(actionItemId)}
        action={
          <TodoItemMenu
            isOpen={isMenuOpen}
            onOpenChange={(isOpen) => setMenuOpen(actionItemId, isOpen)}
            onEdit={
              isCompletedItem ? undefined : () => enterEditMode(actionItemId)
            }
            onDelete={() => requestDelete(actionItemId)}
          />
        }
      />
    );
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
          const isCreatingMode = mode.type === 'creating';
          const isEmpty =
            incompleteTodos.length === 0 && completedTodos.length === 0;

          if (isEmpty && !isCreatingMode) {
            return (
              <Tab.Panel key={id} tab={value} className={styles.tabPanel}>
                <EmptyLayout variant="card" onAction={enterCreateMode} />
              </Tab.Panel>
            );
          }

          return (
            <Tab.Panel key={id} tab={value} className={styles.tabPanel}>
              {(isCreatingMode || incompleteTodos.length > 0) && (
                <ul className={styles.list}>
                  {isCreatingMode && (
                    <TodoItemForm
                      initialDraft={EMPTY_DRAFT}
                      isPending={isCreating}
                      onSubmit={(draft) =>
                        handleCreateSubmit(draft, actionsType)
                      }
                      onCancel={exitMode}
                    />
                  )}
                  {incompleteTodos.map((item) => renderTodoItem(item, false))}
                </ul>
              )}
              {completedTodos.length > 0 && (
                <TodoCompletedSection
                  count={completedTodos.length}
                  label={t('completed.label')}
                  isOpen={isCompletedOpen}
                  onToggleOpen={toggleCompletedOpen}
                >
                  {completedTodos.map((item) => renderTodoItem(item, true))}
                </TodoCompletedSection>
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

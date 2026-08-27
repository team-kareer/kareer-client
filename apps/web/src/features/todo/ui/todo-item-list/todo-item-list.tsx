import type { TodoDraft } from '@features/todo/model';
import { type ActionItem, getDueInDays, TodoItem } from '@entities/todo';

import TodoItemForm from '../todo-item-form/todo-item-form';
import TodoItemMenu from '../todo-item-menu/todo-item-menu';

import * as styles from './todo-item-list.css';

const EMPTY_DRAFT: TodoDraft = { title: '', dueInDays: null };

const toEditDraft = (item: ActionItem): TodoDraft => ({
  title: item.title ?? '',
  dueInDays: Math.max(1, getDueInDays(item.deadline ?? '') ?? 0),
});

export interface TodoItemHandlers {
  onToggle: (actionItemId: number) => void;
  onEditStart: (actionItemId: number) => void;
  onEditSubmit: (actionItemId: number, draft: TodoDraft) => void;
  onDelete: (actionItemId: number) => void;
  onMenuOpenChange: (actionItemId: number, isOpen: boolean) => void;
  onCancelEdit: () => void;
}

interface TodoItemListProps {
  items: ActionItem[];
  editingItemId: number | null;
  menuOpenItemId: number | null;
  getDescription: (deadline: string) => string;
  handlers: TodoItemHandlers;
  onCreateSubmit?: (draft: TodoDraft) => void;
}

const TodoItemList = ({
  items,
  editingItemId,
  menuOpenItemId,
  getDescription,
  handlers,
  onCreateSubmit,
}: TodoItemListProps) => {
  if (!onCreateSubmit && items.length === 0) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {onCreateSubmit && (
        <TodoItemForm
          initialDraft={EMPTY_DRAFT}
          onSubmit={onCreateSubmit}
          onCancel={handlers.onCancelEdit}
        />
      )}
      {items.map((item) => {
        const actionItemId = Number(item.actionItemId);

        return actionItemId === editingItemId ? (
          <TodoItemForm
            key={actionItemId}
            initialDraft={toEditDraft(item)}
            onSubmit={(draft) => handlers.onEditSubmit(actionItemId, draft)}
            onCancel={handlers.onCancelEdit}
          />
        ) : (
          <TodoItemRow
            key={actionItemId}
            item={item}
            description={getDescription(item.deadline ?? '')}
            isMenuOpen={actionItemId === menuOpenItemId}
            handlers={handlers}
          />
        );
      })}
    </ul>
  );
};

interface TodoItemRowProps {
  item: ActionItem;
  description: string;
  isMenuOpen: boolean;
  handlers: TodoItemHandlers;
}

const TodoItemRow = ({
  item,
  description,
  isMenuOpen,
  handlers,
}: TodoItemRowProps) => {
  const actionItemId = Number(item.actionItemId);
  const isCompleted = item.completed ?? false;

  return (
    <TodoItem
      title={item.title ?? ''}
      description={description}
      size="sm"
      isChecked={isCompleted}
      onToggle={() => handlers.onToggle(actionItemId)}
      action={
        <TodoItemMenu
          isOpen={isMenuOpen}
          onOpenChange={(isOpen) =>
            handlers.onMenuOpenChange(actionItemId, isOpen)
          }
          onEdit={
            isCompleted ? undefined : () => handlers.onEditStart(actionItemId)
          }
          onDelete={() => handlers.onDelete(actionItemId)}
        />
      }
    />
  );
};

export default TodoItemList;

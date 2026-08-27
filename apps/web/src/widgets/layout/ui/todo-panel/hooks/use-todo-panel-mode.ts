import { useState } from 'react';

export type TodoPanelMode =
  | { type: 'idle' }
  | { type: 'creating' }
  | { type: 'editing'; actionItemId: number }
  | { type: 'menuOpen'; actionItemId: number };

const IDLE_MODE: TodoPanelMode = { type: 'idle' };

export const useTodoPanelMode = () => {
  const [mode, setMode] = useState<TodoPanelMode>(IDLE_MODE);
  const [isCompletedOpen, setIsCompletedOpen] = useState(false);
  const [pendingDeleteIds, setPendingDeleteIds] = useState<ReadonlySet<number>>(
    new Set(),
  );

  const exitMode = () => {
    setMode(IDLE_MODE);
  };

  const enterCreateMode = () => {
    setMode({ type: 'creating' });
  };

  const enterEditMode = (actionItemId: number) => {
    setMode({ type: 'editing', actionItemId });
  };

  const setMenuOpen = (actionItemId: number, isOpen: boolean) => {
    setMode((current) => {
      if (isOpen) {
        return { type: 'menuOpen', actionItemId };
      }

      const isThisMenuOpen =
        current.type === 'menuOpen' && current.actionItemId === actionItemId;

      return isThisMenuOpen ? IDLE_MODE : current;
    });
  };

  const toggleCompletedOpen = () => {
    setIsCompletedOpen((isOpen) => !isOpen);
  };

  const hidePendingDelete = (actionItemId: number) => {
    setPendingDeleteIds((current) => new Set(current).add(actionItemId));
  };

  const revealPendingDelete = (actionItemId: number) => {
    setPendingDeleteIds((current) => {
      const next = new Set(current);
      next.delete(actionItemId);

      return next;
    });
  };

  return {
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
  };
};

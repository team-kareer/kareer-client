import { type KeyboardEvent, useEffect, useRef } from 'react';
import { DeleteIcon, EditIcon, KebabMenuIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import * as styles from './todo-item-menu.css';

interface TodoItemMenuProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onEdit?: () => void;
  onDelete: () => void;
}

const TodoItemMenu = ({
  isOpen,
  onOpenChange,
  onEdit,
  onDelete,
}: TodoItemMenuProps) => {
  const { t } = useTranslation('todo');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const isShowing = panel.matches(':popover-open');

    if (isOpen && !isShowing) {
      panel.showPopover();
      panel.querySelector('button')?.focus();
    }

    if (!isOpen && isShowing) {
      panel.hidePopover();
    }
  }, [isOpen]);

  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) {
      return;
    }

    const handleToggle = (event: ToggleEvent) => {
      if (event.newState === 'closed') {
        onOpenChange(false);
      }
    };

    panel.addEventListener('toggle', handleToggle);

    return () => panel.removeEventListener('toggle', handleToggle);
  }, [onOpenChange]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onOpenChange(false);
    }
  };

  const handleSelect = (action: () => void) => () => {
    onOpenChange(false);
    action();
  };

  return (
    <>
      <button
        type="button"
        className={styles.trigger({ isOpen })}
        aria-haspopup="menu"
        aria-label={t('menu.trigger')}
        onClick={() => onOpenChange(!isOpen)}
      >
        <KebabMenuIcon width={24} height={24} />
      </button>
      <div
        ref={panelRef}
        popover="auto"
        role="menu"
        className={styles.panel}
        onKeyDown={handleKeyDown}
      >
        {onEdit && (
          <button
            type="button"
            role="menuitem"
            className={styles.menuItem}
            onClick={handleSelect(onEdit)}
          >
            <EditIcon width={24} height={24} className={styles.menuItemIcon} />
            {t('menu.edit')}
          </button>
        )}
        <button
          type="button"
          role="menuitem"
          className={styles.menuItem}
          onClick={handleSelect(onDelete)}
        >
          <DeleteIcon width={24} height={24} className={styles.menuItemIcon} />
          {t('menu.delete')}
        </button>
      </div>
    </>
  );
};

export default TodoItemMenu;

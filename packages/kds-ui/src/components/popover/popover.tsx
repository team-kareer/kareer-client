import { ReactNode, useEffect, useRef } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as styles from './popover.css';

type Placement = keyof typeof styles.placement;

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  anchor: string;
  placement: Placement;
  offsetY: string;
  children: ReactNode;
}

const Popover = ({
  isOpen,
  onClose,
  anchor,
  placement,
  offsetY,
  children,
}: PopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popover = ref.current;
    if (!popover) {
      return;
    }

    if (isOpen) {
      popover.showPopover();
    } else {
      popover.hidePopover();
    }
  }, [isOpen]);

  useEffect(() => {
    const popover = ref.current;
    if (!popover) {
      return;
    }

    const toggle = (e: ToggleEvent) => {
      if (e.newState === 'closed') {
        onClose();
      }
    };

    popover.addEventListener('toggle', toggle);
    return () => popover.removeEventListener('toggle', toggle);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className={`${styles.base} ${styles.placement[placement]} `}
      style={assignInlineVars({
        [styles.anchor]: anchor,
        [styles.offsetY]: offsetY,
      })}
      popover="auto"
    >
      {children}
    </div>
  );
};

export default Popover;

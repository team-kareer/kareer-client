import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import Toast from './toast';
import { ToastContext } from './toast-context';
import { type ToastOptions } from './types/toast-type';

import * as styles from './toast.css';

const TOAST_DURATION = 4000;
const TOAST_EXIT_DURATION = 400;

interface ToastItem extends ToastOptions {
  id: string;
  isLeaving: boolean;
}

interface ToastProviderProps {
  anchor?: string;
  children: ReactNode;
}

const createToastId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

const ToastProvider = ({ anchor, children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const dismissTimeoutsRef = useRef<Map<string, number>>(new Map());
  const removeTimeoutsRef = useRef<Map<string, number>>(new Map());
  const autoDismissRef = useRef<Map<string, () => void>>(new Map());

  const clearToastTimers = useCallback((id: string) => {
    const dismissTimeout = dismissTimeoutsRef.current.get(id);
    const removeTimeout = removeTimeoutsRef.current.get(id);

    if (dismissTimeout) {
      window.clearTimeout(dismissTimeout);
      dismissTimeoutsRef.current.delete(id);
    }

    if (removeTimeout) {
      window.clearTimeout(removeTimeout);
      removeTimeoutsRef.current.delete(id);
    }
  }, []);

  const fireAutoDismiss = useCallback((id: string) => {
    const onAutoDismiss = autoDismissRef.current.get(id);

    autoDismissRef.current.delete(id);
    onAutoDismiss?.();
  }, []);

  const removeToast = useCallback(
    (id: string) => {
      clearToastTimers(id);
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    },
    [clearToastTimers],
  );

  const startLeaving = useCallback(
    (id: string) => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, isLeaving: true } : toast,
        ),
      );

      const removeTimeout = window.setTimeout(() => {
        removeToast(id);
      }, TOAST_EXIT_DURATION);

      removeTimeoutsRef.current.set(id, removeTimeout);
    },
    [removeToast],
  );

  const hideToast = useCallback(
    (id: string) => {
      autoDismissRef.current.delete(id);
      startLeaving(id);
    },
    [startLeaving],
  );

  const showToast = useCallback(
    (options: ToastOptions) => {
      const id = createToastId();

      if (options.onAutoDismiss) {
        autoDismissRef.current.set(id, options.onAutoDismiss);
      }

      setToasts((prevToasts) => [
        ...prevToasts,
        { ...options, id, isLeaving: false },
      ]);

      const dismissTimeout = window.setTimeout(() => {
        fireAutoDismiss(id);
        startLeaving(id);
      }, TOAST_DURATION);

      dismissTimeoutsRef.current.set(id, dismissTimeout);

      return id;
    },
    [fireAutoDismiss, startLeaving],
  );

  useEffect(() => {
    const dismissTimeouts = dismissTimeoutsRef.current;
    const removeTimeouts = removeTimeoutsRef.current;
    const autoDismisses = autoDismissRef.current;

    return () => {
      dismissTimeouts.forEach((timeout) => {
        window.clearTimeout(timeout);
      });
      removeTimeouts.forEach((timeout) => {
        window.clearTimeout(timeout);
      });

      autoDismisses.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div
        className={styles.viewport({ anchored: Boolean(anchor) })}
        style={
          anchor ? assignInlineVars({ [styles.anchor]: anchor }) : undefined
        }
      >
        {toasts.map(({ id, message, icon, action, isLeaving }) => (
          <div key={id} className={styles.toastItem({ leaving: isLeaving })}>
            <Toast message={message} icon={icon} action={action} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;

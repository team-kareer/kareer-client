import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import Toast from './toast';
import { ToastContext, type ToastOptions } from './toast-context';

import * as styles from './toast-viewport.css';

const TOAST_DURATION = 4000;
const TOAST_EXIT_DURATION = 400;
const MAX_VISIBLE_TOASTS = 3;

interface ToastItem extends ToastOptions {
  id: string;
  isLeaving: boolean;
}

interface ToastProviderProps {
  children: ReactNode;
}

const createToastId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const dismissTimeoutsRef = useRef<Map<string, number>>(new Map());
  const removeTimeoutsRef = useRef<Map<string, number>>(new Map());

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

  const removeToast = useCallback(
    (id: string) => {
      clearToastTimers(id);
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    },
    [clearToastTimers],
  );

  const hideToast = useCallback(
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

  const showToast = useCallback(
    ({ message, icon }: ToastOptions) => {
      const id = createToastId();

      setToasts((prevToasts) => {
        const nextToasts = [
          ...prevToasts,
          { id, message, icon, isLeaving: false },
        ];
        const exceededToasts = nextToasts.slice(0, -MAX_VISIBLE_TOASTS);

        exceededToasts.forEach((toast) => {
          clearToastTimers(toast.id);
        });

        return nextToasts.slice(-MAX_VISIBLE_TOASTS);
      });

      const dismissTimeout = window.setTimeout(() => {
        hideToast(id);
      }, TOAST_DURATION);

      dismissTimeoutsRef.current.set(id, dismissTimeout);

      return id;
    },
    [clearToastTimers, hideToast],
  );

  useEffect(() => {
    const dismissTimeouts = dismissTimeoutsRef.current;
    const removeTimeouts = removeTimeoutsRef.current;

    return () => {
      dismissTimeouts.forEach((timeout) => {
        window.clearTimeout(timeout);
      });
      removeTimeouts.forEach((timeout) => {
        window.clearTimeout(timeout);
      });
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className={styles.viewport}>
        {toasts.map(({ id, message, icon, isLeaving }) => (
          <div
            key={id}
            className={`${styles.toastItem} ${isLeaving ? styles.toastItemLeaving : ''}`}
          >
            <Toast message={message} icon={icon} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;

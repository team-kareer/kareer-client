import { createContext } from 'react';

import { ToastOptions } from './types/toast-type';

export interface ToastContextValue {
  showToast: ({ message, icon }: ToastOptions) => string;
  hideToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

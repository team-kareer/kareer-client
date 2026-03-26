import { createContext, ReactNode } from 'react';

export interface ToastOptions {
  message: string;
  icon?: ReactNode;
}

export interface ToastContextValue {
  showToast: ({ message, icon }: ToastOptions) => string;
  hideToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

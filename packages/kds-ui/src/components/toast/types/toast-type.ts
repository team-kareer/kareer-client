import { ReactNode } from 'react';

export interface ToastOptions {
  message: string;
  icon?: ReactNode;
  action?: ReactNode;
  onAutoDismiss?: () => void;
}

import { useContext } from 'react';

import { ToastContext, type ToastContextValue } from '../toast-context';

const useToast = (): ToastContextValue => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('Toast 컴포넌트는 ToastProvider 내부에서 사용해주세요.');
  }

  return toastContext;
};

export default useToast;

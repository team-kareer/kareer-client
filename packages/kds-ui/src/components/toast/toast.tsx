import { ToastOptions } from './types/toast-type';

import * as styles from './toast.css';

const Toast = ({ message, icon, action }: ToastOptions) => {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.message}>{message}</p>
      {action && (
        <>
          <span className={styles.divider} aria-hidden />
          <div className={styles.action}>{action}</div>
        </>
      )}
    </div>
  );
};

export default Toast;

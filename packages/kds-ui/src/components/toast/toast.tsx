import { ToastOptions } from './toast-context';

import * as styles from './toast.css';

const Toast = ({ message, icon }: ToastOptions) => {
  return (
    <div className={styles.container}>
      {icon}
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Toast;

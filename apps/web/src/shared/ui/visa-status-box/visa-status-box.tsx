import { CheckCircleIcon } from '@kds/icons';
import { ProgressBar } from '@kds/ui';

import * as styles from './visa-status-box.css';

interface VisaStatusBoxProps {
  isCurrent: boolean;
  goal: string;
  total: number;
  done: number;
}

const VisaStatusBox = ({
  isCurrent,
  goal,
  total,
  done,
}: VisaStatusBoxProps) => {
  const percent = Math.round((done / total) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left_section}>
          {isCurrent && (
            <>
              <CheckCircleIcon width={19} height={19} />
              <span className={styles.guide}>Current Visa Status</span>
            </>
          )}

          <span className={styles.current}>{goal}</span>
        </div>
        <p className={styles.percent}>{percent}%</p>
      </div>
      <ProgressBar total={total} done={done} />
    </div>
  );
};

export default VisaStatusBox;

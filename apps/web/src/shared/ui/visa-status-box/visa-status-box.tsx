import { CheckCircleIcon } from '@kds/icons';
import { ProgressBar } from '@kds/ui';

import * as styles from './visa-status-box.css';

interface VisaStatusBoxProps {
  isCurrent: boolean;
  goal: string;
  percent: number;
}

const VisaStatusBox = ({ isCurrent, goal, percent }: VisaStatusBoxProps) => {
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
      <ProgressBar percent={percent} />
    </div>
  );
};

export default VisaStatusBox;

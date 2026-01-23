import { CheckCircleIcon } from '@kds/icons';
import { ProgressBar, Tag } from '@kds/ui';

import * as styles from './visa-status-box.css';

interface VisaStatusBoxProps {
  isCurrent: boolean;
  goal: string;
  date: string;
  total: number;
  done: number;
}

const VisaStatusBox = ({
  isCurrent,
  goal,
  date,
  total,
  done,
}: VisaStatusBoxProps) => {
  const percent = Math.floor((done / total) * 100);
  const completed = percent === 100;
  const color = completed ? 'pastel_mint' : 'pastel_orange';
  const tagText = completed ? 'Eligible' : 'Not Eligible';

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
          {isCurrent && <span className={styles.date}>{date}</span>}
        </div>
        <div className={styles.right_section}>
          <Tag color={color}>{tagText}</Tag>
          <p className={styles.percent}>{percent}%</p>
        </div>
      </div>
      <ProgressBar total={total} done={done} />
    </div>
  );
};

export default VisaStatusBox;

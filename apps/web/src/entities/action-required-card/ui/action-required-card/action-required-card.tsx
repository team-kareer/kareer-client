import * as styles from './action-required-card.css';
import { Action } from '../../types/types';

interface ActionRequiredCardProps {
  action: Action;
}

export const ActionRequiredCard = ({ action }: ActionRequiredCardProps) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleStyle}>{action.title}</div>
      <div className={styles.subTitleStyle}>{action.subTitle}</div>
      <div className={styles.dateStyle}>{action.date}</div>
    </div>
  );
};

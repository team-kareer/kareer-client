import * as styles from './action-card.css';
import { Action } from '../../model/types';

interface ActionCardProps {
  action: Action;
}

export const ActionCard = ({ action }: ActionCardProps) => {
  return (
    <div className={styles.actionCard}>
      <div className={styles.titleStyle}>{action.title}</div>
      <div className={styles.subTitleStyle}>{action.subTitle}</div>
      <div className={styles.dateStyle}>{action.date}</div>
    </div>
  );
};

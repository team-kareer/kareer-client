import * as styles from './action-card.css';

interface ActionCardProps {
  title: string;
  subTitle: string;
  date: string;
}

export const ActionCard = ({ title, subTitle, date }: ActionCardProps) => {
  return (
    <div className={styles.actionCard}>
      <div className={styles.titleStyle}>{title}</div>
      <div className={styles.subTitleStyle}>{subTitle}</div>
      <div className={styles.dateStyle}>{date}</div>
    </div>
  );
};

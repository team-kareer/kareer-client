import { Tag } from '@kds/ui';

import * as styles from './required-action-card.css';

type RequiredActionType = 'Visa' | 'Career';

const TAG_CONFIG = {
  Visa: {
    color: 'pastel_purple' as const,
    label: 'Visa' as const,
  },
  Career: {
    color: 'pastel_blue' as const,
    label: 'Career' as const,
  },
};
interface RequiredActionCardProps {
  tagType: RequiredActionType;
  title: string;
  dueDate: string;
  onClick?: () => void;
}

const RequiredActionCard = ({
  tagType,
  title,
  dueDate,
  onClick,
}: RequiredActionCardProps) => {
  const tagConfig = TAG_CONFIG[tagType];
  return (
    <button className={styles.container} onClick={onClick} type="button">
      <Tag color={tagConfig.color}>{tagConfig.label}</Tag>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dueDate}>{dueDate}</p>
      </div>
    </button>
  );
};

export default RequiredActionCard;

import { Tag } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import type { RequiredActionType } from '@entities/phase/model';
import { formatDate } from '@shared/utils';

import * as styles from './required-action-card.css';

const TAG_CONFIG = {
  Visa: {
    color: 'pastel_purple',
    label: 'Visa',
  },
  Career: {
    color: 'pastel_skyblue',
    label: 'Career',
  },
} as const;

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
  const { t } = useTranslation('dashboard');
  const tagConfig = TAG_CONFIG[tagType];
  return (
    <button className={styles.container} onClick={onClick} type="button">
      <Tag color={tagConfig.color}>
        {t(`phaseOverview.actions.tags.${tagConfig.label}`)}
      </Tag>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dueDate}>{formatDate(dueDate)}</p>
      </div>
    </button>
  );
};

export default RequiredActionCard;

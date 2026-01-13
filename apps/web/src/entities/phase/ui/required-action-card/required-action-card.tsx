import { ComponentProps } from 'react';
import { Tag } from '@kds/ui';
import { useNavigate } from 'react-router';

import * as styles from './required-action-card.css';

interface RequiredActionCardProps {
  tagColor: ComponentProps<typeof Tag>['color'];
  tagLabel: 'Visa' | 'Career';
  title: string;
  dueDate: string;
  onClick?: () => void;
}

const RequiredActionCard = ({
  tagColor,
  tagLabel,
  title,
  dueDate,
}: RequiredActionCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/');
  };

  return (
    <button
      className={styles.container}
      onClick={handleCardClick}
      type="button"
    >
      <Tag color={tagColor}>{tagLabel}</Tag>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dueDate}>{dueDate}</p>
      </div>
    </button>
  );
};

export default RequiredActionCard;

import { Tag } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import * as styles from './career-roadmap-step-info.css';

interface CareerRoadmapStepInfoProps {
  status: string;
  label: string;
  worksCount: number;
  isActive: boolean;
}

const TAG_LIST = [
  { key: 'allCompleted', style: 'pastel_mint' },
  { key: 'incompletedWorks', style: 'pastel_red' },
  { key: 'remainedWorks', style: 'pastel_blue' },
  { key: 'scheduledWorks', style: 'outlined_blue' },
] as const;

const CareerRoadmapStepInfo = ({
  status,
  label,
  worksCount,
  isActive,
}: CareerRoadmapStepInfoProps) => {
  const { t } = useTranslation('roadmap');
  const curTag = TAG_LIST.find((tag) => tag.key === label);
  const count = label !== 'allCompleted' ? worksCount : '';

  return (
    <div className={styles.container}>
      <div className={styles.phase({ isActive: isActive })}>
        {t('overview.stepInfo.phaseLabel', { status })}
      </div>
      {curTag?.style && (
        <Tag color={curTag.style}>
          {t(`overview.stepInfo.workStatus.${curTag.key}`)} {count}
        </Tag>
      )}
    </div>
  );
};

export default CareerRoadmapStepInfo;

import { Tag } from '@kds/ui';

import * as styles from './career-roadmap-step-info.css';

interface CareerRoadmapStepInfoProps {
  status: string;
  label: string;
  worksCount: number;
  isActive: boolean;
}

const TAG_LIST = [
  { label: 'All completed', style: 'pastel_mint' },
  { label: 'Incompleted works', style: 'pastel_red' },
  { label: 'Remained works', style: 'pastel_blue' },
  { label: 'Scheduled works', style: 'outlined_blue' },
] as const;

const CareerRoadmapStepInfo = ({
  status,
  label,
  worksCount,
  isActive,
}: CareerRoadmapStepInfoProps) => {
  const curTag = TAG_LIST.find((tag) => tag.label === label);
  const showWorkscount = curTag?.label !== 'All completed';
  const count = showWorkscount ? worksCount : '';

  return (
    <div className={styles.container}>
      <div className={styles.phase({ isActive: isActive })}>{status} Phase</div>
      {curTag?.style && (
        <Tag color={curTag.style}>
          {curTag?.label} {count}
        </Tag>
      )}
    </div>
  );
};

export default CareerRoadmapStepInfo;

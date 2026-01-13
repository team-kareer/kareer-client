import * as styles from './career-roadmap-step-info.css';

interface CareerRoadmapStepInfoProps {
  status: string;
  label: string;
  worksCount: number;
  isActive: boolean;
}

const TAG_LIST = [
  { label: 'All completed', style: 'completed' },
  { label: 'Incompleted works', style: 'incompleted' },
  { label: 'Remained works', style: 'remained' },
  { label: 'Scheduled works', style: 'scheduled' },
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
      <div className={styles.tag({ tag: curTag?.style })}>
        {curTag?.label} {count}
      </div>
    </div>
  );
};

export default CareerRoadmapStepInfo;

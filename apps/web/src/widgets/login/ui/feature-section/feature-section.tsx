import { CustomMapIcon, SparkleIcon, UpdateIcon } from '@kds/icons';

import FeatureCard from '@widgets/login/ui/feature-card/feature-card';

import * as styles from './feature-section.css';

const TITLE = 'Main Function';

const FeatureItems = [
  {
    id: 1,
    icon: <UpdateIcon width={24} height={24} />,
    title: 'Integrated Career Roadmap',
    description:
      'Generates a strategic plan aligning your visa milestones with career goals, based on your unique background.',
  },
  {
    id: 2,
    icon: <CustomMapIcon width={24} height={24} />,
    title: 'Actionable Task Breakdown',
    description:
      'Automatically converts major roadmap goals into detailed, step-by-step to-do lists.',
  },
  {
    id: 3,
    icon: <SparkleIcon width={24} height={24} />,
    title: 'Smart Job Curation',
    description:
      'Personalized job recommendations based on your resume and cover letter analysis.',
  },
] as const;

const FeatureSection = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{TITLE}</h3>
      <div className={styles.cardWrapper}>
        {FeatureItems.map(({ id, icon, title, description }) => (
          <FeatureCard
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

import { CustomMapIcon, SparkleIcon, UpdateIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import FeatureCard from '@widgets/login/ui/feature-card/feature-card';

import * as styles from './feature-section.css';

const FeatureSection = () => {
  const { t } = useTranslation('login');
  const featureItems = [
    {
      id: 1,
      icon: <UpdateIcon width={24} height={24} />,
      title: t('features.items.careerRoadmap.title'),
      description: t('features.items.careerRoadmap.description'),
    },
    {
      id: 2,
      icon: <CustomMapIcon width={24} height={24} />,
      title: t('features.items.taskBreakdown.title'),
      description: t('features.items.taskBreakdown.description'),
    },
    {
      id: 3,
      icon: <SparkleIcon width={24} height={24} />,
      title: t('features.items.jobCuration.title'),
      description: t('features.items.jobCuration.description'),
    },
  ] as const;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('features.title')}</h3>
      <div className={styles.cardWrapper}>
        {featureItems.map(({ id, icon, title, description }) => (
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

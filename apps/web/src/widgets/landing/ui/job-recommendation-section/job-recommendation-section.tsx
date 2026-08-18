import { useTranslation } from 'react-i18next';

import FeatureSection from '../feature-section/feature-section';
import JobRecommendationPreview from './job-recommendation-preview';

const JobRecommendationSection = () => {
  const { t } = useTranslation('landing');

  return (
    <FeatureSection
      featureLabel={t('features.job.label')}
      title={t('features.job.title')}
      description={t('features.job.description')}
      preview={<JobRecommendationPreview />}
      background="muted"
    />
  );
};

export default JobRecommendationSection;

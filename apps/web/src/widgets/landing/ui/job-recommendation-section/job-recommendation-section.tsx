import { useTranslation } from 'react-i18next';

import { LANDING_SECTION_ID } from '@widgets/landing/constants/section-id';

import FeatureSection from '../feature-section/feature-section';
import JobRecommendationPreview from './job-recommendation-preview';

const JobRecommendationSection = () => {
  const { t } = useTranslation('landing');

  return (
    <FeatureSection
      id={LANDING_SECTION_ID.features}
      featureLabel={t('features.job.label')}
      title={t('features.job.title')}
      description={t('features.job.description')}
      preview={<JobRecommendationPreview />}
      background="muted"
    />
  );
};

export default JobRecommendationSection;

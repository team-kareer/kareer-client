import { useTranslation } from 'react-i18next';

import FeatureSection from '@shared/components/feature-section/feature-section';

import CareerRoadmapPreview from './career-roadmap-preview/career-roadmap-preview';

const CareerRoadmapSection = () => {
  const { t } = useTranslation('landing');

  return (
    <FeatureSection
      featureLabel={t('features.roadmap.label')}
      title={t('features.roadmap.title')}
      description={t('features.roadmap.description')}
      preview={<CareerRoadmapPreview />}
      previewPosition="left"
    />
  );
};

export default CareerRoadmapSection;

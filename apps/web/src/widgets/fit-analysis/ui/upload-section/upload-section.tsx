import { useTranslation } from 'react-i18next';

import { JobRecommendationList } from '@widgets/fit-analysis';
import { Section } from '@shared/ui';

import { container } from './upload-section.css';

const UploadSection = () => {
  const { t } = useTranslation('fitAnalysis');

  return (
    <div className={container}>
      <Section title={t('jobRecommendation.section.title')}>
        <JobRecommendationList />
      </Section>
    </div>
  );
};

export default UploadSection;

import { JobRecommendationList } from '@widgets/fit-analysis';
import { Section } from '@shared/ui';

import { container } from './upload-section.css';

const UploadSection = () => {
  return (
    <div className={container}>
      <Section title="Find Your Perfect Job Match">
        <JobRecommendationList />
      </Section>
    </div>
  );
};

export default UploadSection;

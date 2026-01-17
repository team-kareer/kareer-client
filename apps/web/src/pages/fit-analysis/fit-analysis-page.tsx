import { JobRecommendationList, VisaEligibility } from '@widgets/fit-analysis';
import { Section } from '@shared/ui';

import { container } from './fit-analysis-page.css';

const FitAnalysisPage = () => {
  return (
    <div className={container}>
      <Section title="Check visa eligibility">
        <VisaEligibility />
      </Section>
      <Section title="Find Your Perfect Job Match">
        <JobRecommendationList />
      </Section>
    </div>
  );
};

export default FitAnalysisPage;

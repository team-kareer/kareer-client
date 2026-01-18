import { Section } from '@shared/ui';

import MyBookmarkedJobs from '../my-bookmarked-job/my-bookmarked-job';

const MyBookmarkedJobsSection = () => {
  return (
    <Section
      title="Bookmarked Jobs"
      subtitle="Save jobs you're interested in and track them in one place"
    >
      <MyBookmarkedJobs />
    </Section>
  );
};

export default MyBookmarkedJobsSection;

import { MyBookmarkedJobs } from '@widgets/dashboard/ui';
import { Section } from '@shared/ui';

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

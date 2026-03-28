import { useTranslation } from 'react-i18next';

import { MyBookmarkedJobs } from '@widgets/dashboard/ui';
import { Section } from '@shared/ui';

import * as styles from './my-bookmarked-job-section.css';

const MyBookmarkedJobsSection = () => {
  const { t } = useTranslation('dashboard');

  return (
    <main className={styles.container}>
      <Section
        title={t('bookmarkedJobs.section.title')}
        subtitle={t('bookmarkedJobs.section.subtitle')}
      >
        <MyBookmarkedJobs />
      </Section>
    </main>
  );
};

export default MyBookmarkedJobsSection;

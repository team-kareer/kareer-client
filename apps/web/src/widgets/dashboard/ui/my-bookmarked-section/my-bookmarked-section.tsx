import { useState } from 'react';
import { SectionHeader } from '@kds/ui';

import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';
import { MOCK_JOBS } from '@shared/mocks/job-mocks.ts';

import * as styles from './my-bookmarked-section.css';

export const MyBookmarkedJobs = () => {
  // todo: api hook으로 교체
  const [bookmarks, setBookmarks] = useState(MOCK_JOBS);

  const handleRemove = (id: number) => {
    // 임시 삭제 로직
    setBookmarks((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <section className={styles.container}>
      <SectionHeader
        title="Bookmarked Jobs"
        subtitle="Save jobs you’re interested in and track them in one place"
      />
      <BookmarkedJobList jobs={bookmarks} onScrap={handleRemove} />
    </section>
  );
};

export default MyBookmarkedJobs;

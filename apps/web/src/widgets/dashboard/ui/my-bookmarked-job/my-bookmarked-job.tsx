import { useState } from 'react';
import { SectionHeader } from '@kds/ui';

import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';

import * as styles from './my-bookmarked-job.css.ts';

export const MyBookmarkedJobs = () => {
  // todo: api hook으로 교체
  const [bookmarks, setBookmarks] = useState([]);

  const handleRemove = (id: number) => {
    // 삭제 로직
  };

  return (
    <section className={styles.container}>
      <SectionHeader title="Bookmarked Jobs" />
      <BookmarkedJobList jobs={bookmarks} onScrap={handleRemove} />
    </section>
  );
};

export default MyBookmarkedJobs;

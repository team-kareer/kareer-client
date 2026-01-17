import { useState } from 'react';

import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';
import { MOCK_JOBS } from '@shared/mocks/job-mocks.ts';

export const MyBookmarkedJobs = () => {
  // todo: api hook으로 교체
  const [bookmarks, setBookmarks] = useState(MOCK_JOBS.slice(0, 4));

  const handleRemove = (id: number) => {
    // 임시 삭제 로직
    setBookmarks((prev) => prev.filter((job) => job.id !== id));
  };

  return <BookmarkedJobList jobs={bookmarks} onScrap={handleRemove} />;
};

export default MyBookmarkedJobs;

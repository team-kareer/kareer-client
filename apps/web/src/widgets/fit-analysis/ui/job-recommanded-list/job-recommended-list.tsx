import { useState } from 'react';

import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';
import { MOCK_JOBS } from '@shared/mocks/job-mocks';

import UploadBox from '../upload-box/upload-box';

import * as styles from './job-recommended-list.css';

export const JobRecommendationList = () => {
  const [isChecked, setIsChecked] = useState(false);
  // todo: api hook으로 교체
  const [recommendations, setRecommendations] = useState(MOCK_JOBS);

  const handleToggle = (id: number) => {
    // 토글 로직
    setRecommendations((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, isScraped: !job.isScraped } : job,
      ),
    );
  };

  const handleClickFindPosition = () => {
    // @TODO: PDF 업로드
  };

  return (
    <div className={styles.listWrapper}>
      <UploadBox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onClick={handleClickFindPosition}
      />
      <BookmarkedJobList jobs={recommendations} onScrap={handleToggle} />
    </div>
  );
};

export default JobRecommendationList;

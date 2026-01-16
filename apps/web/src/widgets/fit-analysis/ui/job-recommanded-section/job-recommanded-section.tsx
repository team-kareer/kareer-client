import { useState } from 'react';
import { SectionHeader } from '@kds/ui';

import UploadBox from '@widgets/fit-analysis/ui/upload-box/upload-box';
// 업로드 박스 머지 이후 추가 예정
import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';
import { MOCK_JOBS } from '@shared/mocks/job-mocks';

import * as styles from './job-recommanded-section.css';

export const JobRecommendationSection = () => {
  // todo: api hook으로 교체
  const [recommendations, setRecommendations] = useState(MOCK_JOBS.slice(0, 4));

  const handleToggle = (id: number) => {
    // 토글 로직
    setRecommendations((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, isScraped: !job.isScraped } : job,
      ),
    );
  };

  return (
    <section className={styles.container}>
      <SectionHeader title="Find Your Perfect Job Match" />
      <UploadBox />
      <div className={styles.listWrapper}>
        <BookmarkedJobList jobs={recommendations} onScrap={handleToggle} />
      </div>
    </section>
  );
};

export default JobRecommendationSection;

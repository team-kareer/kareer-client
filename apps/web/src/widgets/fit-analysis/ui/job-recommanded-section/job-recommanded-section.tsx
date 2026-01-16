import { useState } from 'react';

// import { UploadBox } from '@features/file-upload';
// 업로드 박스 머지 이후 추가 예정
import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';

export const JobRecommendationSection = () => {
  // todo: api hook으로 교체
  const [recommendations, setRecommendations] = useState([]);

  const handleToggle = (id: number) => {
    // 토글 로직
  };

  return (
    <section>
      {/* <UploadBox /> */}
      <div style={{ marginTop: '2rem' }}>
        <BookmarkedJobList jobs={recommendations} onScrap={handleToggle} />
      </div>
    </section>
  );
};

export default JobRecommendationSection;

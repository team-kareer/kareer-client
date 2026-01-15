import { Tag } from '@kds/ui';

import ScrapButton from '@features/phase/ui/job-bookmark/job-bookmark';
import { BookmarkedJobCard } from '@entities/phase';

const DashboardPage = () => {
  const mockJob = {
    companyName: 'THEIA',
    title: 'Hiring Japanese Marketers',
    dueDate: 'Jan 24, 2026',
    imageUrl: undefined, // 임시
    isScraped: true,
    tag: { label: 'D-2', color: 'outlined_blue' as const },
    tags: [
      { label: 'Part-time worker', color: 'pastel_skyblue' as const },
      { label: 'Seocho-gu, Seoul +1', color: 'disabled_gray' as const },
    ],
  };

  const handleCardClick = () => {
    // 카드 클릭 시 동작할 함수
  };

  return (
    <div>
      <BookmarkedJobCard
        companyName={mockJob.companyName}
        title={mockJob.title}
        dueDate={mockJob.dueDate}
        imageUrl={mockJob.imageUrl}
        onClick={handleCardClick}
        tag={<Tag color={mockJob.tag.color}>{mockJob.tag.label}</Tag>}
        tags={
          <>
            {mockJob.tags.map((tag) => (
              <Tag key={tag.label} color={tag.color}>
                {tag.label}
              </Tag>
            ))}
          </>
        }
      >
        <ScrapButton isScraped={mockJob.isScraped} />
      </BookmarkedJobCard>
    </div>
  );
};

export default DashboardPage;

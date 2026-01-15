import { useState } from 'react';
import { Tag } from '@kds/ui';

import ScrapButton from '@features/phase/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/phase';

const DashboardPage = () => {
  const [isScraped, setIsScraped] = useState(true);
  return (
    <div>
      <BookmarkedJobCard
        companyName="THEIA"
        title="Hiring Japanese Marketers"
        dueDate="Jan 24, 2026"
        locations={['Seocho-gu, Seoul +1']}
        jobTypes={['Part-time worker']}
        dDayTag={<Tag color={'outlined_blue'}>D-5</Tag>}
        scrapAction={
          <ScrapButton
            isScraped={isScraped}
            onClick={() => setIsScraped((prev) => !prev)}
          />
        }
        onClick={() => {
          window.location.href = 'https://www.naver.com/';
        }}
      />
    </div>
  );
};

export default DashboardPage;

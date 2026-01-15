import { useState } from 'react';
import { Tag } from '@kds/ui';

import ScrapButton from '@features/phase/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/phase';

const DashboardPage = () => {
  const [isScraped, setIsScraped] = useState(true);
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <BookmarkedJobCard
        companyName="THEIA"
        title="Hiring Japanese Marketers"
        dueDate="Jan 24, 2026"
        dDayTag={<Tag color={'outlined_blue'}>D-5</Tag>}
        locations={['Seocho-gu, Seoul', 'Gangwon Goseong-gun']}
        jobTypes={['Part-time worker', 'Regular worker']}
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
      <BookmarkedJobCard
        imageUrl=""
        companyName="골드윈행정사무소"
        title="Company 291 - Salary: 2 people blabla"
        dueDate="Jan 24, 2026"
        dDayTag={<Tag color={'outlined_blue'}>D-5</Tag>}
        locations={['Seocho-gu, Seoul', 'Gangwon Goseong-gun']}
        jobTypes={['Part-time worker', 'Regular worker']}
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

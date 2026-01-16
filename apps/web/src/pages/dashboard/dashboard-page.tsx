import { useState } from 'react';
import { Tag } from '@kds/ui';

import ScrapButton from '@features/job/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/job';

const MOCK_JOBS = [
  {
    id: 1,
    companyName: 'THEIA',
    title: 'Hiring Japanese Marketers',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Part-time worker', 'Regular worker'],
    isScraped: true,
    dDay: 5,
  },
  {
    id: 2,
    companyName: '골드윈행정사무소',
    title: 'Company 291 - Salary: 2 people blabla',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Part-time worker', 'Regular worker'],
    isScraped: false,
    dDay: 2,
  },
];

const DashboardPage = () => {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const handleToggleScrap = (jobId: number) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, isScraped: !job.isScraped } : job,
      ),
    );
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {jobs.map((job) => (
        <BookmarkedJobCard
          key={job.id}
          companyName={job.companyName}
          title={job.title}
          dueDate={job.dueDate}
          dDayTag={<Tag color={'outlined_blue'}>D-5</Tag>}
          locations={job.locations}
          jobTypes={job.jobTypes}
          scrapAction={
            <ScrapButton
              isScraped={job.isScraped}
              onClick={() => handleToggleScrap(job.id)}
            />
          }
          onClick={() => {
            window.location.href = 'https://www.naver.com/';
            handleToggleScrap(job.id);
          }}
        />
      ))}
    </div>
  );
};

export default DashboardPage;

import { useState } from 'react';

import ScrapButton from '@features/job/ui/scrap-button/scrap-button';
import { BookmarkedJobCard } from '@entities/job';
import { getJobTagColor } from '@shared/utils/job-tag-color';

const MOCK_JOBS = [
  {
    id: 1,
    companyName: 'THEIA',
    title: 'Hiring Japanese MarketersMarketersMarketersMarketerMarketerss',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Contract worker', 'Regular worker'],
    isScraped: false,
    imageUrl: '',
    dDay: 5,
  },
  {
    id: 2,
    companyName: '골드윈행정사무소',
    title: 'Company 291 - Salary: 2 people blabla',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Temporary worker', 'Contract worker'],
    isScraped: false,
    imageUrl: '',
    dDay: 2,
  },
  {
    id: 3,
    companyName: '골드윈행정사무소',
    title: 'Company 291 - Salary: 2 people blabla',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Freelancer'],
    isScraped: false,
    imageUrl: '',
    dDay: 2,
  },
  {
    id: 4,
    companyName: '골드윈행정사무소',
    title: 'Company 291 - Salary: 2 people blabla',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Part-time job'],
    isScraped: false,
    imageUrl: '',
    dDay: 2,
  },
  {
    id: 5,
    companyName: '골드윈행정사무소',
    title: 'Company 291 - Salary: 2 people blabla',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Intern'],
    isScraped: false,
    imageUrl: '',
    dDay: 2,
  },
  {
    id: 6,
    companyName: '골드윈행정사무소',
    title: 'Company 291 - Salary: 2 people blabla',
    dueDate: 'Jan 24, 2026',
    locations: ['Seocho-gu, Seoul', 'Gangwon Goseong-gun'],
    jobTypes: ['Full-time'],
    isScraped: false,
    imageUrl: '',
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
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {jobs.map((job) => {
        const mainJobType = job.jobTypes?.[0];
        const tagColor = getJobTagColor(mainJobType);

        return (
          <BookmarkedJobCard
            key={job.id}
            companyName={job.companyName}
            title={job.title}
            dueDate={job.dueDate}
            dDay={job.dDay}
            locations={job.locations}
            jobTypes={job.jobTypes}
            jobTagColor={tagColor}
            scrapAction={
              <ScrapButton
                isScraped={job.isScraped}
                onClick={() => handleToggleScrap(job.id)}
              />
            }
            onClick={() => {
              window.location.href = job.imageUrl;
              handleToggleScrap(job.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default DashboardPage;

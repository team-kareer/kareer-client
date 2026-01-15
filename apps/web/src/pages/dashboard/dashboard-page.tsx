import { VisaStatusBox } from '@shared/ui';

const DashboardPage = () => {
  return (
    <div>
      <VisaStatusBox isCurrent={true} goal="D-2 Student" percent={79} />
      <VisaStatusBox isCurrent={false} goal="D-10 Job Seeker" percent={32} />
    </div>
  );
};

export default DashboardPage;

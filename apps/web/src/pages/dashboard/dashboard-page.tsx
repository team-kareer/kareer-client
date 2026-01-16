import { VisaStatusBox } from '@shared/ui';

const DashboardPage = () => {
  return (
    <div>
      <VisaStatusBox isCurrent={true} goal="D-2 Student" total={23} done={3} />
      <VisaStatusBox
        isCurrent={false}
        goal="D-10 Job Seeker"
        total={34}
        done={20}
      />
    </div>
  );
};

export default DashboardPage;

import { VisaEligibility } from '@widgets/fit-analysis';

const DashboardPage = () => {
  return (
    <div>
      <VisaEligibility visa={'D-2 Student'} />
      <VisaEligibility visa={'D-10 Job Seeker'} />
    </div>
  );
};

export default DashboardPage;

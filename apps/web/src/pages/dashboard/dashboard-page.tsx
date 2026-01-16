import { VisaEligibility } from '@widgets/fit-analysis';

const DashboardPage = () => {
  return (
    <div>
      <VisaEligibility visa={'D-2 Student'} date="Dec 10. 2026" />
      <VisaEligibility visa={'D-10 Job Seeker'} date="Dec 10. 2026" />
    </div>
  );
};

export default DashboardPage;

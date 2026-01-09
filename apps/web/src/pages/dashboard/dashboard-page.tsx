import { SectionHeader } from '@kds/ui';

const DashboardPage = () => {
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <SectionHeader title="My Page" />
      </div>
      <div style={{ padding: '2rem' }}>
        <SectionHeader
          title="Career Roadmap"
          subtitle="Track your progress toward key career milestones"
        />
      </div>
    </>
  );
};

export default DashboardPage;

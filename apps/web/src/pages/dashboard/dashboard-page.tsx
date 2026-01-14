import { Button, Tab, useTabContext } from '@kds/ui';

const DashboardTabButtons = () => {
  const { setSelectedTab } = useTabContext();

  return (
    <>
      Tab.List 부분
      <Button
        preset="medium_primary"
        onClick={() => setSelectedTab('overview')}
      >
        Overview
      </Button>
      <Button preset="medium_primary" onClick={() => setSelectedTab('stats')}>
        Stats
      </Button>
    </>
  );
};

const DashboardPage = () => {
  return (
    <Tab.Container
      initialValue="overview"
      style={{ padding: '10rem', border: '1px solid gray' }}
    >
      컨테이너
      <Tab.List
        style={{
          display: 'flex',
          gap: '1.2rem',
          padding: '1.2rem',
          margin: '1.2rem',
          border: '1px solid red',
        }}
      >
        <DashboardTabButtons />
      </Tab.List>
      <div
        style={{
          padding: '1.2rem',
          margin: '1.2rem',
          border: '1px solid blue',
        }}
      >
        <Tab.Panel tab="overview">Overview content</Tab.Panel>
        <Tab.Panel tab="stats">Stats content</Tab.Panel>
      </div>
    </Tab.Container>
  );
};

export default DashboardPage;

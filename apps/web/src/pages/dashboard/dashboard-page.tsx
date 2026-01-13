import ActionRequired from '@widgets/roadmap/ui/action-required/action-required';

const mockData = {
  Visa: {
    count: 1,
    list: [
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
    ],
  },
  Career: {
    count: 2,
    list: [
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
    ],
  },
  Done: {
    count: 1,
    list: [
      {
        title: 'Prepare internship log',
        subTitle: 'Document all work experience during internship period',
        dueDate: '2026-01-13',
      },
    ],
  },
  totalCount: 4,
};

const DashboardPage = () => {
  return (
    <div style={{ width: '450px', height: '100vh', overflow: 'auto' }}>
      <ActionRequired data={mockData} />
    </div>
  );
};

export default DashboardPage;

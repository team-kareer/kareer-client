import AiGuide from '@widgets/roadmap/ui/ai-guide/ai-guide';

const MOCK_SERVER_RESPONSE = {
  importance:
    'Explain the impact so the reader understands why this step cannot be skipped.',
  guideline: 'List the exact steps and provide a clear example to follow.',
  commonMistakes:
    'Call out frequent errors and how to avoid them in the workflow.',
} as const;

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AiGuide
        importance={MOCK_SERVER_RESPONSE.importance}
        guideline={MOCK_SERVER_RESPONSE.guideline}
        commonMistakes={MOCK_SERVER_RESPONSE.commonMistakes}
      />
    </div>
  );
};

export default DashboardPage;

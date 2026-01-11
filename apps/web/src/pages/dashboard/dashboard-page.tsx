import { BangCircleIcon, InfoCircleIcon, SuccessCircleIcon } from '@kds/icons';

import AiGuideCard from '@entities/phase/ui/ai-guide-card';

const DashboardPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AiGuideCard
        icon={<InfoCircleIcon width={24} height={24} />}
        title="Why this matters"
        description="This is placeholder text for Required Action section."
      />
      <AiGuideCard
        icon={<SuccessCircleIcon width={24} height={24} />}
        title="How to do it properly"
        description="This is placeholder text for Next Steps section."
      />
      <AiGuideCard
        icon={<BangCircleIcon width={24} height={24} />}
        title="Common mistakes"
        description="This is placeholder text for Required Action section."
      />
    </div>
  );
};

export default DashboardPage;

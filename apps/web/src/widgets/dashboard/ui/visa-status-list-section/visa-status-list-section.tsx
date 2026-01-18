import { Section } from '@shared/ui';

import VisaStatusList from '../visa-status-list/visa-status-list'; // 배럴 적용

const VisaStatusListSection = () => {
  return (
    <Section title="My Status">
      <VisaStatusList />
    </Section>
  );
};

export default VisaStatusListSection;

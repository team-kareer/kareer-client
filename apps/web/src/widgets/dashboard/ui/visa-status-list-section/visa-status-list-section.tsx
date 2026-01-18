import { Section } from '@shared/ui';

import VisaStatusList from '../visa-status-list/visa-status-list';

const VisaStatusListSection = () => {
  return (
    <Section title="My Status">
      <VisaStatusList />
    </Section>
  );
};

export default VisaStatusListSection;

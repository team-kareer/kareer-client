import { useTranslation } from 'react-i18next';

import { VisaEligibility } from '@widgets/fit-analysis';
import { Section } from '@shared/ui';

const VisaEligibilitySection = () => {
  const { t } = useTranslation('fitAnalysis');

  return (
    <Section title={t('visaEligibility.section.title')}>
      <VisaEligibility />
    </Section>
  );
};

export default VisaEligibilitySection;

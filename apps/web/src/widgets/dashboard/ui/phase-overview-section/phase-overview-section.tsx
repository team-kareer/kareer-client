import { useTranslation } from 'react-i18next';

import { PhaseOverview } from '@widgets/dashboard';
import { Section } from '@shared/ui';

import * as styles from './phase-overview-section.css';

const PhaseOverviewSection = () => {
  const { t } = useTranslation('dashboard');

  return (
    <main className={styles.container}>
      <Section
        title={t('phaseOverview.section.title')}
        subtitle={t('phaseOverview.section.subtitle')}
      >
        <PhaseOverview />
      </Section>
    </main>
  );
};

export default PhaseOverviewSection;

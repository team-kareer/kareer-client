import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AccordionList, PhaseOverview } from '@widgets/roadmap';
import { Section } from '@shared/ui';

import * as styles from './roadmap-section.css';

const RoadmapSection = () => {
  const { t } = useTranslation('roadmap');
  const [clicked, setClicked] = useState(0);

  return (
    <div className={styles.container}>
      <Section
        title={t('overview.section.title')}
        subtitle={t('overview.section.subtitle')}
      >
        <PhaseOverview clickedPhase={clicked} setClickedPhase={setClicked} />
      </Section>
      <Section
        title={t('phaseList.section.title')}
        subtitle={t('phaseList.section.subtitle')}
      >
        <AccordionList clickedPhase={clicked} />
      </Section>
    </div>
  );
};

export default RoadmapSection;

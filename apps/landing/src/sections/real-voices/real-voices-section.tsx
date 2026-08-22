import { useTranslation } from 'react-i18next';

import { LANDING_SECTION_ID } from '@shared/constants/section-id';

import VoiceCard from './voice-card/voice-card';

import * as styles from './real-voices-section.css';

const VOICE_IDS = ['trade', 'resume', 'wechat'] as const;

const RealVoicesSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section id={LANDING_SECTION_ID.reviews} className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.label}>{t('voices.label')}</p>
        <h2 className={styles.title}>{t('voices.title')}</h2>

        <div className={styles.voices}>
          {VOICE_IDS.map((id) => (
            <VoiceCard
              key={id}
              quote={t(`voices.items.${id}.quote`)}
              meta={t(`voices.items.${id}.meta`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealVoicesSection;

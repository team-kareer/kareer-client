import { useTranslation } from 'react-i18next';

import { LANDING_SECTION_ID } from '@widgets/landing/constants/section-id';

import EarlyAccessForm from '../early-access-form/early-access-form';

import * as styles from './early-access-section.css';

const EarlyAccessSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section id={LANDING_SECTION_ID.earlyAccess} className={styles.container}>
      <div className={styles.badge}>{t('earlyAccess.badge')}</div>
      <h2 className={styles.title}>{t('earlyAccess.title')}</h2>
      <p className={styles.description}>{t('earlyAccess.description')}</p>

      <EarlyAccessForm
        variant="final"
        placeholder={t('earlyAccess.email.placeholder')}
        buttonLabel={t('earlyAccess.email.cta')}
        note={t('earlyAccess.email.note')}
      />
    </section>
  );
};

export default EarlyAccessSection;

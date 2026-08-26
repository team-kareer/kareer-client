import Badge from '@components/badge/badge';
import EarlyAccessForm from '@components/early-access-form/early-access-form';
import { LANDING_SECTION_ID } from '@constants/section-id';
import { SparkleIcon } from '@kds/icons';
import { useTranslation } from 'react-i18next';

import * as styles from './early-access-section.css';

const EarlyAccessSection = () => {
  const { t } = useTranslation('landing');

  return (
    <section id={LANDING_SECTION_ID.earlyAccess} className={styles.container}>
      <Badge
        icon={<SparkleIcon width={16} height={16} />}
        className={styles.badgeSpacing}
      >
        {t('earlyAccess.badge')}
      </Badge>
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

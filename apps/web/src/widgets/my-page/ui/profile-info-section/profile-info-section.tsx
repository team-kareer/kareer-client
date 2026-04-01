import { useTranslation } from 'react-i18next';

import { ProfileInfo } from '@widgets/my-page';
import { Section } from '@shared/ui';

import * as styles from './profile-info-section.css';

const ProfileInfoSection = () => {
  const { t } = useTranslation('myPage');

  return (
    <div className={styles.container}>
      <Section
        title={t('profile.section.title')}
        subtitle={t('profile.section.subtitle')}
      >
        <ProfileInfo />
      </Section>
    </div>
  );
};

export default ProfileInfoSection;

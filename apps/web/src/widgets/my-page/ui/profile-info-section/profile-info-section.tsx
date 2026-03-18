import { ProfileInfo } from '@widgets/my-page';
import { Section } from '@shared/ui';

import * as styles from './profile-info-section.css';

const ProfileInfoSection = () => {
  return (
    <div className={styles.container}>
      <Section title="About Me" subtitle="Here’s some information about me">
        <ProfileInfo />
      </Section>
    </div>
  );
};

export default ProfileInfoSection;

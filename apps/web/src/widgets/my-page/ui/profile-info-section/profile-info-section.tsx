import { ProfileInfo } from '@widgets/my-page';
import { Section } from '@shared/ui';

const ProfileInfoSection = () => {
  return (
    <Section title="About Me" subtitle="Here’s some information about me">
      <ProfileInfo />
    </Section>
  );
};

export default ProfileInfoSection;

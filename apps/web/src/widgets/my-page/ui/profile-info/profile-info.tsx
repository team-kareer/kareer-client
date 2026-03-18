import ProfileField from '../profile-field/profile-field';

import * as styles from './profile-info.css';

const PROFILE_FIELD_SECTIONS = [
  [{ label: 'Target Job', key: 'targetJob' }],
  [
    { label: 'Date of Birth', key: 'dateOfBirth' },
    { label: 'Country', key: 'country' },
  ],
  [
    { label: 'Degree', key: 'degree' },
    { label: 'University', key: 'university' },
    { label: 'Major', key: 'major' },
    { label: 'Secondary Major', key: 'secondaryMajor' },
  ],
  [
    { label: 'Current Visa Type', key: 'visaType' },
    { label: 'Current Visa Start Date', key: 'visaStartDate' },
  ],
  [
    { label: 'TOPIK / KIIP Level', key: 'topikLevel' },
    { label: 'English Level', key: 'englishLevel' },
  ],
] as const;

const ProfileInfo = () => {
  return (
    <section className={styles.container}>
      {PROFILE_FIELD_SECTIONS.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.map(({ label, key }) => (
            <ProfileField key={key} label={label} value="훈진" />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ProfileInfo;

import { useQuery } from '@tanstack/react-query';

import { ProfileField } from '@widgets/my-page';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';

import * as styles from './profile-info.css';

const PROFILE_FIELD_SECTIONS = [
  [{ label: 'Target Job', key: 'targetJob' }],
  [
    { label: 'Date of Birth', key: 'birthDate' },
    { label: 'Country', key: 'country' },
  ],
  [
    { label: 'Degree', key: 'degree' },
    { label: 'University', key: 'university' },
    { label: 'Major', key: 'primaryMajor' },
    { label: 'Secondary Major', key: 'secondaryMajor' },
  ],
  [
    { label: 'Current Visa Type', key: 'visaType' },
    { label: 'Current Visa Start Date', key: 'visaExpiredAt' },
  ],
  [
    { label: 'TOPIK / KIIP Level', key: 'languageLevel' },
    { label: 'English Level', key: 'englishLevel' },
  ],
] as const;

const ProfileInfo = () => {
  const { data } = useQuery({ ...USER_QUERY_OPTIONS.GET_MY_PAGE() });
  return (
    <section className={styles.container}>
      {PROFILE_FIELD_SECTIONS.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.map(({ label, key }) => (
            <ProfileField key={key} label={label} value={data?.[key] ?? ''} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ProfileInfo;

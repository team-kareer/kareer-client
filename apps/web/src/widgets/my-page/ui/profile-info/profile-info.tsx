import { useQuery } from '@tanstack/react-query';

import { PROFILE_FIELD_SECTIONS } from '@widgets/my-page/constants/profile-field-sections';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { ProfileField } from '@entities/user/ui';

import * as styles from './profile-info.css';

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

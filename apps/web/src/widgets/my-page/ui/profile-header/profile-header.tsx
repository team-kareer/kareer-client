import { Avatar } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';

import { LanguageSelector } from '@features/onboarding/ui';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';

import * as styles from './profile-header.css';

const ProfileHeader = () => {
  const { data } = useQuery({
    ...USER_QUERY_OPTIONS.GET_USER_INFO(),
  });

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Avatar profileUrl={data?.profileImageUrl} use="mypage" />
        <h1 className={styles.title}>{data?.name}</h1>
      </div>
      <LanguageSelector />
    </div>
  );
};

export default ProfileHeader;

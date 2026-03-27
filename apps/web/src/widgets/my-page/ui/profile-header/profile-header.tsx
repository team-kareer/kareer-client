import { useEffect } from 'react';
import { Avatar } from '@kds/ui';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from '@features/onboarding/ui';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';

import * as styles from './profile-header.css';

const ProfileHeader = () => {
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    ...USER_QUERY_OPTIONS.GET_USER_INFO(),
  });

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ['user'],
    });
  }, [i18n.language, queryClient]);

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

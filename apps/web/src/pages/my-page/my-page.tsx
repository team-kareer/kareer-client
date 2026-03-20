import { useQuery } from '@tanstack/react-query';

import { ProfileHeader, ProfileInfoSection } from '@widgets/my-page';
import { USER_QUERY_OPTIONS } from '@entities/user/queries';
import { PageLoader } from '@shared/ui';

const MyPage = () => {
  const { isPending: isUserInfoPending } = useQuery({
    ...USER_QUERY_OPTIONS.GET_USER_INFO(),
  });
  const { isPending: isMyPagePending } = useQuery({
    ...USER_QUERY_OPTIONS.GET_MY_PAGE(),
  });

  if (isUserInfoPending || isMyPagePending) {
    return <PageLoader text="Please wait a bit..." />;
  }

  return (
    <>
      <ProfileHeader />
      <ProfileInfoSection />
    </>
  );
};

export default MyPage;

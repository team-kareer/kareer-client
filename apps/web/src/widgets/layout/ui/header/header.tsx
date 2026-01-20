import { Avatar } from '@kds/ui';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router';

import { USER_QUERY_OPTIONS } from '@entities/user/queries/queries';
import { ROUTE_PATH } from '@shared/router/path';

import * as styles from './header.css';

const HEADER_LIST = [
  {
    title: 'Your Personalized Career Plan',
    subTitle: 'Built from your visa status, background, and career goals',
    path: ROUTE_PATH.DASHBOARD,
  },
  {
    title: 'Road Map',
    subTitle: 'Your step-by-step path toward career and visa goals',
    path: ROUTE_PATH.ROADMAP,
  },
  {
    title: 'Fit analysis',
    subTitle: 'See what works in your favor — and what to improve',
    path: ROUTE_PATH.FITANALYSIS,
  },
] as const;

const Header = () => {
  // 추후 api response로 대체
  const { data } = useQuery({ ...USER_QUERY_OPTIONS.GET_USER_INFO() });

  const location = useLocation();
  const curHeader = HEADER_LIST.find(
    (header) => header.path === location.pathname,
  );
  const showUsername = curHeader?.path === ROUTE_PATH.DASHBOARD && data?.name;
  const greeting = showUsername ? `, ${data?.name}!` : '';

  return (
    <header className={styles.container}>
      <div key={curHeader?.path} className={styles.left_section}>
        <h1 className={styles.title}>
          {curHeader?.title}
          {greeting}
        </h1>
        <p className={styles.subTitle}>{curHeader?.subTitle}</p>
      </div>

      <Avatar profileUrl={data?.profileImageUrl} size="mini" />
    </header>
  );
};

export default Header;

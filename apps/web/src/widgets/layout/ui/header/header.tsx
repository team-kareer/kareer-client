import { UserProfileIcon } from '@kds/icons';
import { Avatar } from '@kds/ui';
import { useLocation } from 'react-router';

import { ROUTE_PATH } from '@shared/router';

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
  const mockUser = {
    username: 'Yoonseo Bong',
    profileUrl:
      'https://www.biteme.co.kr/blog/wp-content/uploads/2025/04/491b87a0-1913-43ab-92e3-b16c2a1e6f82.jpg',
  };
  const location = useLocation();
  const curHeader = HEADER_LIST.find(
    (header) => header.path === location.pathname,
  );
  const showUsername =
    curHeader?.path === ROUTE_PATH.DASHBOARD && mockUser.username;
  const greeting = showUsername ? `, ${mockUser.username}!` : '';

  return (
    <header className={styles.container}>
      <div key={curHeader?.path} className={styles.left_section}>
        <h1 className={styles.title}>
          {curHeader?.title}
          {greeting}
        </h1>
        <p className={styles.subTitle}>{curHeader?.subTitle}</p>
      </div>

      {mockUser.profileUrl ? (
        <Avatar profileUrl={mockUser.profileUrl} size="mini" />
      ) : (
        <UserProfileIcon />
      )}
    </header>
  );
};

export default Header;

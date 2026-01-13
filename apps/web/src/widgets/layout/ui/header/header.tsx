import { UserProfileIcon } from '@kds/icons';
import { useLocation } from 'react-router';

import { ROUTE_PATH } from '@shared/router';

import * as styles from './header.css';

const TITLE_LIST = [
  {
    title: 'Your Personalized Career Plan',
    subTitle: 'Built from your visa status, background, and career goals.',
    path: ROUTE_PATH.DASHBOARD,
  },
  {
    title: 'Road Map',
    subTitle: 'Here is your career overview!',
    path: ROUTE_PATH.ROADMAP,
  },
  {
    title: 'Fit analysis',
    subTitle: 'Here is your career overview!', // 변경 예정
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
  // const mockUser = {
  //   username: undefined,
  //   profileUrl: undefined,
  // };
  const location = useLocation();

  return (
    <header className={styles.container}>
      {TITLE_LIST.map(({ title, subTitle, path }) => {
        if (location.pathname === path) {
          const showUsername =
            path === ROUTE_PATH.DASHBOARD && mockUser.username;

          return (
            <div key={path} className={styles.left_section}>
              <h1 className={styles.title}>
                {title}
                {showUsername ? `, ${mockUser.username}!` : ''}
              </h1>
              <h2 className={styles.subTitle}>{subTitle}</h2>
            </div>
          );
        }
      })}

      {mockUser.profileUrl ? (
        <img
          src={mockUser.profileUrl}
          alt="사용자 프로필 이미지"
          className={styles.img}
        />
      ) : (
        <UserProfileIcon />
      )}
    </header>
  );
};

export default Header;

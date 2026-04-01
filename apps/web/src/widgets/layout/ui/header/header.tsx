import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { USER_QUERY_OPTIONS } from '@entities/user/queries/queries';
import { ROUTE_PATH } from '@shared/router/path';

import UserMenu from './user-menu/user-menu';

import * as styles from './header.css';

const HEADER_LIST = [
  {
    title: 'layout.header.dashboard.title',
    subTitle: 'layout.header.dashboard.subtitle',
    path: ROUTE_PATH.DASHBOARD,
  },
  {
    title: 'layout.header.roadmap.title',
    subTitle: 'layout.header.roadmap.subtitle',
    path: ROUTE_PATH.ROADMAP,
  },
  {
    title: 'layout.header.fitAnalysis.title',
    subTitle: 'layout.header.fitAnalysis.subtitle',
    path: ROUTE_PATH.FITANALYSIS,
  },
  {
    title: 'layout.header.myPage.title',
    subTitle: 'layout.header.myPage.subtitle',
    path: ROUTE_PATH.MY_PAGE,
  },
] as const;

const Header = () => {
  const { t } = useTranslation('common');
  const { data } = useQuery({ ...USER_QUERY_OPTIONS.GET_USER_INFO() });

  const location = useLocation();
  const curHeader = HEADER_LIST.find(
    (header) => header.path === location.pathname,
  )!;
  const showUsername = curHeader?.path === ROUTE_PATH.DASHBOARD && data?.name;
  const greeting = showUsername ? `, ${data?.name}!` : '';

  return (
    <header className={styles.container}>
      <div key={curHeader?.path} className={styles.left_section}>
        <h1 className={styles.title}>
          {t(curHeader.title)}
          {greeting}
        </h1>
        <p className={styles.subTitle}>{t(curHeader.subTitle)}</p>
      </div>
      <UserMenu
        profileUrl={data?.profileImageUrl}
        name={data?.name}
        email={data?.email}
      />
    </header>
  );
};

export default Header;

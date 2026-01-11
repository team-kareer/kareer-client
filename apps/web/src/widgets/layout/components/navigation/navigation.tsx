import {
  FitAnalysisIcon,
  HomeIcon,
  LogoIcon,
  ProfileIcon,
  RoadmapIcon,
} from '@kds/icons';
import { useLocation, useNavigate } from 'react-router';

import { ROUTE_PATH } from '@shared/router/path';

import IconWrapper from './icon-wrapper/icon-wrapper';

import * as styles from './navigation.css';

const NAVIGATION_ITEMS = [
  { key: 'home', icon: <HomeIcon />, path: ROUTE_PATH.DASHBOARD },
  { key: 'roadmap', icon: <RoadmapIcon />, path: ROUTE_PATH.ROADMAP },
  {
    key: 'analysis',
    icon: <FitAnalysisIcon />,
    path: ROUTE_PATH.ELIGIBILITY,
  },
  { key: 'profile', icon: <ProfileIcon />, path: ROUTE_PATH.MY_PAGE },
] as const;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={styles.container}>
      <button className={styles.logo} type="button">
        <LogoIcon onClick={() => navigate(ROUTE_PATH.DASHBOARD)} />
      </button>
      {NAVIGATION_ITEMS.map(({ key, icon, path }) => (
        <IconWrapper
          key={key}
          icon={icon}
          isActive={location.pathname === path}
          onClick={() => navigate(path)}
        />
      ))}
    </nav>
  );
};

export default Navigation;

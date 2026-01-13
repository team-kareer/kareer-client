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
  { label: 'Home', icon: <HomeIcon />, path: ROUTE_PATH.DASHBOARD },
  { label: 'Road map', icon: <RoadmapIcon />, path: ROUTE_PATH.ROADMAP },
  {
    label: 'Fit analysis',
    icon: <FitAnalysisIcon />,
    path: ROUTE_PATH.FITANALYSIS,
  },
  // { label: 'My page', icon: <ProfileIcon />, path: ROUTE_PATH.MY_PAGE },
] as const;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={styles.container}>
      <a className={styles.logo}>
        <LogoIcon onClick={() => navigate(ROUTE_PATH.DASHBOARD)} />
      </a>
      {NAVIGATION_ITEMS.map(({ label, icon, path }) => (
        <IconWrapper
          key={label}
          icon={icon}
          label={label}
          isActive={location.pathname === path}
          onClick={() => navigate(path)}
        />
      ))}
      <IconWrapper icon={<ProfileIcon />} />
    </nav>
  );
};

export default Navigation;

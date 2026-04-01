import {
  FitAnalysisIcon,
  HomeIcon,
  LogoIcon,
  ProfileIcon,
  RoadmapIcon,
} from '@kds/icons';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';

import { ROUTE_PATH } from '@shared/router/path';

import IconWrapper from './icon-wrapper/icon-wrapper';

import * as styles from './navigation.css';

const NAVIGATION_ITEMS = [
  {
    label: 'home',
    icon: <HomeIcon />,
    path: ROUTE_PATH.DASHBOARD,
  },
  {
    label: 'roadmap',
    icon: <RoadmapIcon />,
    path: ROUTE_PATH.ROADMAP,
  },
  {
    label: 'fitAnalysis',
    icon: <FitAnalysisIcon />,
    path: ROUTE_PATH.FITANALYSIS,
  },
  { label: 'myPage', icon: <ProfileIcon />, path: ROUTE_PATH.MY_PAGE },
] as const;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('navigation');

  return (
    <nav className={styles.container}>
      <a className={styles.logo}>
        <LogoIcon onClick={() => navigate(ROUTE_PATH.DASHBOARD)} />
      </a>
      {NAVIGATION_ITEMS.map(({ label, icon, path }) => (
        <IconWrapper
          key={label}
          icon={icon}
          label={t(label)}
          isActive={path ? location.pathname === path : false}
          onClick={path ? () => navigate(path) : () => {}}
        />
      ))}
    </nav>
  );
};

export default Navigation;

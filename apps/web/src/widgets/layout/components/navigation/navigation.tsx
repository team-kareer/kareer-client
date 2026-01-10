import { useState } from 'react';
import { HomeIcon, RoadmapIcon } from '@kds/icons';

import IconWrapper from './icon-wrapper/icon-wrapper';

import * as styles from './navigation.css';

const Navigation = () => {
  const [activeKey, setActiveKey] = useState<'home' | 'roadmap'>('home');

  return (
    <nav className={styles.container}>
      <IconWrapper
        icon={<HomeIcon />}
        isActive={activeKey === 'home'}
        onClick={() => setActiveKey('home')}
      />
      <IconWrapper
        icon={<RoadmapIcon />}
        isActive={activeKey === 'roadmap'}
        onClick={() => setActiveKey('roadmap')}
      />
    </nav>
  );
};

export default Navigation;

import { ReactNode } from 'react';

import * as styles from './section-header.css';

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className={styles.sectionHeader}>
      <h2 className={styles.titleStyle}>{title}</h2>
      {subtitle && <p className={styles.subtitleStyle}>{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;

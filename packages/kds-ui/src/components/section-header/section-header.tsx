import { ReactNode } from 'react';

import { sectionHeader, subtitleStyle, titleStyle } from './section-header.css';

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className={sectionHeader}>
      <h2 className={titleStyle}>{title}</h2>
      {subtitle && <p className={subtitleStyle}>{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;

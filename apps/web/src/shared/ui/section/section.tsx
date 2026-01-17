import { ReactNode } from 'react';
import { SectionHeader } from '@kds/ui';

import { container } from './section.css';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <section className={container}>
      <SectionHeader title={title} subtitle={subtitle} />
      {children}
    </section>
  );
};

export default Section;

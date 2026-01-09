import { ReactNode } from 'react';

import { tagColor } from './tag.css';

interface TagProps {
  color: keyof typeof tagColor;
  children: ReactNode;
}

const Tag = ({ color, children }: TagProps) => {
  return <span className={tagColor[color]}>{children}</span>;
};

export default Tag;

import { ReactNode } from 'react';

import { tagColor } from './tag.css';

interface TagProps {
  color: keyof typeof tagColor;
  children: ReactNode;
}

const Tag = ({ color, children }: TagProps) => {
  return <div className={tagColor[color]}>{children}</div>;
};

export default Tag;

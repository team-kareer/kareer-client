import { ReactNode } from 'react';

import { tagColor } from './tag.css';

interface TagProps {
  color: keyof typeof tagColor;
  children: ReactNode;
  className?: string;
}

const Tag = ({ color, children, className }: TagProps) => {
  return (
    <span className={`${tagColor[color]} ${className || ''}`}>{children}</span>
  );
};

export default Tag;

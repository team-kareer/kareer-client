import { ButtonHTMLAttributes, ReactNode } from 'react';

import { tagColor } from './tag.css';

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof tagColor;
  children: ReactNode;
}

const Tag = ({ color, disabled = false, children, ...props }: TagProps) => {
  return (
    <button className={tagColor[color]} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Tag;

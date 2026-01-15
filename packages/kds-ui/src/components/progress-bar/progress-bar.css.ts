import { style } from '@vanilla-extract/css';

import { themeVars } from '../../styles';

export const progress = style({
  width: '100%',
  height: '1rem',
  appearance: 'none',
  '::-webkit-progress-bar': {
    backgroundColor: themeVars.color.primary[200],
    borderRadius: '20px',
    overflow: 'hidden',
  },
  '::-webkit-progress-value': {
    backgroundColor: themeVars.color.primary[500],
    borderRadius: '20px',
    transition: 'width 0.5s ease-in-out',
  },
});

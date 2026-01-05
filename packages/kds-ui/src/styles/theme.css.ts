import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { font } from './tokens/font.css';
import { typography } from './tokens/typography.css';

const tokens = {
  color: color,
  typography: typography,
  ...font,
};

export const themeVars = createGlobalTheme(':root', tokens);

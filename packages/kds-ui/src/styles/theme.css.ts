import { createGlobalTheme } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { font } from './tokens/font.css';

const tokens = {
  color: color,
  ...font,
};

export const themeVars = createGlobalTheme(':root', tokens);

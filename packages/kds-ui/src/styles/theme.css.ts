import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { font } from './tokens/font.css';

export const themeVars = createThemeContract({
  color: color,
  ...font,
});

createGlobalTheme(':root', themeVars, {
  color: color,
  ...font,
});

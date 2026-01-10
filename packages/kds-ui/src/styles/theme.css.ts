import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { font } from './tokens/font.css';
import { width } from './tokens/width.css';

const tokens = {
  color,
  ...font,
  width,
};

export const themeVars = createThemeContract(tokens);

createGlobalTheme(':root', themeVars, tokens);

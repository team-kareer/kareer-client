import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { color } from './tokens/color.css';
import { font } from './tokens/font.css';

const tokens = {
  color,
  ...font,
};

export const themeVars = createThemeContract(tokens);

createGlobalTheme(':root', themeVars, tokens);

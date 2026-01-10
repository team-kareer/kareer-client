import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '2rem',
  backgroundColor: themeVars.color.grayscale.white,
  borderBottom: `1px solid ${themeVars.color.grayscale.gray300}`,
});

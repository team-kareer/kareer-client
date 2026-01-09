import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '8.4rem',
  height: '100vh',
  padding: '1rem',
  borderRight: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: themeVars.color.grayscale.white,
});

import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  gap: '1.2rem',
  width: '8.4rem',
  padding: '1rem',
  borderRight: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: themeVars.color.grayscale.white,
});

export const logo = style({
  padding: '2rem',
  cursor: 'pointer',
  backgroundColor: 'transparent',
});

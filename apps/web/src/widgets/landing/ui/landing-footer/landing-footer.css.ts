import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2.8rem 4.8rem',
  borderTop: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
});

export const note = style({
  color: themeVars.color.grayscale.gray500,
  fontSize: '1.1rem',
});

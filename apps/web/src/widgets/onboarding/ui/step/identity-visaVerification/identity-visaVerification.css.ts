import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingBottom: '3.1rem',
});

export const formcontainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const formSection = style({
  display: 'flex',
  gap: '2.3rem',
  marginRight: '6.7rem',
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: themeVars.color.grayscale.gray300,
});

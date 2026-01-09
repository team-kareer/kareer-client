import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'stretch',
  backgroundColor: themeVars.color.grayscale.white,
  boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)',
});

export const contentArea = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  minHeight: 0,
});

export const mainArea = style({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  alignItems: 'stretch',
  minHeight: 0,
});

export const mainPage = style({
  padding: '1.6rem 2rem 0 2rem',
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
});

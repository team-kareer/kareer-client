import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'stretch',
  backgroundColor: themeVars.color.grayscale.white,
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
  paddingRight: '2rem',
  backgroundColor: themeVars.color.grayscale.gray100,
});

export const mainPage = style({
  padding: '1.6rem 0.35rem 0 2rem',
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  scrollbarGutter: 'stable',
});

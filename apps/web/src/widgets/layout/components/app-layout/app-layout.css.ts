import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
});

export const contentArea = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

export const mainArea = style({
  display: 'flex',
  flexDirection: 'row',
});

export const mainContent = style({
  padding: '1.6rem 2rem 0 2rem',
  flex: 1,
});

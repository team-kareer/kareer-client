import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
});

export const contentArea = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const mainArea = style({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
});

export const mainContent = style({
  padding: '1.6rem 2rem 0 2rem',
  flex: 1,
});

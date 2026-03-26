import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '4.8rem',
  minHeight: '100%',
  boxSizing: 'border-box',
});

export const headerContainer = style({
  padding: '0 0 4.2rem 3.2rem',
});

export const contentContainer = style({
  flex: 1,
  paddingLeft: '6.6rem',
});

export const buttonContainer = style({
  display: 'flex',
  gap: '1.6rem',
  paddingLeft: '6.6rem',
  paddingBottom: '4.8rem',
  marginTop: 'auto',
});

export const buttonContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

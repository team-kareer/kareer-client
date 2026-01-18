import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '4.8rem 0rem 4.8rem 6.6rem',
});

export const headerContainer = style({
  paddingBottom: '4.2rem',
});

export const contentContainer = style({
  flex: 1,
});

export const buttonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '6.5rem',
  gap: '1.6rem',
});

export const buttonContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem',
  paddingLeft: '6.6rem',
  paddingTop: '4.8rem',
  paddingBottom: '4.2rem',
});

export const stepItem = style({
  width: '12.8rem',
  flexShrink: 0,
});

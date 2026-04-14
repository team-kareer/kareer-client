import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  overflow: 'hidden',
});

export const start = style({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const end = style({
  flexShrink: 0,
  whiteSpace: 'nowrap',
});

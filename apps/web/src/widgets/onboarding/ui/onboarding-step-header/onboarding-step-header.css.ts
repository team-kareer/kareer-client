import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '5rem',
  gridAutoColumns: '12.8rem',
});

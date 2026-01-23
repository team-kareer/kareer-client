import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(23.4rem, 1fr))',
  gap: '1rem',
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
});

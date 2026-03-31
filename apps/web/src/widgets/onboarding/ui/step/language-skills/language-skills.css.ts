import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.1rem 2.4rem',
  paddingRight: '6.6rem',
});

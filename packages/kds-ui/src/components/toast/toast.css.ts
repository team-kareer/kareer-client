import { style } from '@vanilla-extract/css';

import { themeVars, typography } from '../../styles';
export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  height: '4.4rem',
  padding: '1rem',
  backgroundColor: themeVars.color.grayscale.gray600,

  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
});

export const message = style({
  ...typography.body9_r_14,
  margin: 0,
  color: themeVars.color.grayscale.white,
});

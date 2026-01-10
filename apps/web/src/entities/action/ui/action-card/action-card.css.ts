import { style } from '@vanilla-extract/css';

import { color, typography } from '@kds/ui/styles';

export const actionCard = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem 1.6rem',
  backgroundColor: color.grayscale.white,
});

export const titleStyle = style({
  ...typography.body7_sb_14,
  color: color.grayscale.gray800,
});

export const subTitleStyle = style({
  ...typography.cap3_r_12,
  color: color.grayscale.gray400,
});

export const dateStyle = style({
  ...typography.cap2_m_12,
  color: color.grayscale.gray500,
});

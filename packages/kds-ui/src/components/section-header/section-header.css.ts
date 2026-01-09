import { style } from '@vanilla-extract/css';

import { color } from '../../styles/tokens/color.css';
import { typography } from '../../styles/typography.css';

export const sectionHeader = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.8rem',
});

export const titleStyle = style({
  ...typography.body7_sb_14,
  color: color.grayscale.gray500,
});

export const subtitleStyle = style({
  ...typography.body8_m_14,
  color: color.grayscale.gray400,
});

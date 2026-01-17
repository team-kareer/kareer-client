import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

import { bg_progress_bar } from '@shared/assets';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '1.6rem 2rem',
  border: `1.5px solid ${themeVars.color.primary[300]}`,
  borderRadius: '10px',
  backgroundImage: `url(${bg_progress_bar})`,
  backgroundSize: 'cover',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const left_section = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const guide = style({
  ...typography.body4_sb_16,
  color: themeVars.color.primary[500],
  marginRight: '0.4rem',
});

export const current = style({
  ...typography.body5_m_16,
  color: themeVars.color.grayscale.gray800,
  marginRight: '0.8rem',
});

export const date = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

export const right_section = style({
  display: 'flex',
  gap: '0.8rem',
});

export const percent = style({
  ...typography.sub4_sb_20,
  color: themeVars.color.primary[500],
});

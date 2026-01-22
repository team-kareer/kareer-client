import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '1rem',
  padding: '1.2rem 1.6rem',
  borderRadius: '8px',
  backgroundColor: themeVars.color.grayscale.gray700,
});

export const icon = style({
  flexShrink: 0,
});

export const title = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray100,
});

export const description = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

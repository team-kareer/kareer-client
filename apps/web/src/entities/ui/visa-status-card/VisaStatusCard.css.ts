import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '0.8rem',
  padding: '1.6rem 2rem',
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const statusName = style({
  ...typography.cap1_sb_12,
  color: themeVars.color.grayscale.gray400,
});

export const statusNameActive = style({
  ...typography.cap1_sb_12,
  color: themeVars.color.primary[500],
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const iconWrapper = style({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '2rem',
});

export const textContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  flex: 1,
});

export const title = style({
  ...typography.body4_sb_16,
  color: themeVars.color.grayscale.gray800,
});

export const date = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.2rem 1.6rem',
  gap: '0.8rem',
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.gray100,
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const icon = style({
  backgroundColor: 'transparent',
  padding: 0,
  cursor: 'pointer',
});

export const title = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray800,
});

export const description = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '0.8rem',
  width: '21.3rem',
  height: '18.8rem',
  padding: '1.6rem',
  borderRadius: '20px',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: themeVars.color.grayscale.white,
});

export const iconWrapper = style({
  flexShrink: 0,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const title = style({
  ...typography.body5_m_16,
  color: themeVars.color.grayscale.gray800,
});

export const description = style({
  ...typography.body6_r_16,
  color: themeVars.color.grayscale.gray500,
});

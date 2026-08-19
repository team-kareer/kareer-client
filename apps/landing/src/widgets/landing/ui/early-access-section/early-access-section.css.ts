import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '10rem 4.8rem',
  background: `linear-gradient(180deg, #eff6ff 0%, ${themeVars.color.grayscale.white} 100%)`,
  lineHeight: 1.6,
  textAlign: 'center',
});

export const badge = style({
  ...typography.cap1_sb_12,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '2rem',
  padding: '0.5rem 1.6rem',
  border: `1px solid ${themeVars.color.primary[300]}`,
  borderRadius: '99px',
  color: themeVars.color.primary[500],
  backgroundColor: themeVars.color.primary[100],
  lineHeight: 1.6,
});

export const title = style({
  marginBottom: '1.2rem',
  color: themeVars.color.grayscale.gray800,
  fontSize: '4rem',
  fontWeight: 800,
  letterSpacing: '-0.02em',
  whiteSpace: 'pre-line',
});

export const description = style({
  ...typography.body6_r_16,
  marginBottom: '3.6rem',
  color: themeVars.color.grayscale.gray700,
  lineHeight: 1.7,
  whiteSpace: 'pre-line',
});

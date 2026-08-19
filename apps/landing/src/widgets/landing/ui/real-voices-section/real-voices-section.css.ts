import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '7.2rem 4.8rem',
  backgroundColor: themeVars.color.grayscale.white,
});

export const inner = style({
  maxWidth: '90rem',
  margin: '0 auto',
  textAlign: 'center',
});

export const label = style({
  marginBottom: '1.6rem',
  color: themeVars.color.primary[500],
  fontSize: '1.1rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

export const title = style({
  marginBottom: '4rem',
  color: themeVars.color.grayscale.gray800,
  fontSize: '2.8rem',
  fontWeight: 800,
  letterSpacing: '-0.02em',
});

export const voices = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.6rem',
});

export const card = style({
  padding: '2.4rem 2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '14px',
  backgroundColor: themeVars.color.grayscale.gray100,
  textAlign: 'left',
});

export const icon = style({
  marginBottom: '1.4rem',
  fontSize: '2.4rem',
});

export const quote = style({
  ...typography.body9_r_14,
  marginBottom: '1.6rem',
  color: themeVars.color.grayscale.gray800,
  fontStyle: 'italic',
  lineHeight: 1.75,
});

export const meta = style({
  color: themeVars.color.grayscale.gray500,
  fontSize: '1.1rem',
  fontWeight: 500,
});

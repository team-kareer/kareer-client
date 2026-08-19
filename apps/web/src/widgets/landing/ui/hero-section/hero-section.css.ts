import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '11rem 4.8rem 0',
  textAlign: 'center',
});

export const badge = style({
  ...typography.cap1_sb_12,
  marginBottom: '2.8rem',
  padding: '0.5rem 1.6rem',
  border: `1px solid ${themeVars.color.primary[300]}`,
  borderRadius: '99px',
  color: themeVars.color.primary[500],
  backgroundColor: themeVars.color.primary[100],
});

export const title = style({
  marginBottom: '2rem',
  color: themeVars.color.grayscale.gray800,
  fontSize: '5.8rem',
  fontWeight: 800,
  lineHeight: 1.15,
  letterSpacing: '-0.03em',
});

export const highlight = style({
  position: 'relative',
  display: 'inline-block',
  color: themeVars.color.primary[500],
  '::after': {
    content: '',
    position: 'absolute',
    bottom: '-0.4rem',
    left: 0,
    width: '100%',
    height: '0.4rem',
    borderRadius: '2px',
    backgroundColor: themeVars.color.primary[500],
    opacity: 0.3,
  },
});

export const description = style({
  ...typography.body3_r_18,
  maxWidth: '52rem',
  margin: '0 auto 4.4rem',
  color: themeVars.color.grayscale.gray700,
  lineHeight: 1.75,
  whiteSpace: 'pre-line',
});

export const painPoints = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '70rem',
  marginBottom: '4.8rem',
  gap: '1rem',
});

export const painPoint = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1.1rem 1.6rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '10px',
  color: themeVars.color.grayscale.gray800,
  backgroundColor: themeVars.color.grayscale.gray100,
  fontSize: '1.3rem',
  lineHeight: 1.6,
  transition: 'all 0.2s ease',
  ':hover': {
    borderColor: themeVars.color.primary[300],
    color: themeVars.color.primary[600],
    backgroundColor: themeVars.color.primary[100],
  },
});

export const emoji = style({
  fontSize: '1.6rem',
});

export const solution = style({
  ...typography.body7_sb_14,
  marginTop: '-1.2rem',
  marginBottom: '2.8rem',
  color: themeVars.color.primary[500],
});

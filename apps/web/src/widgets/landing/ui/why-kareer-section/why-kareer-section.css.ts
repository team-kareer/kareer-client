import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  overflow: 'hidden',
  lineHeight: 1.6,
});

export const backgroundImage = style({
  position: 'absolute',
  zIndex: 0,
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 30%',
});

export const overlay = style({
  position: 'absolute',
  zIndex: 1,
  inset: 0,
  backgroundColor: 'rgba(15, 23, 42, 0.72)',
});

export const inner = style({
  position: 'relative',
  zIndex: 2,
  maxWidth: '96rem',
  margin: '0 auto',
  padding: '8.8rem 0',
  textAlign: 'center',
});

export const title = style({
  marginBottom: '1.2rem',
  color: themeVars.color.grayscale.white,
  fontSize: '3.6rem',
  fontWeight: 800,
  letterSpacing: '-0.02em',
});

export const description = style({
  ...typography.body6_r_16,
  marginBottom: '5.2rem',
  color: 'rgba(255, 255, 255, 0.6)',
  lineHeight: 1.6,
});

export const benefits = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.4rem',
});

export const card = style({
  padding: '2.6rem 2.2rem',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '14px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  textAlign: 'left',
  backdropFilter: 'blur(12px)',
});

export const icon = style({
  marginBottom: '1.4rem',
  fontSize: '2.4rem',
});

export const cardTitle = style({
  marginBottom: '0.8rem',
  color: themeVars.color.grayscale.white,
  fontSize: '1.5rem',
  fontWeight: 700,
});

export const cardDescription = style({
  ...typography.cap3_r_12,
  color: 'rgba(255, 255, 255, 0.65)',
  lineHeight: 1.7,
});

export const credit = style({
  marginTop: '3.6rem',
  color: 'rgba(255, 255, 255, 0.35)',
  fontSize: '1.1rem',
  textAlign: 'left',
});

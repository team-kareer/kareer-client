import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '7.2rem 4.8rem',
  textAlign: 'center',
  backgroundColor: '#1A2B4A',
});

export const label = style({
  marginBottom: '4rem',
  color: themeVars.color.grayscale.gray500,
  fontSize: '1.1rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

export const stats = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '70rem',
  margin: '0 auto',
});

export const stat = style({
  flex: 1,
  padding: '2.4rem 3.2rem',
});

export const value = style({
  marginBottom: '0.6rem',
  color: themeVars.color.grayscale.white,
  fontSize: '5.6rem',
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: '-0.03em',
});

export const accent = style({
  color: themeVars.color.primary[500],
});

export const description = style({
  color: themeVars.color.grayscale.gray400,
  fontSize: '1.3rem',
  lineHeight: 1.5,
  whiteSpace: 'pre-line',
});

export const versus = style({
  padding: '0 1.6rem',
  color: themeVars.color.grayscale.gray600,
  fontSize: '1.8rem',
  fontWeight: 700,
});

export const gapSpacing = style({
  marginTop: '2.8rem',
});

import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '10rem 4.8rem',
  background: `linear-gradient(180deg, #eff6ff 0%, ${themeVars.color.grayscale.white} 100%)`,
  lineHeight: 1.6,
  textAlign: 'center',
});

export const badge = style({
  display: 'inline-block',
  marginBottom: '2rem',
  padding: '0.5rem 1.6rem',
  border: '1px solid #fde68a',
  borderRadius: '99px',
  color: '#92400e',
  backgroundColor: '#fef3c7',
  fontSize: '1.2rem',
  fontWeight: 600,
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
  marginBottom: '3.6rem',
  color: themeVars.color.grayscale.gray700,
  fontSize: '1.6rem',
  lineHeight: 1.7,
  whiteSpace: 'pre-line',
});

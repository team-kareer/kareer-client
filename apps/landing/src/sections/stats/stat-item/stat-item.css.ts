import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

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

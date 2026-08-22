import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '7.2rem 4.8rem',
  textAlign: 'center',
  backgroundColor: '#1A2B4A',
});

export const label = style({
  ...typography.cap1_sb_12,
  marginBottom: '4rem',
  color: themeVars.color.grayscale.gray500,
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

export const versus = style({
  ...typography.body1_sb_18,
  padding: '0 1.6rem',
  color: themeVars.color.grayscale.gray600,
});

export const gapSpacing = style({
  marginTop: '2.8rem',
});

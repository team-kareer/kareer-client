import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
});

export const lottie = style({
  width: '10rem',
  height: '10rem',
});

export const text = style({
  color: themeVars.color.grayscale.gray400,
  ...typography.sub5_m_20,
});

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  paddingTop: '1rem',
  borderTop: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const toggleButton = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '0.4rem 0',
});

export const checkIcon = style({
  flexShrink: 0,
});

export const label = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray700,
  textAlign: 'left',
  marginLeft: '0.4rem',
});

export const count = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
  flexShrink: 0,
  marginLeft: '0.6rem',
});

export const chevron = style({
  flexShrink: 0,
  marginLeft: 'auto',
  color: themeVars.color.grayscale.gray400,
});

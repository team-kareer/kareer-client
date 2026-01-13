import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flex: 1,
  width: '100%',
  height: '100%',
});

export const introSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.9rem',
  padding: '12.7rem 8.4rem',
  width: '55rem',

  borderRight: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: themeVars.color.grayscale.white,
});

export const logoWrapper = style({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
});

export const text = style({
  ...typography.head4_sb_24,
  color: themeVars.color.grayscale.gray500,
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  width: '38.2rem',
});

export const logoIcon = style({
  padding: '1rem',
  boxSizing: 'content-box',
});

export const stepFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
  padding: '4.8rem 6.6rem',
  backgroundColor: themeVars.color.grayscale.gray200,
});

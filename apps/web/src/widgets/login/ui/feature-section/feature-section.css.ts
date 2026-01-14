import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginLeft: '8rem',
});

export const title = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
});

export const cardWrapper = style({
  display: 'flex',
  gap: '1.6rem',
});

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const profileFieldHeader = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray800,
});

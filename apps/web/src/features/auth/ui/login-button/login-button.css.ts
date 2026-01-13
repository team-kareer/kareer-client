import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const text = style({
  ...typography.body4_sb_16,
  color: themeVars.color.grayscale.white,
});

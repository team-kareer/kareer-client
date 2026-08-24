import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const button = style({
  ...typography.body7_sb_14,

  color: themeVars.color.primary[400],
  whiteSpace: 'nowrap',
});

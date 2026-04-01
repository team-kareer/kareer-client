import { themeVars, typography } from '@kds/ui/styles';
import { recipe } from '@vanilla-extract/recipes';

export const textCountRecipe = recipe({
  base: {
    ...typography.cap2_m_12,
    color: themeVars.color.grayscale.gray500,
  },

  variants: {
    error: {
      true: {
        color: themeVars.color.pastel.kared_500,
      },
    },
  },
});

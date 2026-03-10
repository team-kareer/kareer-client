import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const textFieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'flex-end',
});

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

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const textFieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'flex-end',
});

export const textFieldRecipe = recipe({
  base: {
    width: '100%',
    height: '19.2rem',
    padding: '2rem',
    ...typography.body9_r_14,
    border: `1px solid ${themeVars.color.grayscale.gray300}`,
    borderRadius: '10px',
    resize: 'none',

    '::placeholder': {
      color: themeVars.color.grayscale.gray400,
    },

    ':focus': {
      outline: 'none',
      borderColor: themeVars.color.primary[500],
    },
  },

  variants: {
    error: {
      true: {
        borderColor: themeVars.color.pastel.kared_500,

        ':focus': {
          borderColor: themeVars.color.pastel.kared_500,
        },
      },
    },
  },
});

export const textCountRecipe = recipe({
  base: {
    ...typography.cap2_m_12,
  },

  variants: {
    error: {
      true: {
        color: themeVars.color.pastel.kared_500,
      },
      false: {
        color: themeVars.color.grayscale.gray500,
      },
    },
  },
});

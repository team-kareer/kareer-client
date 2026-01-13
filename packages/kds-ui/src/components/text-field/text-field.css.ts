import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';

import { typography } from '../../styles';

import { color } from '../../styles/tokens/color.css';

export type TextFieldRecipe = NonNullable<
  RecipeVariants<typeof textFieldRecipe>
>;
export type textCountRecipe = NonNullable<
  RecipeVariants<typeof textCountRecipe>
>;

export const textFieldContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '69.6rem',
    position: 'relative',
  },
});

export const textFieldRecipe = recipe({
  base: {
    width: '100%',
    height: '19.2rem',
    padding: '2rem',
    ...typography.body9_r_14,
    border: `1px solid ${color.grayscale.gray300}`,
    borderRadius: '10px',
    resize: 'none',

    '::placeholder': {
      color: color.grayscale.gray400,
    },

    ':focus': {
      outline: 'none',
      borderColor: color.primary[500],
    },
  },

  variants: {
    error: {
      true: {
        borderColor: color.pastel.kared_500,

        ':focus': {
          borderColor: color.pastel.kared_500,
        },
      },
    },
  },
});

export const textCountRecipe = recipe({
  base: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '0.8rem',
    ...typography.cap2_m_12,
  },

  variants: {
    error: {
      true: {
        color: color.pastel.kared_500,
      },
      false: {
        color: color.grayscale.gray500,
      },
    },
  },
});

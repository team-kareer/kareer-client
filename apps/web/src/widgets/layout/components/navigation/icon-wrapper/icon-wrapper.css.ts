import { themeVars } from '@kds/ui/styles';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {
    color: themeVars.color.grayscale.gray900,
    padding: '2rem',
    cursor: 'pointer',
    backgroundColor: themeVars.color.grayscale.white,
    borderRadius: '20px',
    transition: 'background-color 500ms ease, color 200ms ease',

    selectors: {
      '&:hover': {
        backgroundColor: themeVars.color.grayscale.gray200,
      },
      '&:active': {
        backgroundColor: themeVars.color.grayscale.gray400,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.primary[500],
      },
      false: {},
    },
  },
});

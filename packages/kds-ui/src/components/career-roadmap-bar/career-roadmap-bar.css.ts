import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars, typography } from '../../styles';

export const container = style({
  width: '22rem',
  padding: '1rem 0',
  position: 'relative',
});

export const line = recipe({
  base: {
    width: '100%',
    height: '0.4rem',
    borderRadius: '100px',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: themeVars.color.primary[500],
      },
      false: {
        backgroundColor: themeVars.color.primary[200],
      },
    },
  },
});

export const circle = recipe({
  base: {
    ...typography.body7_sb_14,
    width: '2.4rem',
    height: '2.4rem',
    border: `2px solid transparent`,
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: themeVars.color.primary[500],
        color: themeVars.color.grayscale.white,
      },
      false: {
        backgroundColor: themeVars.color.primary[100],
        color: themeVars.color.primary[400],
        borderColor: themeVars.color.primary[200],
      },
    },
  },
});

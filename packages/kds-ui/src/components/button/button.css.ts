import { recipe } from '@vanilla-extract/recipes';

import { themeVars, typography } from '../../styles';

export const button = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    border: '1px solid transparent',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      mini: {
        ...typography.cap1_sb_12,
        padding: '0.7rem 0.8rem',
        borderRadius: '20px',
      },
      small: {
        ...typography.body7_sb_14,
        padding: '0.75rem 1.2rem',
      },
      medium: {
        ...typography.body7_sb_14,
        padding: '1.15rem 1.2rem',
      },
      large: {
        ...typography.body4_sb_16,
        padding: '1.55rem 1.6rem',
      },
      text: {
        ...typography.body7_sb_14,
        padding: '0.65rem 0.8rem',
      },
    },
    color: {
      primary: {
        color: themeVars.color.grayscale.white,
        backgroundColor: themeVars.color.primary[500],
        ':hover': {
          backgroundColor: themeVars.color.primary[700],
        },
        ':active': {
          backgroundColor: themeVars.color.primary[900],
        },
        ':disabled': {
          color: themeVars.color.grayscale.gray400,
          backgroundColor: themeVars.color.grayscale.gray100,
        },
      },
      secondary: {
        color: themeVars.color.primary[500],
        backgroundColor: themeVars.color.primary[100],
        ':hover': {
          borderColor: themeVars.color.primary[500],
        },
        ':active': {
          color: themeVars.color.primary[600],
          borderColor: themeVars.color.primary[600],
          backgroundColor: themeVars.color.primary[300],
        },
      },
      outlined: {
        color: themeVars.color.primary[500],
        borderColor: themeVars.color.grayscale.gray300,
        backgroundColor: themeVars.color.grayscale.white,
        ':hover': {
          color: themeVars.color.primary[600],
          borderColor: themeVars.color.grayscale.gray300,
          backgroundColor: themeVars.color.grayscale.gray200,
        },
        ':active': {
          color: themeVars.color.primary[700],
          borderColor: themeVars.color.grayscale.gray400,
          backgroundColor: themeVars.color.grayscale.gray300,
        },
        ':disabled': {
          color: themeVars.color.grayscale.gray400,
          borderColor: themeVars.color.grayscale.gray300,
          backgroundColor: themeVars.color.grayscale.gray100,
        },
      },
      ghost: {
        color: themeVars.color.primary[500],
        backgroundColor: themeVars.color.grayscale.white,
        ':hover': {
          color: themeVars.color.primary[600],
          backgroundColor: themeVars.color.grayscale.gray200,
        },
        ':active': {
          color: themeVars.color.primary[700],
          backgroundColor: themeVars.color.grayscale.gray300,
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: 'mini',
        color: 'outlined',
      },
      style: {
        color: themeVars.color.grayscale.gray800,
        borderColor: themeVars.color.grayscale.gray300,
        backgroundColor: themeVars.color.grayscale.white,
        ':hover': {
          color: themeVars.color.grayscale.gray700,
          borderColor: themeVars.color.grayscale.gray200,
          backgroundColor: themeVars.color.grayscale.gray100,
        },
        ':active': {
          color: themeVars.color.grayscale.gray800,
          borderColor: themeVars.color.grayscale.gray300,
          backgroundColor: themeVars.color.grayscale.gray200,
        },
      },
    },
  ],
});

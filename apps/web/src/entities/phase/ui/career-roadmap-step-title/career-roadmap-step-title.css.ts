import { themeVars, typography } from '@kds/ui/styles';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.2rem 1.6rem',
    border: '1px solid',
    borderRadius: '8px',
    backgroundColor: themeVars.color.grayscale.white,
  },
  variants: {
    isActive: {
      true: {
        borderColor: themeVars.color.primary[500],
        ':hover': {
          backgroundColor: themeVars.color.primary[100],
        },
        ':active': {
          borderColor: themeVars.color.primary[400],
          backgroundColor: themeVars.color.primary[200],
        },
      },
      false: {
        borderColor: themeVars.color.primary[200],
        ':hover': {
          borderColor: themeVars.color.primary[300],
          backgroundColor: themeVars.color.primary[100],
        },
        ':active': {
          borderColor: themeVars.color.primary[400],
          backgroundColor: themeVars.color.primary[200],
        },
      },
    },
  },
});

export const title = recipe({
  base: {
    ...typography.body7_sb_14,
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.primary[500],
      },
      false: {
        color: themeVars.color.primary[400],
        ':active': {
          color: themeVars.color.primary[500],
        },
      },
    },
  },
});

export const time = recipe({
  base: {
    ...typography.cap2_m_12,
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.primary[400],
      },
      false: {
        color: themeVars.color.primary[300],
        ':active': {
          color: themeVars.color.primary[400],
        },
      },
    },
  },
});

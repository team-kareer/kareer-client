import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const statusColorVariants = {
  'In Progress': {
    color: themeVars.color.grayscale.gray600,
  },
  Next: {
    color: themeVars.color.grayscale.gray400,
  },
  Later: {
    color: themeVars.color.grayscale.gray400,
  },
  Completed: {
    color: themeVars.color.grayscale.gray400,
  },
} as const;

export const container = style({
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
});

export const stepNumber = recipe({
  base: {
    ...typography.cap2_m_12,
    marginBottom: '0.4rem',
  },
  variants: {
    status: statusColorVariants,
  },
});

export const title = recipe({
  base: {
    ...typography.body9_r_14,
    marginBottom: '0.8rem',
  },
  variants: {
    status: {
      ...statusColorVariants,
      'In Progress': {
        ...typography.body7_sb_14,
        color: themeVars.color.grayscale.gray800,
      },
    },
  },
});

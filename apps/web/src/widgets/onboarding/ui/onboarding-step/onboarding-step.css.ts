import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  flexShrink: 0,
});

export const step = recipe({
  base: {
    ...typography.body7_sb_14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
  },
  variants: {
    status: {
      'In Process': {
        color: themeVars.color.grayscale.white,
        backgroundColor: themeVars.color.primary[900],
        outline: `1px solid ${themeVars.color.primary[500]}`,
        border: `1px solid ${themeVars.color.primary[500]}`,
      },
      Disabled: {
        color: themeVars.color.grayscale.gray600,
        backgroundColor: themeVars.color.grayscale.gray400,
      },
    },
  },
});

const activeStatus = {
  color: themeVars.color.primary[900],
} as const;

const inactiveStatus = {
  color: themeVars.color.primary[600],
} as const;

export const title = recipe({
  base: {
    ...typography.cap2_m_12,
  },
  variants: {
    status: {
      Done: activeStatus,
      'In Process': activeStatus,
      Disabled: inactiveStatus,
    },
  },
});

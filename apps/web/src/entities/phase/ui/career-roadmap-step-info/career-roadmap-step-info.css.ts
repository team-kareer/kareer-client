import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
});

export const phase = recipe({
  variants: {
    isActive: {
      true: {
        ...typography.body4_sb_16,
        color: themeVars.color.primary[500],
      },
      false: {
        ...typography.body8_m_14,
        color: themeVars.color.primary[400],
      },
    },
  },
});

export const tag = recipe({
  base: {
    ...typography.cap1_sb_12,
    padding: '0.5rem 1.2rem',
    border: '1px solid transparent',
    borderRadius: '20px',
  },
  variants: {
    tag: {
      completed: {
        color: themeVars.color.pastel.kamint_500,
        backgroundColor: themeVars.color.pastel.kamint_100,
      },
      incompleted: {
        color: themeVars.color.pastel.kared_500,
        backgroundColor: themeVars.color.pastel.kared_100,
      },
      remained: {
        color: themeVars.color.primary[500],
        backgroundColor: themeVars.color.primary[100],
      },
      scheduled: {
        color: themeVars.color.primary[500],
        borderColor: themeVars.color.grayscale.gray300,
        backgroundColor: themeVars.color.grayscale.white,
      },
    },
  },
});

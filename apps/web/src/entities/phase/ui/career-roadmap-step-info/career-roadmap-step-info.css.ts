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
  base: {
    transition:
      'color 0.3s ease-in-out, font-size 0.3s ease-in-out, font-weight 0.3s ease-in-out',
  },
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

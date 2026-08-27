import { themeVars, typography } from '@kds/ui/styles';
import { recipe } from '@vanilla-extract/recipes';

export const badge = recipe({
  base: {
    ...typography.cap1_sb_12,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '99px',
  },
  variants: {
    tone: {
      light: {
        padding: '0.5rem 1.6rem',
        borderColor: themeVars.color.primary[300],
        color: themeVars.color.primary[500],
        backgroundColor: themeVars.color.primary[100],
      },
      dark: {
        padding: '0.6rem 1.6rem',
        borderColor: themeVars.color.primary[700],
        color: themeVars.color.primary[300],
        backgroundColor: 'rgba(59, 110, 248, 0.25)',
      },
    },
  },
  defaultVariants: {
    tone: 'light',
  },
});

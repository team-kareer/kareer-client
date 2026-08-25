import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  width: '100%',
  maxWidth: '48rem',
  margin: '0 auto',
});

export const form = style({
  display: 'flex',
  gap: '0.8rem',
});

export const inputWrapper = style({
  flex: 1,
  minWidth: 0,
});

export const note = recipe({
  base: {
    marginTop: '1rem',
    color: themeVars.color.grayscale.gray500,
  },
  variants: {
    variant: {
      hero: {
        ...typography.cap3_r_12,
      },
      final: {
        ...typography.body6_r_16,
        marginBottom: '3.6rem',
        lineHeight: 1.6,
      },
    },
  },
});

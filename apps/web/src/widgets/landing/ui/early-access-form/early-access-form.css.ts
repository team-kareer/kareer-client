import { themeVars } from '@kds/ui/styles';
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
        fontSize: '1.1rem',
      },
      final: {
        marginBottom: '3.6rem',
        fontSize: '1.6rem',
      },
    },
  },
});

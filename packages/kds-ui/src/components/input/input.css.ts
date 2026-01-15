import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputWrapper = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const icon = style({
  position: 'absolute',
  right: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
});

export const inputBox = recipe({
  base: {
    display: 'block',
    width: '100%',
    padding: '1.55rem 2rem',
    borderRadius: '10px',
    border: `1px solid ${themeVars.color.grayscale.gray300}`,
    backgroundColor: themeVars.color.grayscale.white,
    color: themeVars.color.grayscale.gray800,

    ...typography.body5_m_16,

    '::placeholder': {
      color: themeVars.color.grayscale.gray400,
      ...typography.body6_r_16,
    },

    ':focus': {
      outline: 'none',
      border: `1.5px solid ${themeVars.color.primary[500]}`,
    },
  },

  variants: {
    error: {
      true: {
        border: `1px solid ${themeVars.color.pastel.kared_500}`,
        paddingRight: '3.9rem',
        ':focus': {
          border: `1px solid ${themeVars.color.pastel.kared_500}`,
          paddingRight: '3.9rem',
        },
      },
    },
  },
});

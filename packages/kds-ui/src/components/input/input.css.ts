import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const inputFocusStyles = {
  selectors: {
    '&:focus-within': {
      borderColor: themeVars.color.primary[500],
      boxShadow: `0 0 0 0.5px ${themeVars.color.primary[500]}`,
    },
  },
};

export const inputWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0 2rem',
    borderRadius: '10px',
    border: `1px solid ${themeVars.color.grayscale.gray300}`,
    backgroundColor: themeVars.color.grayscale.white,
  },
  variants: {
    status: {
      default: {
        ...inputFocusStyles,
      },
      error: {
        borderColor: themeVars.color.pastel.kared_500,
        selectors: {
          '&:focus-within': {
            borderColor: themeVars.color.pastel.kared_500,
            boxShadow: `0 0 0 0.5px ${themeVars.color.pastel.kared_500}`,
          },
        },
      },
      success: {
        borderColor: themeVars.color.pastel.kamint_500,
        selectors: {
          '&:focus-within': {
            borderColor: themeVars.color.pastel.kamint_500,
            boxShadow: `0 0 0 0.5px ${themeVars.color.pastel.kamint_500}`,
          },
        },
      },
    },
  },
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '0.8rem',
  flexShrink: 0,
  pointerEvents: 'none',
});

export const inputBox = style({
  flex: 1,
  width: '100%',
  padding: '1.55rem 0',
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',

  color: themeVars.color.grayscale.gray800,
  ...typography.body5_m_16,

  '::placeholder': {
    color: themeVars.color.grayscale.gray400,
    ...typography.body6_r_16,
  },
});

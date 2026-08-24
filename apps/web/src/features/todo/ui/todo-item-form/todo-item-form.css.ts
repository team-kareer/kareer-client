import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.2rem 1.6rem',
    gap: '0.8rem',
    borderRadius: '10px',
    backgroundColor: themeVars.color.grayscale.gray100,
  },
  variants: {
    hasError: {
      true: {
        boxShadow: `inset 0 0 0 2px ${themeVars.color.pastel.kared_500}`,
      },
      false: {
        boxShadow: `inset 0 0 0 2px ${themeVars.color.primary[500]}`,
      },
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

export const checkboxPlaceholder = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  flex: 1,
  minWidth: 0,
});

export const titleInput = style({
  ...typography.body8_m_14,

  display: 'block',
  width: '100%',
  outline: 'none',
  backgroundColor: 'transparent',
  color: themeVars.color.grayscale.gray800,
  resize: 'none',
  overflow: 'hidden',
  wordBreak: 'break-word',

  selectors: {
    '&::placeholder': {
      color: themeVars.color.grayscale.gray400,
    },
  },
});

export const dueRow = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

export const daysInput = recipe({
  base: {
    ...typography.cap3_r_12,

    display: 'inline-block',
    verticalAlign: 'middle',
    width: 'auto',
    minWidth: '2.4rem',
    padding: '0.2rem 0.8rem',
    margin: '0 0.2rem',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: 'transparent',
    color: themeVars.color.grayscale.gray900,
    textAlign: 'center',

    selectors: {
      '&::placeholder': {
        color: themeVars.color.grayscale.gray500,
      },
    },
  },
  variants: {
    hasError: {
      true: {
        borderColor: themeVars.color.pastel.kared_500,
      },
      false: {
        borderColor: themeVars.color.grayscale.gray400,
      },
    },
  },
  defaultVariants: {
    hasError: false,
  },
});

export const errorMessage = style({
  ...typography.cap3_r_12,
  color: themeVars.color.pastel.kared_500,
});

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

const baseContainerStyles = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.2rem 1.6rem',
  borderRadius: '10px',
  gap: '1.2rem',
});

export const container = style([
  baseContainerStyles,
  {
    backgroundColor: themeVars.color.grayscale.white,
    transition: 'background-color 0.2s ease',
    cursor: 'pointer',

    selectors: {
      [`&:hover`]: {
        backgroundColor: themeVars.color.grayscale.gray200,
      },
      '&:active:not(:has(button:active))': {
        backgroundColor: themeVars.color.grayscale.gray300,
      },
    },
  },
]);

export const content = style({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray900,
  userSelect: 'none',
});

export const dueDate = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
  userSelect: 'none',
});

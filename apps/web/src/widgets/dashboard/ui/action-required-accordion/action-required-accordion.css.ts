import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.6rem 2rem',
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.gray100,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const left_section = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const text = recipe({
  base: {
    ...typography.body7_sb_14,
    userSelect: 'none',
  },
  variants: {
    textTone: {
      gray: {
        color: themeVars.color.grayscale.gray800,
      },
      primary: {
        color: themeVars.color.primary[500],
      },
    },
  },
});

export const icon = style({
  color: themeVars.color.grayscale.gray800,
  cursor: 'pointer',
});

export const wrapper = recipe({
  base: {
    display: 'grid',
    transition: 'grid-template-rows 0.3s ease-out',
  },
  variants: {
    isOpen: {
      true: {
        gridTemplateRows: '1fr',
      },
      false: {
        gridTemplateRows: '0fr',
      },
    },
  },
});

export const inner = style({
  minHeight: '0',
  overflow: 'hidden',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginTop: '1.6rem',
  maxHeight: '16.2rem',
  overflowY: 'scroll',
});

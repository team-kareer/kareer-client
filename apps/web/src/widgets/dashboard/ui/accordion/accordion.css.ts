import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.gray100,
});

export const header = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.6rem 2rem',
    cursor: 'pointer',
  },
  variants: {
    isDone: {
      true: {
        cursor: 'auto',
      },
      false: {
        cursor: 'pointer',
      },
    },
  },
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
    isDone: {
      true: { transition: 'none' },
      false: {},
    },
  },
});

export const inner = style({
  minHeight: '0',
  overflow: 'hidden',
});

export const content = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    margin: '0 2rem 1.6rem 2rem',
    maxHeight: '16.2rem',
    overflowY: 'scroll',
  },
  variants: {
    isDone: {
      true: {
        margin: '0 2rem',
      },
      false: {
        margin: '0 2rem 1.6rem 2rem',
      },
    },
  },
});

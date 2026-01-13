import { themeVars, typography } from '@kds/ui/styles';
import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const titleColor = createVar();
const timeColor = createVar();

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
  width: 'fit-content',
});

export const button = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    padding: '1.2rem 1.6rem',
    border: '1px solid',
    borderRadius: '8px',
    backgroundColor: themeVars.color.grayscale.white,
    cursor: 'pointer',
    vars: {
      [titleColor]: themeVars.color.primary[500],
      [timeColor]: themeVars.color.primary[400],
    },
  },
  variants: {
    isActive: {
      true: {
        borderColor: themeVars.color.primary[500],
        ':hover': {
          backgroundColor: themeVars.color.primary[100],
        },
        ':active': {
          borderColor: themeVars.color.primary[400],
          backgroundColor: themeVars.color.primary[200],
        },
      },
      false: {
        borderColor: themeVars.color.primary[200],
        vars: {
          [titleColor]: themeVars.color.primary[400],
          [timeColor]: themeVars.color.primary[300],
        },
        ':hover': {
          borderColor: themeVars.color.primary[300],
          backgroundColor: themeVars.color.primary[100],
        },
        ':active': {
          borderColor: themeVars.color.primary[400],
          backgroundColor: themeVars.color.primary[200],
          vars: {
            [titleColor]: themeVars.color.primary[500],
            [timeColor]: themeVars.color.primary[400],
          },
        },
      },
    },
  },
});

export const title = style({
  ...typography.body7_sb_14,
  color: titleColor,
});

export const time = style({
  ...typography.cap2_m_12,
  color: timeColor,
});

export const stepbar = style({
  width: '22rem',
  padding: '1rem 0',
  position: 'relative',
});

export const line = recipe({
  base: {
    width: '100%',
    height: '0.4rem',
    borderRadius: '100px',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: themeVars.color.primary[500],
      },
      false: {
        backgroundColor: themeVars.color.primary[200],
      },
    },
  },
});

export const circle = recipe({
  base: {
    ...typography.body7_sb_14,
    width: '2.4rem',
    height: '2.4rem',
    border: `2px solid transparent`,
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: themeVars.color.primary[500],
        color: themeVars.color.grayscale.white,
      },
      false: {
        backgroundColor: themeVars.color.primary[100],
        color: themeVars.color.primary[400],
        borderColor: themeVars.color.primary[200],
      },
    },
  },
});

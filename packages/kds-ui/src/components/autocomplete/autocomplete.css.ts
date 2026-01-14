import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars, typography } from '../../styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const inputContainer = style({
  position: 'relative',
  display: 'flex',
  width: '33rem',
  height: '5rem',
  padding: '1.55rem 2rem',
  borderRadius: '1rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: themeVars.color.grayscale.white,
  selectors: {
    '&:focus-within': {
      border: `1.5px solid ${themeVars.color.primary[500]}`,
    },
  },
});

export const title = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
});

export const label = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
});

export const input = recipe({
  base: {
    outline: 'none',
    border: 'none',
    flex: 1,
    backgroundColor: 'transparent',
  },
  variants: {
    hasValue: {
      false: {
        ...typography.body6_r_16,
        color: themeVars.color.grayscale.gray400,
      },
      true: {
        ...typography.body5_m_16,
        color: themeVars.color.grayscale.gray800,
      },
    },
  },
  defaultVariants: {
    hasValue: false,
  },
});

export const iconWrapper = style({
  display: 'flex',
  flexShrink: 0,
  padding: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
});

export const dropdown = style({
  ...typography.body6_r_16,
  color: themeVars.color.grayscale.gray800,
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  padding: 0,
  zIndex: 1000,
  borderRadius: '1rem',
  backgroundColor: themeVars.color.grayscale.white,
  maxHeight: '20rem',
  overflowY: 'auto',
  listStyle: 'none',
  marginTop: '0.8rem',
});

export const option = style({
  padding: '1.55rem 2rem',
  minHeight: '5rem',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: themeVars.color.grayscale.gray100,
  },
  ':active': {
    backgroundColor: themeVars.color.grayscale.gray400,
  },
  selectors: {
    '&:first-child:hover': {
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
    },
    '&:last-child:hover': {
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem',
    },
  },
});

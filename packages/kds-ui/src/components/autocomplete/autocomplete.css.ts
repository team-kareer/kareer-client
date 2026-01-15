import { style } from '@vanilla-extract/css';

import { themeVars, typography } from '../../styles';

import { zIndex } from '../../styles/tokens/zIndex.css';

export const inputContainer = style({
  position: 'relative',
  display: 'flex',
  padding: '1.55rem 2rem',
  borderRadius: '10px',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: themeVars.color.grayscale.white,
  selectors: {
    '&:focus-within': {
      border: `1px solid ${themeVars.color.primary[500]}`,
      boxShadow: `0 0 0 0.5px ${themeVars.color.primary[500]}`,
    },
  },
});

export const input = style({
  outline: 'none',
  border: 'none',
  flex: 1,
  backgroundColor: 'transparent',
  ...typography.body5_m_16,
  color: themeVars.color.grayscale.gray800,
  selectors: {
    '&::placeholder': {
      color: themeVars.color.grayscale.gray400,
      ...typography.body6_r_16,
    },
  },
});

export const toggle = style({
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
  backgroundColor: themeVars.color.grayscale.white,
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  padding: 0,
  zIndex: zIndex.autocomplete,
  borderRadius: '10px',
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
    backgroundColor: themeVars.color.grayscale.gray300,
  },
  ':active': {
    backgroundColor: themeVars.color.grayscale.gray400,
  },
  selectors: {
    '&:first-child:hover': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&:last-child:hover': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
  },
});

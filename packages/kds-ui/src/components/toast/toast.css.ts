import { createVar, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars, typography, zIndex } from '../../styles';

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.8rem 1.6rem',
  gap: '1.6rem',
  backgroundColor: themeVars.color.grayscale.gray900,
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
});

export const message = style({
  ...typography.body9_r_14,
  margin: 0,
  color: themeVars.color.grayscale.white,
});

export const divider = style({
  flexShrink: 0,
  width: '1px',
  alignSelf: 'stretch',
  backgroundColor: themeVars.color.grayscale.gray700,
});

export const action = style({
  display: 'inline-flex',
  alignItems: 'center',
  flexShrink: 0,
});

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-0.8rem)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-0.8rem)',
  },
});

export const anchor = createVar();

export const viewport = style({
  position: 'fixed',
  positionAnchor: anchor,
  top: 'calc(anchor(top) + 1.5rem)',
  right: 'calc(anchor(right) - 1.3rem)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '0.4rem',
  zIndex: zIndex.toast,
});

export const toastItem = recipe({
  base: {
    animation: `${slideIn} 200ms ease-out`,
  },
  variants: {
    leaving: {
      true: {
        animation: `${fadeOut} 200ms ease-in forwards`,
        pointerEvents: 'none',
      },
      false: {},
    },
  },
});

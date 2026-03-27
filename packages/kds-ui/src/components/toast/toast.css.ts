import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars, typography, zIndex } from '../../styles';
export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  height: '4.4rem',
  padding: '1rem',
  backgroundColor: themeVars.color.grayscale.gray600,

  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
  borderRadius: '10px',
});

export const message = style({
  ...typography.body9_r_14,
  margin: 0,
  color: themeVars.color.grayscale.white,
});

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(0.8rem)',
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
    transform: 'translateY(0.8rem)',
  },
});

export const viewport = style({
  position: 'fixed',
  left: '50%',
  bottom: '3.2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  transform: 'translateX(-50%)',
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
      },
      false: {},
    },
  },
});

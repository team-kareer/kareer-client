import { keyframes, style } from '@vanilla-extract/css';

import { zIndex } from '../../styles';

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
  pointerEvents: 'none',
});

export const toastItem = style({
  pointerEvents: 'auto',
  animation: `${slideIn} 200ms ease-out`,
});

export const toastItemLeaving = style({
  animation: `${fadeOut} 200ms ease-in forwards`,
});

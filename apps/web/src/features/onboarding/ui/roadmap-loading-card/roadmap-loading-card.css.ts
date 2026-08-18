import { themeVars, typography } from '@kds/ui/styles';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

const fadeOut = keyframes({
  to: { opacity: 0 },
});

const delayedTransition = '700ms';
const reducedMotion = '(prefers-reduced-motion: reduce)';

export const card = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '56rem',
    height: '44rem',
    padding: '4rem',
    gap: '3rem',
    backgroundColor: themeVars.color.grayscale.white,
    border: `1px solid ${themeVars.color.grayscale.gray300}`,
    borderRadius: '20px',
  },
  variants: {
    isComplete: {
      true: {
        animation: `${fadeOut} 300ms ease-in 700ms forwards`,
        '@media': {
          [reducedMotion]: {
            animation: `${fadeOut} 1ms linear forwards`,
          },
        },
      },
      false: {},
    },
  },
});

export const heading = style({
  ...typography.sub1_sb_22,
  color: themeVars.color.grayscale.gray800,
});

export const screenReaderStatus = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
});

export const stepList = style({
  width: '100%',
  overflow: 'hidden',
});

export const stepRow = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '7.8rem',
    padding: '1rem 1.4rem',
    gap: '1.6rem',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: `background-color 300ms ease ${delayedTransition}`,
    '@media': {
      [reducedMotion]: { transition: 'none' },
    },
  },
  variants: {
    status: {
      active: { backgroundColor: themeVars.color.grayscale.gray100 },
      done: { backgroundColor: 'transparent' },
      pending: { backgroundColor: 'transparent' },
    },
  },
});

export const statusIcon = style({
  position: 'relative',
  flexShrink: 0,
  width: '2.4rem',
  height: '2.4rem',
});

export const pendingIcon = recipe({
  base: {
    position: 'absolute',
    inset: '0.2rem',
    border: `2px solid ${themeVars.color.grayscale.gray300}`,
    borderRadius: '50%',
    transition: `opacity 300ms ease ${delayedTransition}`,
    '@media': {
      [reducedMotion]: { transition: 'none' },
    },
  },
  variants: {
    status: {
      active: { opacity: 0 },
      done: { opacity: 0, transitionDelay: '0ms' },
      pending: { opacity: 1 },
    },
  },
});

export const loadingIcon = recipe({
  base: {
    position: 'absolute',
    inset: '0.2rem',
    border: `2px solid ${themeVars.color.primary[200]}`,
    borderTopColor: themeVars.color.primary[500],
    borderRadius: '50%',
    animation: `${spin} 800ms linear infinite`,
    transition: `opacity 300ms ease ${delayedTransition}`,
    '@media': {
      [reducedMotion]: {
        animation: 'none',
        transition: 'none',
      },
    },
  },
  variants: {
    status: {
      active: { opacity: 1 },
      done: { opacity: 0, transition: 'opacity 220ms ease-out' },
      pending: { opacity: 0 },
    },
  },
});

export const doneIcon = recipe({
  base: {
    position: 'absolute',
    inset: '0.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: themeVars.color.grayscale.white,
    backgroundColor: themeVars.color.primary[500],
    borderRadius: '50%',
    opacity: 0,
    transform: 'scale(0.75)',
    transition: 'opacity 220ms ease-out, transform 220ms ease-out',
    '@media': {
      [reducedMotion]: { transition: 'none' },
    },
  },
  variants: {
    status: {
      active: {},
      done: { opacity: 1, transform: 'scale(1)' },
      pending: {},
    },
  },
});

export const stepContent = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  minWidth: 0,
  overflow: 'hidden',
});

export const stepTitle = recipe({
  base: {
    ...typography.body5_m_16,
    transition: `color 300ms ease ${delayedTransition}, font-weight 300ms ease ${delayedTransition}`,
    '@media': {
      [reducedMotion]: { transition: 'none' },
    },
  },
  variants: {
    status: {
      active: {
        ...typography.body4_sb_16,
        color: themeVars.color.grayscale.gray800,
      },
      done: { color: themeVars.color.grayscale.gray600 },
      pending: { color: themeVars.color.grayscale.gray400 },
    },
  },
});

export const stepDescription = recipe({
  base: {
    ...typography.body9_r_14,
    color: themeVars.color.grayscale.gray500,
    maxHeight: 0,
    marginTop: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: `max-height 300ms ease ${delayedTransition}, margin-top 300ms ease ${delayedTransition}, opacity 300ms ease ${delayedTransition}`,
    '@media': {
      [reducedMotion]: { transition: 'none' },
    },
  },
  variants: {
    status: {
      active: { maxHeight: '1.7rem', marginTop: '0.5rem', opacity: 1 },
      done: {},
      pending: {},
    },
  },
});

export const connector = style({
  position: 'relative',
  display: 'block',
  width: '0.2rem',
  height: '3rem',
  marginLeft: '2.5rem',
  overflow: 'hidden',
  backgroundColor: themeVars.color.grayscale.gray300,
  borderRadius: '1px',
});

export const connectorFill = recipe({
  base: {
    position: 'absolute',
    inset: 0,
    backgroundColor: themeVars.color.primary[500],
    transform: 'scaleY(0)',
    transformOrigin: 'top',
    transition: 'transform 520ms ease-in-out 180ms',
    '@media': {
      [reducedMotion]: { transition: 'none' },
    },
  },
  variants: {
    isActive: {
      true: { transform: 'scaleY(1)' },
      false: {},
    },
  },
});

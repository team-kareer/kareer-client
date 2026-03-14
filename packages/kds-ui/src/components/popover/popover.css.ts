import { themeVars } from '@kds/ui/styles';
import { createVar, style, styleVariants } from '@vanilla-extract/css';

export const anchor = createVar();
export const offsetY = createVar();

export const base = style({
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
  positionAnchor: anchor,

  opacity: 0,
  transform: 'scale(0)',
  transition:
    'opacity 0.3s ease, transform 0.3s ease, display 0.3s allow-discrete, overlay 0.3s allow-discrete',

  selectors: {
    '&:popover-open': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  '@starting-style': {
    selectors: {
      '&:popover-open': {
        opacity: 0,
        transform: 'scale(0)',
      },
    },
  },
});

export const placement = styleVariants({
  'top-start': {
    bottom: `calc(anchor(bottom) + ${offsetY})`,
    left: 'anchor(left)',
    right: 'auto',
    transformOrigin: 'bottom left',
  },
  'top-end': {
    bottom: `calc(anchor(bottom) + ${offsetY})`,
    left: 'auto',
    right: 'anchor(right)',
    transformOrigin: 'bottom right',
  },
  'bottom-start': {
    top: `calc(anchor(bottom) + ${offsetY})`,
    left: 'anchor(left)',
    right: 'auto',
    transformOrigin: 'top left',
  },
  'bottom-end': {
    top: `calc(anchor(bottom) + ${offsetY})`,
    left: 'auto',
    right: 'anchor(right)',
    transformOrigin: 'top right',
  },
});

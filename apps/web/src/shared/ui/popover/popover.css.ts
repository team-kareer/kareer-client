import { themeVars } from '@kds/ui/styles';
import { createVar, style, styleVariants } from '@vanilla-extract/css';

export const anchor = createVar();
export const offsetY = createVar();

export const base = style({
  padding: '2rem',
  border: `0.1rem solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
  positionAnchor: anchor,
});

export const placement = styleVariants({
  'top-start': {
    bottom: `calc(anchor(bottom) + ${offsetY})`,
    left: 'anchor(left)',
    right: 'auto',
  },
  'top-end': {
    bottom: `calc(anchor(bottom) + ${offsetY})`,
    left: 'auto',
    right: 'anchor(right)',
  },
  'bottom-start': {
    top: `calc(anchor(bottom) + ${offsetY})`,
    left: 'anchor(left)',
    right: 'auto',
  },
  'bottom-end': {
    top: `calc(anchor(bottom) + ${offsetY})`,
    left: 'auto',
    right: 'anchor(right)',
  },
});

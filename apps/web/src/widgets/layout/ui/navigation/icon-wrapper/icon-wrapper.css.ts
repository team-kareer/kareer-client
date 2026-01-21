import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {
    color: themeVars.color.grayscale.gray900,
    position: 'relative',
    overflow: 'visible',
    padding: '2rem',
    cursor: 'pointer',
    backgroundColor: themeVars.color.grayscale.white,
    borderRadius: '20px',
    transition: 'background-color 400ms ease, color 150ms ease',

    selectors: {
      '&:hover': {
        backgroundColor: themeVars.color.grayscale.gray200,
      },
      '&:active': {
        backgroundColor: themeVars.color.grayscale.gray400,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.primary[500],
      },
      false: {},
    },
  },
});

export const icon = style({
  display: 'inline-flex',
  transition: 'transform 200ms ease',
  selectors: {
    [`${wrapper.classNames.base}:active &`]: {
      transform: 'scale(0.9)',
    },
  },
});

export const tag = style({
  position: 'absolute',
  top: '50%',
  left: 'calc(100% + 0.8rem)',
  transform: 'translateY(-50%) translateX(-0.4rem)',
  opacity: 0,
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  zIndex: themeVars.zIndex.tag,
  transition: 'opacity 150ms ease, transform 150ms ease',

  selectors: {
    [`${wrapper.classNames.base}:hover &`]: {
      opacity: 1,
      transform: 'translateY(-50%) translateX(0)',
    },
  },
});

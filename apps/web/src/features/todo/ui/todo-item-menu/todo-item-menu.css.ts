import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const MENU_ANCHOR = '--todo-item-menu';

export const trigger = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    isOpen: {
      true: { anchorName: MENU_ANCHOR },
      false: {},
    },
  },
  defaultVariants: { isOpen: false },
});

export const panel = style({
  positionAnchor: MENU_ANCHOR,
  margin: 0,
  top: 'calc(anchor(bottom) + 0.4rem)',
  right: 'anchor(right)',
  left: 'auto',

  display: 'flex',
  flexDirection: 'column',
  minWidth: '8rem',
  padding: '0.4rem',
  gap: '0.2rem',

  border: `1px solid ${themeVars.color.grayscale.gray200}`,
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.white,
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.12)',

  selectors: {
    '&:not(:popover-open)': {
      display: 'none',
    },
  },
});

export const menuItem = style({
  ...typography.body8_m_14,

  display: 'flex',
  alignItems: 'center',
  padding: '0.4rem',
  gap: '0.4rem',

  borderRadius: '4px',
  color: themeVars.color.grayscale.gray500,
  whiteSpace: 'nowrap',

  selectors: {
    '&:hover': {
      backgroundColor: themeVars.color.grayscale.gray100,
    },
  },
});

export const menuItemIcon = style({
  flexShrink: 0,
  color: themeVars.color.grayscale.gray500,
});

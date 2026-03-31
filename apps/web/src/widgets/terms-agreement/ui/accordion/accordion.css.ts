import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const trigger = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const checkArea = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray700,
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const icon = style({
  color: themeVars.color.grayscale.gray500,
  cursor: 'pointer',
});

export const wrapper = recipe({
  base: {
    display: 'grid',
    transition: 'grid-template-rows 0.25s ease-out',
  },
  variants: {
    isOpen: {
      true: {
        gridTemplateRows: '1fr',
      },
      false: {
        gridTemplateRows: '0fr',
      },
    },
  },
});

export const inner = style({
  minHeight: '0',
  overflow: 'hidden',
});

export const content = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
  whiteSpace: 'pre-wrap',
  marginTop: '0.8rem',
  marginLeft: '3.6rem',
});

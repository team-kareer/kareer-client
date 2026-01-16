import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const left_section = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const title = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray800,
});

export const grayText = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
});

export const right_section = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
});

export const wrapper = recipe({
  base: {
    display: 'grid',
    transition: 'grid-template-rows 0.3s ease-out',
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

export const line = style({
  height: '2rem',
  borderBottom: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const content = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.6rem',
  paddingTop: '2rem',
});

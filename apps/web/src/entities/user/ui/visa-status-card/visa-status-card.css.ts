import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  padding: '1.6rem 2rem',
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '20px',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  minWidth: '24.6rem',
  maxWidth: '25.8rem',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const statusName = recipe({
  base: {
    ...typography.cap1_sb_12,
  },
  variants: {
    isActive: {
      true: {
        color: themeVars.color.primary[500],
      },
      false: {
        color: themeVars.color.grayscale.gray400,
      },
    },
  },
});

export const iconWrapper = style({
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  width: '6.4rem',
  height: '6.4rem',
  overflow: 'hidden',
});

export const textContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const title = style({
  ...typography.body4_sb_16,
  color: themeVars.color.grayscale.gray800,
});

export const date = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

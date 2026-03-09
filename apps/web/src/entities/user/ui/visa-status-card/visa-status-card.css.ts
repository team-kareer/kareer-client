import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  padding: '1.2rem',
  backgroundColor: themeVars.color.grayscale.gray100,
  borderRadius: '8px',
});

export const top = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const icon = style({
  color: themeVars.color.grayscale.gray500, // 아이콘 색은 여기서만
});

export const statusName = recipe({
  base: {
    ...typography.body8_m_14,
  },
  variants: {
    isActive: {
      true: { color: themeVars.color.primary[500] },
      false: { color: themeVars.color.grayscale.gray500 },
    },
  },
});

export const title = style({
  ...typography.body4_sb_16,
  color: themeVars.color.grayscale.gray800,
});

export const date = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
});

import { themeVars, typography } from '@kds/ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '34.8rem',
});

export const top = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  paddingBottom: '1.2rem',
  borderBottom: `1px solid ${themeVars.color.grayscale.gray200}`,
});

export const middle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  paddingBottom: '2rem',
  borderBottom: `1px solid ${themeVars.color.grayscale.gray200}`,
});

export const text = styleVariants({
  name: {
    ...typography.body1_sb_18,
    color: themeVars.color.grayscale.gray900,
  },
  email: {
    ...typography.body6_r_16,
    color: themeVars.color.grayscale.gray500,
  },
  status: {
    ...typography.body7_sb_14,
    color: themeVars.color.grayscale.gray800,
  },
  logout: {
    ...typography.body5_m_16,
    color: themeVars.color.grayscale.gray500,
  },
});

export const bottom = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
  cursor: 'pointer',
});

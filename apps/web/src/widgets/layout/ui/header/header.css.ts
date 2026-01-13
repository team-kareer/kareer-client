import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem',
  backgroundColor: themeVars.color.grayscale.white,
  borderBottom: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const left_section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const title = style({
  ...typography.sub1_sb_22,
  color: themeVars.color.grayscale.gray800,
});

export const subTitle = style({
  ...typography.body6_r_16,
  color: themeVars.color.grayscale.gray500,
});

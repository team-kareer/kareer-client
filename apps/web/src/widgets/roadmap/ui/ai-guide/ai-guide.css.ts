import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '1.6rem 2rem',
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.gray800,
});

export const titleContainer = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.white,
});

export const description = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray300,
});

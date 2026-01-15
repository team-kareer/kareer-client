import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  width: '25.6rem',
  padding: '2rem',
  margin: '1.6rem 0',
  gap: '1.6rem',

  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const title = style({
  ...typography.body1_sb_18,
  color: themeVars.color.grayscale.gray800,
});

export const tabList = style({
  display: 'flex',
  gap: '0.4rem',
});

export const tabPanel = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.6rem',
  gap: '0.4rem',
});

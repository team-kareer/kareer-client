import { style } from '@vanilla-extract/css';

import { themeVars, typography } from '@kds/ui/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  paddingLeft: '6.6rem',
});

export const numbering = style({
  ...typography.body7_sb_14,
  color: themeVars.color.primary[400],
  backgroundColor: themeVars.color.primary[100],
  border: `2px solid ${themeVars.color.primary[200]}`,
  borderRadius: '10px',
  width: '2.4rem',
  height: '2.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  ...typography.head4_sb_24,
  color: themeVars.color.grayscale.gray800,
});

import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '1.2rem',
  marginBottom: '3.2rem',
});

export const title = style({
  ...typography.head4_sb_24,
  color: themeVars.color.grayscale.gray800,
});

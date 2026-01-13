import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  padding: '14.2rem 6.6rem 8rem 8rem',
});

export const copy = style({
  ...typography.head1_sb_40,
  color: themeVars.color.grayscale.gray900,
  whiteSpace: 'pre-wrap',
});

export const highlight = style({
  color: themeVars.color.primary[500],
});

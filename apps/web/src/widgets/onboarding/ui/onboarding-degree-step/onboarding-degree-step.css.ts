import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '0.8rem',
  gap: '0.4rem',
});

export const errorMessage = style({
  ...typography.body6_r_16,
  color: themeVars.color.pastel.kared_500,
  paddingTop: '0.4rem',
  minHeight: '2.4rem',
});

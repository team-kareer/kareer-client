import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const label = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray800,
  paddingBottom: '0.8rem',
});

export const errorMessage = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
  marginTop: '0.8rem',
});

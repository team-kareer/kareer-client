import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const errorText = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
});

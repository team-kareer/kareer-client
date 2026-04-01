import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  gap: '1.2rem',
});

export const errorMessage = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
  flex: 1,
  minWidth: 0,
  margin: 0,
});

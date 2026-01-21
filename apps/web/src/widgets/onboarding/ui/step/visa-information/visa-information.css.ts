import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.1rem 2.4rem',
  paddingRight: '6.6rem',
});

export const autoWrapper = style({
  paddingBottom: '2.2rem',
});

export const labelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
});

export const label = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
  paddingBottom: '0.8rem',
});

export const errorMessage = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
  marginTop: '0.8rem',
});

export const buttonWrapper = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
  marginTop: '0.8rem',
});

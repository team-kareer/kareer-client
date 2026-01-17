import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const contentTitleWrapper = style({
  paddingBottom: '3.2rem',
});

export const inputContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.1rem',
  padding: '0 6.6rem 0 0',
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

// Degree 전용
export const subLabel = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray400,
});

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '0.8rem',
  gap: '0.4rem',
});

export const errorMessage = style({
  ...typography.cap2_m_12,
  color: themeVars.color.pastel.kared_500,
  marginTop: '0.8rem',
  minHeight: '1.4rem',
});

export const textCount = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
  paddingTop: '0.8rem',
  textAlign: 'right',
});

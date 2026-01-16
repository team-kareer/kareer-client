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
  paddingBottom: '2.5rem',
});

// 첫 번째 열
export const infoWrapperCol1 = style({
  gridColumn: '1 / 2',
});

// 두 번째 열
export const infoWrapperCol2 = style({
  gridColumn: '2 / 3',
});

// 전체 너비 - Degree
export const infoWrapperFull = style({
  gridColumn: '1 / 3',
});

export const labelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
});

export const label = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
  paddingBottom: '1.1rem',
});

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
  minHeight: '1.1rem',
});

export const textCount = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
  marginTop: '0.8rem',
  textAlign: 'right',
});

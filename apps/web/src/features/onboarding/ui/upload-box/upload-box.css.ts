import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  width: '33rem',
  padding: '1.2rem',

  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const hiddenInput = style({
  display: 'none',
});

export const uploadContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem',
  width: '100%',
  height: '100%',
  padding: '2.8rem 9.4rem',

  border: `1px dashed ${themeVars.color.grayscale.gray400}`,
  borderRadius: '10px',
});

export const uploadTopSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
});

export const text = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray500,
});

export const fileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  padding: '1.4rem 1.8rem',

  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '10px',
});

export const fileTopSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const fileSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const fileName = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray700,
});

export const fileSize = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray400,
});

export const xButton = style({
  cursor: 'pointer',
  color: themeVars.color.grayscale.gray500,
});
